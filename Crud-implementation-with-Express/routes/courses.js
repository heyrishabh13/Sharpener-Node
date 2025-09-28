const express = require("express");

const router = express.Router();

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];

router.get("/", (req, res) => {
  let resultStr = "Courses: ";
  for (let i = 0; i < courses.length; i++) {
    if (i === 0) {
      resultStr += courses[i].name + ", ";
    }
  }
  resultStr += courses[courses.length - 1].name;
  res.send(resultStr);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (id >= 1 && id <= courses.length) {
    res.send(
      `Course: ${courses[id - 1].name}, Description: ${courses[id - 1].description}`
    );
  } else {
    res.send(`Course not found`);
  }
});

module.exports = router;
