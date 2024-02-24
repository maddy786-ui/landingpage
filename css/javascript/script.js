// script.js
document.addEventListener("DOMContentLoaded", function() {
  const taskList = document.getElementById("task-list");
  const taskForm = document.getElementById("task-form");

  // Function to generate task items
  function generateTaskItem(task) {
    const listItem = document.createElement("li");
    listItem.classList.add("task-item");
    listItem.innerHTML = `
      <strong>${task.name}</strong><br>
      <span><strong>Deadline:</strong> ${task.deadline}</span><br>
      <span><strong>Priority:</strong> ${task.priority}</span><br>
      <span><strong>Label:</strong> ${task.label}</span>
    `;
    return listItem;
  }

  // Function to add task
  function addTask(event) {
    event.preventDefault();
    const taskName = document.getElementById("task-name").value;
    const taskDeadline = document.getElementById("task-deadline").value;
    const taskPriority = document.getElementById("task-priority").value;
    const taskLabel = document.getElementById("task-label").value;

    if (taskName && taskDeadline && taskPriority && taskLabel) {
      const newTask = {
        name: taskName,
        deadline: taskDeadline,
        priority: taskPriority,
        label: taskLabel
      };

      const taskItem = generateTaskItem(newTask);
      taskList.appendChild(taskItem);

      // Reset form fields
      taskForm.reset();
    } else {
      alert("Please fill out all fields.");
    }
  }

  // Event listener for form submission
  taskForm.addEventListener("submit", addTask);
});
