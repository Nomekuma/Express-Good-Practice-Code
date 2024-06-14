const express = require("express");
const router = express.Router();
const fs = require("fs");
const taskPath = require("@utils/taskPath");

router.put("/:id", (req, res) => {
  const id = req.params.id;
  // Get the title and description from the request body
  const { title, description } = req.body;
  // Check if the title and description are provided in the request body
  if (!title || !description) {
    res.status(400).send({ message: "Please provide a title and description" });
  }
  // Read the tasks.json file
  try {
    fs.readFile(taskPath, "utf8", (err, data) => {
      if (err) {
        res.status(500).send({ message: "Internal Server Error" });
      } else {
        const tasks = JSON.parse(data);
        const task = tasks.find((task) => task.id == id);

        if (task) {
          task.title = title;
          task.description = description;
          fs.writeFileSync(taskPath, JSON.stringify(tasks, null, 2));
          res
            .status(200)
            .send({ message: "Task updated successfully", data: task });
        } else {
          res.status(404).send({ message: "Task not found" });
        }
      }
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
