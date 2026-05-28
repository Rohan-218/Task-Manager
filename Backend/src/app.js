const express = require('express');
const taskRouter = require("./routes/task.routes");
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
     message: 'Welcome to the Task Manager API',
     status: 'success' 
    });
});

app.get('/api/health', (req, res) => {
    res.status(200).json({
        message: 'API is healthy',
        status: 'success'
    });
});

app.use("/api/tasks", taskRouter);

module.exports = app;