/* Todo_list JSON Object
todo_item = { id, owner, todo_name }
*/

class Todos {
    todos = [];

    createTodo(todo){
        //Implement add to database

        //Implement add to local
        this.todos.push(todo)
    }

    deleteTodo(todo){
        //Implement remove from database

        //Implement remove from local
        for (let i of this.todos) {
            if (i.id === todo.id) {

            }
        }
    }

    editTodo(){
        for (let i of this.todos) {

        }
    }
}