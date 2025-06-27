import { Project } from './project.js';


function saveProjectsToStorage(projectList) {
    localStorage.setItem("projectList", JSON.stringify(projectList));
}

function getSavedProjects() {
    let savedProjects = [];

    try {
    const data = localStorage.getItem("projectList");
        if (!data) {
            return [new Project("Inbox")];
        }

        const rawProjects = JSON.parse(data);
        const hydrated = rawProjects.map(Project.fromJSON);

        return hydrated.length > 0 ? hydrated : [new Project("Inbox")];

    } catch (error) {
        console.error("Error parsing projects from localStorage:", error);
        return [new Project("Inbox")];
    }

    
}

export {saveProjectsToStorage, getSavedProjects};