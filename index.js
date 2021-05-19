//import (require) database
let { db } = require("./db.js");

//start express for app
const express = require("express");

const { uid } = require("./services.js");
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log("mission listen is a success");
});

//GET /db route
app.get("/db", (req, res) => {
  res.send(db);
});

//GET / route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//POST / destinations
//Expect the client to send us an objects
//{name, location, photo, description}
//
app.post("/destinations", (req, res) => {
  //req.query.search
  console.log(req.body);
  const { name, location, photo, description } = req.body;
  //   const userData = req.body;

  //   const name = userData.name;
  //   const location = userData.location;
  //   const photo = userData.photo;
  //   const description = userData.description;

  //validate that we have a name and a location
  if (
    name === undefined ||
    name.length === 0 ||
    location === undefined ||
    location.length === 0
  ) {
    res.status(400).send({ error: "name and location are required" });
  }

  //add the user data on my db
  db.push({
    id: uid(),
    name: name,
    location: location,
    photo: photo ? photo : "",
    description: description ? description : "",
  });

  res.send({ status: "success" });
});

app.delete("/destinations/:uid", (req, res) => {
  console.log(req.params);

  const id = req.params.uid;

  // const { uid: id } = req.params;

  const filtered = db.filter((dest) => {
    if (dest.id !== id) {
      return true;
    }
  });

  db = filtered;
  console.log(db);

  res.send({ status: "success" });
});

app.put;
