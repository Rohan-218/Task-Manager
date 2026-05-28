const express = require('express');
const taskController = require("../controllers/task.controller");

const router = express.Router();

/** @route POST /api/tasks/ */
router.post("/", taskController.createTaskController);

/** @route GET /api/tasks/ */
router.get("/", taskController.getTasksController);

module.exports = router;