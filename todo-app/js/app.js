var task = document.getElementById("task");
var taskList = document.getElementById("taskList");

function addTask() {
    taskList.innerHTML += `
    <div class="task">
        <span>${task.value}</span>
        <i class="fa-solid fa-trash-can" id="delete"></i>
        <i class="fa-solid fa-pen" id="edit"></i>
    </div>`;
}

function clearAll() {
    taskList.innerHTML = "";
}