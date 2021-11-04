


exports.newTodo = async (req, res) => {
    console.log('New todo: \n' + req.body)

    const newTodo = new Todo(req.body)
}

exports.deleteTodo = async (req, res) => {
    console.log('Delete todo: \n'+req.body)

}

exports.editTodo = async (req, res) => {
    console.log('Edit todo: \n' + req.body)

}

exports.getAllTodos = async (req, res) => {
    console.log('Get all todo')

}

