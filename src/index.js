// import "./style.css"

const projectButton = document.querySelector(".project");
const taskButton = document.querySelector(".task");
const container = document.querySelector(".container");
const inputProject = document.querySelector(".inputProject");

const projects = {};
projects["default"] = []; // the default one where tasks are stored

class Task{
    constructor(name, status, dueDate) {
        this.name = name;
        this.status = status;
        this.dueDate = dueDate;
    }
}

function addProject(projectName, taskName) {
    if (projectName in projects) {
        projects[projectName].push(taskName);
    } else {
        projects[projectName] = [taskName];
    } 
}

let value = new Task("name", true, "tomorrow");
let newValue = new Task("newName", false, "today");
addProject("key", value);
addProject("key", newValue);
let anothoerValue = new Task("anotherName", true, "yesterday");
addProject("anotherKey", anothoerValue);

// the new function will have to do the following


// add the value of the dictionary in the main menu
// add the key of the dictionary in the sidebar
// add task will pop up a dialog and then it'll be same as library #4
// add project will pop up another dialog that will create a new item with the given name as key and an empty list as value #3


for (let sidebarKeys of (Object.keys(projects))) {
    btn = document.createElement("button");
    btn.textContent = sidebarKeys;
    btn.className = "nav options";
    btn.style.fontSize = "large"; 
    btn.style.paddingLeft = "10px";
    container.appendChild(btn);
    btn.addEventListener("click", ()=> {
        console.log("hello");
    });
}

projectButton.addEventListener("click", ()=> {
    inputProject.style.display = "unset";
})