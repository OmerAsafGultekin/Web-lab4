const taskManager = new TaskManager();

const loadTasksBtn = document.getElementById("loadTasksBtn");
const statusMessage = document.getElementById("statusMessage");
const taskList = document.getElementById("taskList");

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
    statusMessage.textContent = "";
  } catch (error) {
    statusMessage.textContent = "Failed to load tasks. Please try again.";
  }
}

loadTasksBtn.addEventListener("click", handleLoadTasks);