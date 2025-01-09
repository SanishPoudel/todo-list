import "./style.css"

// dom variables
const projectButton = document.querySelector(".project");
const taskButton = document.querySelector(".task");
const container = document.querySelector(".container");
const inputProjectSection = document.querySelector(".inputProject");
const addProjectButton = document.querySelector(".add");
const cancelProjectButton = document.querySelector(".cancel");
const projectTitle = document.querySelector(".projectTitle");
const form = document.querySelector("form");

// defining the project
const projects = {};
projects["default"] = []; // the default one where tasks are stored

class Task{
    //defining the task object
    constructor(name, status, dueDate) {
        this.name = name;
        this.status = status;
        this.dueDate = dueDate;
    }
}

function addProject(projectName, taskName) {
    // adding project into the project dictionary
    if (projectName in projects) {
        projects[projectName].push(taskName);
    } else {
        projects[projectName] = [taskName];
    } 
}

// demo value
let value = new Task("name", true, "tomorrow");
let newValue = new Task("newName", false, "today");
addProject("key", value);
addProject("key", newValue);
let anothoerValue = new Task("anotherName", true, "yesterday");
addProject("anotherKey", anothoerValue);

function addProjectToSideBar() {
    // this will take user input and append it into the sidebar to create new projects
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    for (let sidebarKeys of (Object.keys(projects))) {
        const btn = document.createElement("button");
        btn.textContent = sidebarKeys;
        btn.className = "nav options";
        btn.style.fontSize = "large"; 
        btn.style.paddingLeft = "10px";
        container.appendChild(btn);
        btn.addEventListener("click", ()=> {
            console.log("hello");
        });
    }
}

projectButton.addEventListener("click", ()=> {
    // this is for the add project button in the sidebar
    inputProjectSection.style.display = "unset";
    projectTitle.focus();
})

addProjectButton.addEventListener("click", (event)=> {
    // this is for the add button in the hidded div
    projects[projectTitle.value] = [];
    console.log(projects);
    inputProjectSection.style.display = "none";
    addProjectToSideBar();
    form.reset();
    event.preventDefault();
})

cancelProjectButton.addEventListener("click", ()=> {
    // this is for the cancel button in the hidded div
    inputProjectSection.style.display = "none";
})

// just these things are left

// add the value of the dictionary in the main menu 
// add task will pop up a dialog and then it'll be same as library 