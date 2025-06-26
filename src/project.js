export class Project {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.todoList = [];
    }

    addTodo(todo) {
        this.todoList.push(todo);
    }

    removeTodoById(todoId) {
        this.todoList = this.todoList.filter(todo => todo.id !== todoId);
    }
}


