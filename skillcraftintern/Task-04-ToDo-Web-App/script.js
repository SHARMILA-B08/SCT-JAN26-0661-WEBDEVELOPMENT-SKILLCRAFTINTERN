const taskList = document.getElementById("taskList");

const initialTasks = [
  { text: "Design landing page UI", category: "Work", priority: "High", done: false },
  { text: "Prepare internship report", category: "Study", priority: "Medium", done: false },
  { text: "Team meeting at 4 PM", category: "Work", priority: "High", done: false },
  { text: "Update GitHub portfolio", category: "Personal", priority: "Low", done: false }
];

initialTasks.forEach(task => createTask(task));

function addTask() {
  const text = document.getElementById("taskInput").value;
  const category = document.getElementById("category").value;
  const priority = document.getElementById("priority").value;

  if (!text) return;

  createTask({ text, category, priority, done: false });
  document.getElementById("taskInput").value = "";
}

function createTask(task) {
  const div = document.createElement("div");
  div.className = `task ${task.priority.toLowerCase()}`;

  const info = document.createElement("div");
  info.className = "task-info";
  info.innerHTML = `<h3>${task.text}</h3>
    <span>${task.category} • ${task.priority} Priority</span>`;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const completeBtn = document.createElement("button");
  completeBtn.className = "complete";
  completeBtn.innerText = "Done";
  completeBtn.onclick = () => div.classList.toggle("done");

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = () => div.remove();

  actions.append(completeBtn, deleteBtn);
  div.append(info, actions);
  taskList.appendChild(div);
}
