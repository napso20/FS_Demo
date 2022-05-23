let tasksList = []

function addNewTask(){
    tasksList.push(document.querySelector(".new-task-name-input").value);
    document.querySelector(".new-task-name-input").value = '';
}

function displayTask() {
    const tasksListDiv = document.querySelector(".tasks-list");

    const taskNameDiv = document.createElement("div");
    taskNameDiv.setAttribute("class", "task");
    taskNameDiv.innerText = tasksList[tasksList.length-1];

    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.setAttribute("class","delete-task-btn");
    deleteTaskBtn.innerText = "Delete";
    deleteTaskBtn.addEventListener("click",deleteTask);

    taskNameDiv.appendChild(deleteTaskBtn);
    tasksListDiv.appendChild(taskNameDiv);
}

function deleteTask(event) {
    const taskElement = event.target.parentNode;
    taskElement.remove();
}
p
function displayTasksList() {
    const tasksListDiv = document.querySelector(".tasks-list");
    tasksList.map(task=>{
        const taskNameDiv = document.createElement("div");
		taskNameDiv.setAttribute("class", "tasks-list__task-name");
		taskNameDiv.innerText = task;
        tasksListDiv.appendChild(taskNameDiv);
    })
}

