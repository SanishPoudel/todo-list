// import "./style.css"

// the projects will be a dictionary 
// the key of the project will be displayed on the sidebar and the list of values on the main menu.
// the key will be the name of the project and the value will be the list of tasks
// the tasks will be a custom data type that will have various features

// so a function to create "tasks" which will be a custom object this can be a factory function or a class
// another function to add these tasks to their projects this can just be projects["tasks"] with both of those as parameters
// and another function to add the projects to the list. this may be redundant or not needed later on.
// another function to link this with the dom


const projects = {}; // this will be the projects dictionary 

// this will be class from which task object will be constructed.
class Task{
    constructor(name, status, dueDate) {
        this.name = name;
        this.status = status;
        this.dueDate = dueDate;
    }
}

function addProject(projectName, taskName) {
    // this should check if the projectName already exists if it does then just add to its list otherwise create a new one.
    // if projectName is in projects then add taskName to it
    // else create projectName and add taskName to it 
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


console.log(projects);
