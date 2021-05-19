function generateUID() {
  //generate a unique ID of ten digits
  let uid = "";
  for (let i = 0; i < 10; i++) {
    const rand = Math.floor(Math.random() * 10);
    uid += rand;
  }
  return uid;
}

exports.uid = generateUID;
