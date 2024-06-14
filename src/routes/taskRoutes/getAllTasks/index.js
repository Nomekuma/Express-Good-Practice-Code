const express = require("express");
const router = express.Router();
const fs = require("fs");
const taskPath = require("@utils/taskPath");

// Get all tasks
router.get("/", (req, res) => {
  // Read the tasks.json file
  fs.readFile(taskPath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send({ message: "Internal Server Error" });
    } else {
      res.status(200).send({ message: "Success", data: JSON.parse(data) });
    }
  });
});

module.exports = router;
