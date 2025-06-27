import { addProject, removeProject, addTodoToProject, removeTodoFromProject, updateTodo, getTodoFromProject, getProjectList, getProjectByID } from './projectlist.js';
import { ToDoItem } from './todo.js';
import { Project } from './project.js';
import './styles.css';
import { compareAsc, format } from "date-fns";


let savedProjects = getProjectList();
let activeProjectId = savedProjects[0].id;
console.log(savedProjects);


///important
const inboxId = '50196967-56e6-42a4-8aca-a4a3ed2b915e';
console.log(inboxId);

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
        projectEntry.appendChild(nameSpan);
        if(project.id != inboxId) {
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
        
            projectEntry.appendChild(deleteBtn);
        }
        
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
    let appSelector = document.querySelector("#app");
    let main = document.createElement("main");
    main.innerHTML = "";
    let currentProject = getProjectByID(activeProjectId);
    main.id = "main";

    let currentProjectName = document.createElement("h2")
    currentProjectName.id = "currentProjectName";
    currentProjectName.textContent = currentProject.name;

    main.appendChild(currentProjectName);
    appSelector.appendChild(main);

    let todoList = document.createElement("ul");
    todoList.id = "todo-list";

    for(let todoItem of currentProject.todoList) {
        let todoContainer = document.createElement("li");

        let todoTitle = document.createElement("h4");
        todoTitle.textContent = todoItem.title;
        let todoDescription = document.createElement("p");
        todoDescription.textContent = todoItem.description;
        let todoDueDate = document.createElement("p");
        todoDueDate.textContent = format(todoItem.dueDate, "yyyy-MM-dd");
        let todoPriority = document.createElement("p");
        todoPriority.textContent = todoItem.priority;

        let changeStatusBtn = document.createElement("button");
        changeStatusBtn.textContent = "Change Status";
        changeStatusBtn.addEventListener("click", function() {
            todoItem.changeCompleteStatus();
            updateTodo(activeProjectId, todoItem);
            renderProjectList();
            renderActiveToDoList(activeProjectId);
        })

        //later
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        //working now. 
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.addEventListener("click", function() {
            if(confirm("Are you sure you want to delete Task?")) {
                removeTodoFromProject(activeProjectId, todoItem.id);
                renderProjectList();
                renderActiveToDoList(activeProjectId);
            }
            
        })

        todoContainer.appendChild(todoTitle);
        todoContainer.appendChild(todoDescription);
        todoContainer.appendChild(todoDueDate);
        todoContainer.appendChild(todoPriority);
        todoContainer.appendChild(changeStatusBtn);
        todoContainer.appendChild(editBtn);
        todoContainer.appendChild(deleteBtn);

        todoList.appendChild(todoContainer);
    }
    main.appendChild(todoList);

    const form = document.createElement("form");
    form.id = "todo-form";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "todo-title";
    titleInput.placeholder = "Title";
    titleInput.required = true;

    const descInput = document.createElement("input");
    descInput.type = "text";
    descInput.id = "todo-description";
    descInput.placeholder = "Description";

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "todo-due-date";
    dateInput.required = true;

    const prioritySelect = document.createElement("select");
    prioritySelect.id = "todo-priority";
    prioritySelect.required = true;

    ["Low", "Medium", "High"].forEach((level) => {
        const option = document.createElement("option");
        option.value = level;
        option.textContent = level;
        if (level === "Medium") option.selected = true;
        prioritySelect.appendChild(option);
    });

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Add Todo";
    
    form.addEventListener("submit", function() {
        let title = document.querySelector("#todo-title").value.trim();
        let desc = document.querySelector("#todo-description").value.trim();
        let date = new Date(document.querySelector("#todo-due-date").value);
        let priority = document.querySelector("#todo-priority").value;
        addTodoToProject(activeProjectId, new ToDoItem(title, desc, date, priority));
        renderProjectList();
        renderActiveToDoList(activeProjectId);
    })

    form.appendChild(titleInput);
    form.appendChild(descInput);
    form.appendChild(dateInput);
    form.appendChild(prioritySelect);
    form.appendChild(submitBtn);

    main.appendChild(form);
}






