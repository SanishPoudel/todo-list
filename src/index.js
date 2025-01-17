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
const enterEntry = document.querySelector(".enterEntry");
const cancelEntry = document.querySelector(".cancelEntry");
const todoEntryForm = document.querySelector(".inputTask>form");

// defining the project
const projects = {};

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
        // project titles. when clicked should display tasks in the main menu.
            let value = projects[btn.textContent];

            if (value) {
                clearDiv(todoSection);
                mainTitle.textContent = btn.textContent;

                for (let i = 0; i < value.length; i++) {
                    addTaskToDOM(value[i]);
                }               
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
    // this is for the add button in the hidded div in the sidebar
    projects[projectTitle.value] = [];
    inputProjectSection.style.display = "none";
    addProjectToSideBar();
    form.reset();
    event.preventDefault();
})

cancelProjectButton.addEventListener("click", ()=> {
    // this is for the cancel button in the hidded div in the sidebar
    inputProjectSection.style.display = "none";
})

taskButton.addEventListener("click", ()=> {
    // this is for the add task button in the main menu
    inputTaskSection.style.display = "unset";
    todoEntry.focus();
})

enterEntry.addEventListener("click", (event)=> {
    // this is for the add button in the hidded div in the main menu
    let i = mainTitle.textContent

    let name = todoEntry.value;
    let status = false;
    let dueDate = "tomorrow";
    let task = new Task(name,status,dueDate);

    projects[i].push(task); 
    addTaskToDOM(task);
    todoEntryForm.reset();
    inputTaskSection.style.display = "none";
    event.preventDefault();
})

cancelEntry.addEventListener("click", ()=> {
    // this is for the cancel button in the hidden div in the main menu
    inputTaskSection.style.display = "none";
})


function addTaskToDOM(task) {
    // need to make sure that all the elements are formatted properly
    // needs to add all details not just names
    let divContainer = document.createElement("div");

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    let textDiv = document.createElement("div");
    textDiv.textContent = task.name;

    let removeImg = document.createElement("img");
    removeImg.className = "keyIcon";
    removeImg.src = close;
    removeImg.alt = "remove todo icon";

    divContainer.appendChild(checkbox);
    divContainer.appendChild(textDiv);
    divContainer.appendChild(removeImg);

    divContainer.className = "todoList";

    todoSection.appendChild(divContainer);
    todoSection.style.display = "unset";


    removeImg.addEventListener("click", ()=> {
        todoSection.removeChild(divContainer);
        let index = projects[mainTitle.textContent].findIndex((x) => x === task.name);
        projects[mainTitle.textContent].splice(index, 1);
    })
}