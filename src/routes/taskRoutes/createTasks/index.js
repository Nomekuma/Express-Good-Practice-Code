const express = require("express");
const router = express.Router();
const fs = require("fs");
const taskPath = require("@utils/taskPath");

router.post("/", (req, res) => {
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
        // id will increment by 1 for each new task
        const id = tasks.length + 1;
        // Create a new task object to add to the tasks array
        const newTask = { id, title, description };
        tasks.push(newTask);
        fs.writeFileSync(taskPath, JSON.stringify(tasks, null, 2));
        res
          .status(200)
          .send({ message: "Task added successfully", data: newTask });
      }
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
