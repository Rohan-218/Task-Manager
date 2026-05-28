const express = require('express');
const taskController = require("../controllers/task.controller");

const router = express.Router();

/** @route POST /api/tasks/ */
router.post("/", taskController.createTaskController);

/** @route GET /api/tasks/ */
router.get("/", taskController.getTasksController);

/** @route PUT /api/tasks/:id */
router.put("/:id", taskController.updateTaskController);

/** @route DELETE /api/tasks/:id */
router.delete("/:id", taskController.deleteTaskController);

module.exports = router;