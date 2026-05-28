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
        const tasks = await taskModel.find().sort({ createdAt: 1 });
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

module.exports = {
    createTaskController,
    getTasksController
};