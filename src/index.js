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
const priority = document.querySelectorAll('input[name = "priority"]');
const date = document.querySelector(".date");
const inbox = document.querySelector(".inbox");
const today = document.querySelector(".today");
const week = document.querySelector(".week");

// defining the project
let projects;
let savedProjects = localStorage.getItem("projects");
if (savedProjects) {
    projects = JSON.parse(savedProjects);
    addProjectToSideBar();
    displayInbox();
} else {
    projects = {};
}

function saveProjectsToLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(projects));
}

class Task{
    //defining the task object
    constructor(name, priority, dueDate, checkStatus, parentProject) {
        this.name = name;
        this.priority = priority;
        this.dueDate = dueDate;
        this.checkStatus = checkStatus;
        this.parentProject = parentProject;
    }
}

function addProject(projectName, taskName) {
    // adding project into the project dictionary
    if (projectName in projects) {
        projects[projectName].push(taskName);
    } else {
        projects[projectName] = [taskName];
    } 
    saveProjectsToLocalStorage();
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

        if (sidebarKeys === "Inbox") {
            continue;
        }

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

        btn.addEventListener("click", (event)=> {
        // project titles. when clicked should display tasks in the main menu.
            taskButton.style.visibility = "visible";
            let value = projects[btn.textContent];

            if (value) {
                clearDiv(todoSection);
                mainTitle.textContent = btn.textContent;

                for (let i = 0; i < value.length; i++) {
                    addTaskToDOM(value[i]);
                }               
            }
        });

        img2.addEventListener("click", (event)=> {
            // to remove the project from projects
                event.stopPropagation();
                container.removeChild(btn);
                delete projects[btn.textContent];
                saveProjectsToLocalStorage();

                if (mainTitle.textContent === "This Week") {
                    displayWeek();
                } else if (mainTitle.textContent === "Today") {
                    displayToday();
                } else {
                    displayInbox();
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
    if (projectTitle.value !== "") {        
        projects[projectTitle.value] = [];
        inputProjectSection.style.display = "none";
        addProjectToSideBar();
        form.reset();
    } else {
        alert("Please fill out the form correctly.")
    }
    saveProjectsToLocalStorage();
    event.preventDefault();
})

cancelProjectButton.addEventListener("click", ()=> {
    // this is for the cancel button in the hidded div in the sidebar
    form.reset();
    inputProjectSection.style.display = "none";
})

taskButton.addEventListener("click", ()=> {
    // this is for the add task button in the main menu
    inputTaskSection.showModal();
    todoEntry.focus();
})

enterEntry.addEventListener("click", (event)=> {
    // this is for the add button in the hidded div in the main menu
    if (todoEntry.value !== "" && date.value) {
        let projectName = mainTitle.textContent

        let name = todoEntry.value;
        let dueDate = date.value;
        let priorityValue;
        let checkValue = false;
        let parentProject = projectName;

        priority.forEach(btn => {
            if (btn.checked) {
                priorityValue = btn.value
            }
        });
    
        let taskName = new Task(name, priorityValue, dueDate, checkValue, parentProject);

        addProject(projectName,taskName); 
        addTaskToDOM(taskName);
        todoEntryForm.reset();
        inputTaskSection.close();
    } else {
        alert("Please fill the form correctly.");
    }
    event.preventDefault();
})

cancelEntry.addEventListener("click", ()=> {
    // this is for the cancel button in the hidden div in the main menu
    todoEntryForm.reset();
    inputTaskSection.close();
})


function addTaskToDOM(task) {

    let divContainer = document.createElement("div");

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    let textDiv = document.createElement("div");
    textDiv.textContent = task.name;

    let dateDiv = document.createElement("div");
    dateDiv.textContent = task.dueDate;

    let removeImg = document.createElement("img");
    removeImg.className = "keyIcon";
    removeImg.src = close;
    removeImg.alt = "remove todo icon";

    divContainer.appendChild(checkbox);
    divContainer.appendChild(textDiv);
    divContainer.appendChild(dateDiv);
    divContainer.appendChild(removeImg);

    divContainer.className = "todoList";

    todoSection.appendChild(divContainer);
    todoSection.style.display = "flex";
    todoSection.style.flexDirection = "column";
    todoSection.style.gap = "20px";

    if (task.priority === "low") {
        divContainer.style.borderLeft = "5px solid rgb(255, 179, 0)";
    } else if (task.priority === "medium") {
        divContainer.style.borderLeft = "5px solid green";
    } else {
        divContainer.style.borderLeft = "5px solid red";
    }

    if (task.checkStatus === true) {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }

    checkbox.addEventListener("click", ()=> {
        task.checkStatus = !task.checkStatus;
        saveProjectsToLocalStorage();
    })


    removeImg.addEventListener("click", ()=> {
        todoSection.removeChild(divContainer);
        let index = projects[task.parentProject].findIndex((x) => x === task.name);
        projects[task.parentProject].splice(index, 1);
        saveProjectsToLocalStorage();
    })
}

inbox.addEventListener("click", displayInbox); 
    
function displayInbox() {
    mainTitle.textContent = "Inbox";
    clearDiv(todoSection);
    taskButton.style.visibility = "visible";

    let valueList = Object.values(projects);
    for (let individualList of valueList) {
        individualList.forEach(item => {
            addTaskToDOM(item);
        })
    }

    if (projects["inbox"]) {
        for (let taskItems of projects["Inbox"]) {
            addTaskToDOM(taskItems);
        }
    }   
}

today.addEventListener("click", displayToday);
    
function displayToday() {
    let todayDate = new Date().toLocaleDateString("en-CA");
    mainTitle.textContent = "Today";
    clearDiv(todoSection);
    taskButton.style.visibility = "hidden";

    let valueList = Object.values(projects);
    for (let individualList of valueList) {
        individualList.forEach(item => {
            if (item.dueDate === todayDate) {
                addTaskToDOM(item);
            }
        });
    }
}

function getWeek() {
    let today = new Date();
    let week = [];

    let startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Set to the start of the week (Sunday)

    // Generate the 7-day week
    for (let i = 0; i < 7; i++) {
        let day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i); // Add the current day of the week
        week.push(day.toLocaleDateString("en-CA")); 
    }

    return week;
}

week.addEventListener("click",displayWeek);

function displayWeek() {
    mainTitle.textContent = "This Week";
    clearDiv(todoSection);
    taskButton.style.visibility = "hidden";

    let valueList = Object.values(projects);
    let thisWeek = getWeek();

    for (let individualList of valueList) {
        individualList.forEach(item => {

            let itemDate = new Date(item.dueDate).toISOString().slice(0,10);

            if (thisWeek.includes(itemDate)) {
                addTaskToDOM(item);
            }
        });
    }
}