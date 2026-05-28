const taskModel = require("../models/task.model");

async function createTaskController(req, res) {
    try {
        const { title, description } = req.body;

        const isExist = await taskModel.findOne({ title});
        
        if (isExist) {
            return res.status(400).json({ message: "Task with this title already exists" });
        }

        const task = await taskModel.create({
             title,
             description 
        });
        
        return res.status(201).json({
            task: {
                _id: task._id,
                title: task.title,
                description: task.description
             },
             message: "Task created successfully",
             success: true
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

async function getTasksController(req, res) {
    try {
        const tasks = await taskModel.find().sort({ updatedAt: -1 });
        return res.status(200).json({
            tasks: tasks.map(task => ({
                _id: task._id,
                title: task.title,
                description: task.description
            })),
            message: "Tasks fetched successfully",
            success: true
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

async function updateTaskController(req, res) {
    try {
        const { id } = req.params;
        const { title, description } = req.body;    

        const task = await taskModel.findByIdAndUpdate(
            id,
            { title, description },
            { returnDocument: 'after' }
        );

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        return res.status(200).json({
            task: {
                _id: task._id,
                title: task.title,
                description: task.description
            },
            message: "Task updated successfully",
            success: true
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

async function deleteTaskController(req, res) {
    try {
        const { id } = req.params;
        const task = await taskModel.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        return res.status(200).json({
            task: {
                _id: task._id,
                title: task.title,
                description: task.description
            },
            message: "Task deleted successfully",
            success: true
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createTaskController,
    getTasksController,
    updateTaskController,
    deleteTaskController
};