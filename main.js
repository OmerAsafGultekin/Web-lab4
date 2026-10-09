const taskManager = new TaskManager();

const loadTasksBtn = document.getElementById("loadTasksBtn");
const statusMessage = document.getElementById("statusMessage");
const taskList = document.getElementById("taskList");

function renderTasks() {
  taskList.innerHTML = "";

  taskManager.tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = task.completed ? "task completed" : "task";

    const titleSpan = document.createElement("span");
    titleSpan.textContent = task.title;

    const actionsDiv = document.createElement("div");
    actionsDiv.className = "task-actions";

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "toggle-btn";
    toggleBtn.textContent = "Toggle";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    actionsDiv.appendChild(toggleBtn);
    actionsDiv.appendChild(deleteBtn);

    taskDiv.appendChild(titleSpan);
    taskDiv.appendChild(actionsDiv);

    taskList.appendChild(taskDiv);
  });
}

async function handleLoadTasks() {
  statusMessage.textContent = "Loading tasks...";
  try {
    const rawTasks = await fetchTasks();
    const jsonString = JSON.stringify(rawTasks);
    const parsedTasks = JSON.parse(jsonString);

    const tasks = parsedTasks.map(
      (task) => new Task(task.id, task.title, task.completed)
    );

    taskManager.setTasks(tasks);
    renderTasks();
    statusMessage.textContent = "";
  } catch (error) {
    statusMessage.textContent = "Failed to load tasks. Please try again.";
  }
}

loadTasksBtn.addEventListener("click", handleLoadTasks);