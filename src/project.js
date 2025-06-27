import { ToDoItem } from './todo.js';

export class Project {
    constructor(name, id = crypto.randomUUID()) {
        this.name = name;
        this.id = id;
        this.todoList = [];
    }

    addTodo(todo) {
        this.todoList.push(todo);
    }

    removeTodoById(todoId) {
        this.todoList = this.todoList.filter(todo => todo.id !== todoId);
    }

    static fromJSON(raw) {
        const project = new Project(raw.name, raw.id);
        if (Array.isArray(raw.todoList)) {
            raw.todoList.forEach(todoRaw => {
                const todo = ToDoItem.fromJSON(todoRaw);
                project.addTodo(todo);
            });
        }
        return project;
    }
}


