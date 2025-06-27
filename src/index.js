import { addProject, removeProject, addTodoToProject, removeTodoFromProject, updateTodo, getTodoFromProject, getProjectList, getProjectByID } from './projectlist.js';
import { ToDoItem } from './todo.js';
import { Project } from './project.js';
import './styles.css';



let savedProjects = getProjectList();
let activeProjectId = savedProjects[0].id;
console.log(savedProjects);



document.addEventListener("DOMContentLoaded", function () {
    renderProjectList();
    renderActiveToDoList(activeProjectId);
})

function renderProjectList() {
    const appSelector = document.querySelector("#app");
    appSelector.innerHTML = "";
    let sideBar = document.createElement("aside");
    sideBar.id = "sidebar";
    let sideBarTitle = document.createElement("h2");
    sideBarTitle.textContent = "Projects";
    sideBar.appendChild(sideBarTitle);

    //project list

    let projectList = document.createElement("ul");
    projectList.id = "project-list";
    
    savedProjects = getProjectList();
    for(let project of savedProjects) {
        let projectEntry = document.createElement("li");
        projectEntry.classList.add("project-entry");
        
        const nameSpan = document.createElement("span");
        nameSpan.textContent = project.name;
        
        projectEntry.dataset.projectId = project.id;

        if(project.id == activeProjectId) {
            projectEntry.classList.add("active");
        }

        projectEntry.addEventListener("click", function() {
            activeProjectId = project.id;
            renderProjectList();
            renderActiveToDoList(activeProjectId);
        })
        projectList.append(projectEntry);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            if(confirm(`Are you sure you want to delete "${project.name}"?`)) {
                removeProject(project.id);
                savedProjects = getProjectList();
            }

            if (activeProjectId === project.id && savedProjects.length > 0) {
                activeProjectId = savedProjects[0].id;
            }

            renderProjectList();
            renderActiveToDoList(activeProjectId);

        })
        projectEntry.appendChild(nameSpan);
        projectEntry.appendChild(deleteBtn);
    }
    sideBar.appendChild(projectList);

    // form

    let form = document.createElement("form");
    form.id = "project-form";
    let input = document.createElement("input");
    input.type = "text";
    input.id = "project-name";
    input.placeholder = "New Project Name";
    input.required = true;
    let button = document.createElement("button");
    button.textContent = "Submit";
    button.type = "submit";

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let newProjectName = document.querySelector("#project-name").value.trim();
        addProject(new Project(newProjectName));
        renderProjectList();
        renderActiveToDoList(activeProjectId);
    } )

    form.appendChild(input);
    form.appendChild(button);
    sideBar.appendChild(form);
    
    appSelector.appendChild(sideBar);
}

function renderActiveToDoList(activeProjectId) {
    const appSelector = document.querySelector("#app");
    const main = document.createElement("main");
    const currentProject = getProjectByID(activeProjectId);
    main.id = "main";

    const currentProjectName = document.createElement("h2")
    currentProjectName.id = "currentProjectName";
    currentProjectName.textContent = currentProject.name;

    main.appendChild(currentProjectName);
    appSelector.appendChild(main);



}






