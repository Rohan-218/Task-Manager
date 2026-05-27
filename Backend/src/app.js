const express = require('express');
const taskRouter = require("./routes/task.routes");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
     message: 'Welcome to the Task Manager API',
     status: 'success' 
    });
});

app.use("/api/tasks", taskRouter);

module.exports = app;