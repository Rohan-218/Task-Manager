const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [ true, "Task title is required"]
    },
    description: {
        type: String,
        required: [true, "Task description is required"]
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending"
    }
},{
    timestamps: true
});

const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel;