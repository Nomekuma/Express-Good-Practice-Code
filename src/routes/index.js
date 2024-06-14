const express = require("express");
const getAll = require("./taskRoutes/getAllTasks");
const getById = require("./taskRoutes/getTaskById");
const create = require("./taskRoutes/createTasks");
const update = require("./taskRoutes/updateTasks");
const deleteTask = require("./taskRoutes/deleteTasks");

// Create a new router
const router = express.Router();

// Use the task routes
router.use("/", getAll);
router.use("/", getById);
router.use("/", create);
router.use("/", update);
router.use("/", deleteTask);

module.exports = router;
