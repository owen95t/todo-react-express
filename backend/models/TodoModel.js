const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    owner: {
        String: true,
        required: true
    },
    todo_name: {
        type: String,
        required: true
    }
})

TodoSchema.index({'$**': 'text'}) //Allows for text search on all String fields

module.exports = mongoose.model("TodoSchema", TodoSchema)