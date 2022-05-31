const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId
    },
}, {
    timestamps: true
})

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;