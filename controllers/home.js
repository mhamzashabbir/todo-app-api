const Task = require('../models/task');

exports.getTasks = async (req, res, next) =>  {
    const tasks = await Task.find({});
    res.json(tasks);
}

exports.postTask = async (req, res, next) => {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
}

exports.getTask = async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
}

exports.putTask = async (req, res, next) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
}

exports.deleteTask = async (req, res, next) => {
    console.log(req.params.id);
    await Task.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.status(204).end();
}
