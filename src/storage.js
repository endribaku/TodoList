import { Project } from './project.js';


function saveProjectsToStorage(projectList) {
    localStorage.setItem("projectList", JSON.stringify(projectList));
}

function getSavedProjects() {
    let savedProjects = [];

    try {
    const data = localStorage.getItem("projectList");
    if (data) {
        const rawProjects = JSON.parse(data);
        return rawProjects.map(Project.fromJSON);
    }
    } catch (error) {
    console.error("Error parsing projects from localStorage:", error);
    
    return [new Project("inbox", "Inbox")];
    }
}

export {saveProjectsToStorage, getSavedProjects};