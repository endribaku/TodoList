
function saveProjectsToStorage(projectList) {
    localStorage.setItem("projectList", JSON.stringify(projectList));
}

function getSavedProjects() {
    let savedProjects = [];

    try {
    const data = localStorage.getItem("projectList");
    if (data) {
        savedProjects = JSON.parse(data);
    }
    } catch (error) {
    console.error("Error parsing projects from localStorage:", error);
    savedProjects = [
        {
        id: "inbox",
        name: "Inbox",
        todos: []
        }
    ];
    }

    return savedProjects;
}

export {saveProjectsToStorage, getSavedProjects};