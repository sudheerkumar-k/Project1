function greet() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("time").textContent = timeString;
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
let count = 1;

// Load saved tasks on page load
window.onload = function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task, index) => {
    insertRow(index + 1, task);
    count = index + 2;
  });
};

function addTask() {
  const task = document.getElementById("taskInput").value.trim();
  if (!task) return;

  insertRow(count, task);
  saveTask(task);
  count++;
  document.getElementById("taskInput").value = "";
}

function insertRow(index, task) {
  const table = document.getElementById("taskTable");
  const row = table.insertRow();
  row.insertCell(0).textContent = index;
  row.insertCell(1).textContent = task;
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function delTask() {
  const table = document.getElementById("taskTable");
  table.deleteRow(-1); // -1 deletes the last row
  localStorage.removeItem("taskInput");
}