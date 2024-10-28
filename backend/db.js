const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:4K4itGYnPmyqgpbT@cluster0.3bg9h.mongodb.net/todosproject")

const todoSchema = mongoose.Schema({
    title : String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos' , todoSchema);
module.exports = {
    todo
}