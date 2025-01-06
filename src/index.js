// import "./style.css"


// how to start
// first i'll need an empty list to hold the projects
// when a new project is added it'll be appended to this list

// the projects themselves will be a dictionary 
// the key will be the name of the project and the value will be the list of tasks
// the tasks will be a custom data type that will have various features

// so a function to create "tasks" which will be a custom object this can be a factory function or a class
// another function to add these tasks to their projects this can just be projects["tasks"] with both of those as parameters
// and another function to add the projects to the list. this may be redundant or not needed later on.
// another function to link this with the dom


const projects = []; // this will be the projects list

class Task{
    constructor(name, status, dueDate) {
        this.name = name;
        this.status = status;
        this.dueDate = dueDate;
    }
}

function addProject(projectName, taskName) {
    // this should check if the projectName already exists if it does then just add to its list otherwise create a new one.
    let dict = {};
    console.log("before ", projects)
    if (projects.includes(dict[projectName])) {
        dict[projectName].push(taskName);
        projects.push(dict);
        console.log("duplicate case " + projects)
    }
    else {
        dict[projectName] = [taskName];
        projects.push(dict);
        console.log("original ", projects)
    }
    
     
}

let value = new Task("name", true, "tomorrow");
newValue = new Task("newName", false, "today");
addProject("key", value);
addProject("key", newValue);


// console.log(projects[0]["key"]);
