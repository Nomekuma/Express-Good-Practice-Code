const express = require("express");
const router = express.Router();
const fs = require("fs");
const taskPath = require("@utils/taskPath");

router.get("/:id", (req, res) => {
  const id = req.params.id;
  // Read the tasks.json file
  fs.readFile(taskPath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send({ message: "Internal Server Error" });
    } else {
      const tasks = JSON.parse(data);
      // Find the task with the given id
      const task = tasks.find((task) => task.id == id);

      if (task) {
        res.status(200).send({ message: "Success", data: task });
      } else {
        res.status(404).send({ message: "Task not found" });
      }
    }
  });
});

module.exports = router;
