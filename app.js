// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const clearCompletedButton = document.getElementById("clearCompleted");

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">Delete</button>
    `;

    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = "";

    // Add event listener to the delete button
    const deleteButton = taskItem.querySelector(".delete");
    deleteButton.addEventListener("click", deleteTask);
}

// Delete a task
function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
}

// Clear completed tasks
function clearCompleted() {
    const completedTasks = document.querySelectorAll("li.completed");
    completedTasks.forEach((task) => {
        taskList.removeChild(task);
    });
}

// Event listeners
addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
clearCompletedButton.addEventListener("click", clearCompleted);
taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
});
