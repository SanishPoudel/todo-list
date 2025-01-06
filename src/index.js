// import "./style.css"

const projects = {};

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


console.log(projects);

// the new function will have to do the following


// add the value of the dictionary in the main menu
// add the key of the dictionary in the sidebar
// so there will be two different buttons add task and add project. fix this in html as well #2
// add task will pop up a dialog and then it'll be same as library #4
// add project will pop up another dialog that will create a new item with the given name as key and an empty list as value #3
// there should be a default project to add tasks to at the beginning. should start with this. #1