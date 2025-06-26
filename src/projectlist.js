import { ToDoItem } from './todo.js';
import { Project } from './project.js';
import {saveProjectsToStorage, getSavedProjects} from './storage.js';

let projectList = getSavedProjects();

function removeProject(projectId) {
    const index = projectList.findIndex(project => project.id === projectId);
    if (index !== -1) {
        projectList.splice(index, 1); 
        saveProjectsToStorage(projectList);
    }
}

function addProject(project) {
    projectList.push(project);
    saveProjectsToStorage(projectList);
}
function getProjectList() {
    return projectList;
}


function addTodoToProject(projectId, todo) {
    const index = projectList.findIndex(project => project.id === projectId);
    if(index !== -1) {
        projectList[index].addTodo(todo);
        saveProjectsToStorage(projectList);
    }
}

function removeTodoFromProject(projectId, todoId) {
    const index = projectList.findIndex(project => project.id === projectId);
    if(index !== -1) {
        projectList[index].removeTodoById(todoId);
        saveProjectsToStorage(projectList);
    }
}

function updateTodo(projectId, updatedTodo) {
    const project = projectList.find(p => p.id === projectId);
    if (!project) return;

    const todo = project.todoList.find(t => t.id === updatedTodo.id);
    if (!todo) return;

    todo.title = updatedTodo.title;
    todo.description = updatedTodo.description;
    todo.dueDate = updatedTodo.dueDate;
    todo.priority = updatedTodo.priority;
    todo.note = updatedTodo.note;
    todo.isComplete = updatedTodo.isComplete;

    saveProjectsToStorage(projectList);
}


function getTodoFromProject(projectId, todoId) {
    const project = projectList.find(project => project.id === projectId);
    if (!project) return null;

    return project.todoList.find(todo => todo.id === todoId) || null;
}



export { addProject, removeProject, addTodoToProject, removeTodoFromProject, updateTodo, getTodoFromProject, getProjectList };


