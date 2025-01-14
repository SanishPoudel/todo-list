import "./style.css"

import list from "./images/list.svg";
import close from "./images/delete.svg";

// dom variables
const projectButton = document.querySelector(".project");
const taskButton = document.querySelector(".task");
const container = document.querySelector(".container");
const inputProjectSection = document.querySelector(".inputProject");
const addProjectButton = document.querySelector(".add");
const cancelProjectButton = document.querySelector(".cancel");
const projectTitle = document.querySelector(".projectTitle");
const form = document.querySelector("form");
const todoSection = document.querySelector(".todoSection");
const mainTitle = document.querySelector(".menu .title");
const inputTaskSection = document.querySelector(".inputTask");
const todoEntry = document.querySelector(".todoEntry");

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

function clearDiv(div) {
    // function to clear all contents in a div
    while (div.firstChild) {
        div.removeChild(div.lastChild);
    }
}

// demo value
let value = new Task("name", true, "tomorrow");
let newValue = new Task("newName", false, "today");
addProject("key", value);
addProject("key", newValue);
let anothoerValue = new Task("anotherName", true, "yesterday");
addProject("anotherKey", anothoerValue);
let anothernewValue = new Task("anotherNewName", false, "tomorrow");
addProject("anotherKey", anothernewValue);

function addProjectToSideBar() {
    // this will take user input and append it into the sidebar to create new projects
    clearDiv(container);

    for (let sidebarKeys of (Object.keys(projects))) {
        // parent div

        // for the button
        const btn = document.createElement("button");
        btn.textContent = sidebarKeys;
        btn.className = "nav options";
        btn.style.fontSize = "large"; 
        btn.style.paddingLeft = "10px";

        // for the image
        const img1 = document.createElement("img");
        img1.className = "keyIcon";
        img1.src = list;
        img1.alt = "list icon"

        // for the delete icon
        const img2 = document.createElement("img");
        img2.className = "keyIcon";
        img2.src = close;
        img2.alt = "close icon";

        btn.prepend(img1);
        btn.appendChild(img2);

        btn.style.display = "grid";
        btn.style["grid-template-columns"] = "1fr 6fr 2fr";

        container.appendChild(btn);

        btn.addEventListener("click", ()=> {

            let value = projects[btn.textContent];

            if (value) {
                clearDiv(todoSection);
                mainTitle.textContent = btn.textContent;

                for (let i = 0; i < value.length; i++) 
                {
                    // need to format this properly so it looks nice.
                    
                    let div = document.createElement("div");
                    

                    div.textContent = value[i].name;

                    todoSection.appendChild(div);
                }

                todoSection.style.display = "unset";
            }
        });

        img2.addEventListener("click", ()=> {
            // to remove the project from projects
                container.removeChild(btn);
                delete projects[btn.textContent];

                if (img2.parentNode.textContent === mainTitle.textContent) { 
                mainTitle.textContent = "Inbox";
                clearDiv(todoSection);
                }
        })
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
    inputProjectSection.style.display = "none";
    addProjectToSideBar();
    form.reset();
    event.preventDefault();
})

cancelProjectButton.addEventListener("click", ()=> {
    // this is for the cancel button in the hidded div
    inputProjectSection.style.display = "none";
})

taskButton.addEventListener("click", ()=> {
    inputTaskSection.style.display = "unset";
    todoEntry.focus();
})

// just these things are left

// add the value of the dictionary in the main menu 
// add task will pop up a dialog and then it'll be same as library 