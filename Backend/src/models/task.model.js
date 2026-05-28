const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [ true, "Task title is required"]
    },
    description: {
        type: String,
        required: [true, "Task description is required"]
    }
},{
    timestamps: true
});

const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel;