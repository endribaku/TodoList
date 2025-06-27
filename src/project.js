import { ToDoItem } from './todo.js';

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

    static fromJSON(raw) {
        const project = new Project(raw.id, raw.name);
        if (Array.isArray(raw.todoList)) {
            raw.todoList.forEach(todoRaw => {
                const todo = ToDoItem.fromJSON(todoRaw);
                project.addTodo(todo);
            });
        }
        return project;
    }
}


