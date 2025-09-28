const express = require("express");

const students = [
  { id: 1, name: "Alice" },

  { id: 2, name: "Bob" },

  { id: 3, name: "Charlie" },
];

const router = express.Router();

router.get("/", (req, res) => {
  let str = "Students: ";
  for (let i = 0; i < students.length; i++) {
    if (i != students.length - 1) {
      str += students[i].name + ", ";
    }
  }
  str += students[students.length - 1].name;
  res.send(str);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (id >= 1 && id <= students.length) {
    res.send(`Student: ${students[id - 1].name}`);
  } else {
    res.send(`Student not found`);
  }
});

module.exports = router;
