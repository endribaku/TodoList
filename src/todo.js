export class ToDoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isComplete = false;
        this.id = crypto.randomUUID();
    }

    setNote(note) {
        this.note = note;
    }

    changeCompleteStatus() {
        this.isComplete = !this.isComplete;
    }

    static fromJSON(raw) {
        const todo = new ToDoItem(raw.title, raw.description, raw.dueDate, raw.priority);
        todo.id = raw.id;
        todo.isComplete = raw.isComplete;
        todo.note = raw.note || "";
        return todo;
    }
}

