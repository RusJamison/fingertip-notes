function changeGlobalDueDate() {
    const dueDate = document.getElementById("note-date").value;
    if (!dueDate) {
      let formattedDate = formattedDateToInput();
  
      document.getElementById("note-date").value = formattedDate;
    }
    displayTasks();
  }
    // Function to save tasks to local storage
    function saveTasks(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
        // Function to display tasks on the page
  function displayTasks() {
    const tasks = getTasks();
    const todoList = document.getElementById("note-list");
    todoList.innerHTML = "";
  
    tasks.forEach((task, index) => {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      const taskUpdatedAt = task.updatedAt ? new Date(task.updatedAt) : null;
      const taskDueDate = task.dueDate ? new Date(task.dueDate) : null;
      const taskDate = new Date(task.createdDate);
      const taskDateTime = new Date(task.createdDate).getTime();

      taskElement.innerHTML = `
<span>${task.text}</span> 
<br />
Created At <span>${taskDate.toLocaleString()}</span> 
${taskDueDate ? `<br />` : ""}
${taskDueDate ? "Due " : ""}
${taskDueDate ? `<span>${taskDueDate.toLocaleString()}</span> ` : ""}
${taskUpdatedAt ? `<br />` : ""}
${taskUpdatedAt ? "Updated " : ""}
${
  taskUpdatedAt
    ? `<span>${taskUpdatedAt.toLocaleString()}</span>`
    : ""
}
<button onclick="editTask(${index})">Edit</button>
<button onclick="deleteTask(${index})">Delete</button>
<br /> <br />
`;

  
      let dueDateValue = document.getElementById("note-date").value;
      let dueDateTime = new Date(dueDateValue).getTime();
      if (taskDateTime > dueDateTime) {
        taskElement.classList.add("overdue");
      }
      todoList.appendChild(taskElement);
    });
  }

    



