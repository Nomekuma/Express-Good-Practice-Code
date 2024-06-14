const fs = require("fs");
const taskPath = require("@utils/taskPath");

// create an empty array to store the tasks
const initialTasks = [];

// write the initial tasks to the tasks.json file
const writeInitialTasks = async () => {
  try {
    await fs.writeFileSync(taskPath, JSON.stringify(initialTasks, null, 2));
  } catch (error) {
    console.error(error);
  }
};

module.exports = writeInitialTasks;
