const Todo = require('../models/todo');


const getTodos = async (req, res) => {
    try {
        const data = await Todo.find();

        return res.status(200).json({
            message: "Succesfully fetched list of todos",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const createTodo = async (req, res) => {
    try {

        const body = req.body;
        const todo = new Todo(body);

        const data = await todo.save();

        return res.status(200).json({
            message: "Successfully todo created",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const getTodoById = async (req, res) => {

    const id = req.params.id;

    try {
        const data = await Todo.findOne({ _id: id});

        return res.status(200).json({
            message: "Succesfully fetched todo based on ID",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const updateTodo = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const data = await Todo.findOneAndUpdate({ _id: id}, body, {
            new: true,
            runValidators: true
        });

        return res.status(200).json({
            message: "Succesfully updated todo",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const deleteTodo = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await Todo.findOneAndDelete({ _id: id});

        return res.status(200).json({
            message: "Succesfully deleted todo",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

module.exports = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
}