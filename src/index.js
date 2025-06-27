import { addProject, removeProject, addTodoToProject, removeTodoFromProject, updateTodo, getTodoFromProject, getProjectList } from './projectlist.js';
import { ToDoItem } from './todo.js';
import { Project } from './project.js';
import './styles.css';


let savedProjects = getProjectList();
let activeProjectId = savedProjects[0].id;

document.addEventListener("DOMContentLoaded", function () {
    renderProjectList();
    renderActiveToDoList();
})

function renderProjectList() {
    const appSelector = document.querySelector("#app");
    appSelector.innerHTML = "";
    const sideBar = document.createElement("aside");
    sideBar.id = "sidebar";
    const sideBarTitle = document.createElement("h2");
    sideBarTitle.textContent = "Projects";
    sideBar.appendChild(sideBarTitle);

    const projectList = document.createElement("ul");
    projectList.id = "project-list";
    
    savedProjects = getProjectList();
    for(let project of savedProjects) {
        let projectEntry = document.createElement("li");
        projectEntry.textContent = project.name;
        projectEntry.dataset.projectId = project.id;

        if(project.id == activeProjectId) {
            projectEntry.classList.add("active");
        }

        projectList.append(projectEntry);
    }
    sideBar.appendChild(projectList);
    appSelector.appendChild(sideBar);


}






