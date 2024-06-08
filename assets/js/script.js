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

   // Function to add a new task
   function addTask() {
    const newTaskInput = document.getElementById("note-input");
    const dueDateInput = document.getElementById("dueDate").value;
    const newTaskText = newTaskInput.value.trim();
  
    if (newTaskText !== null && newTaskText.trim() !== "") {
      const tasks = getTasks();
      const newTask = {
        text: newTaskText.trim(),
        createdDate: new Date().getTime(), // Timestamp of creation
        dueDate: new Date(dueDateInput).getTime(),
        updatedAt: null,
      };
      console.log("newTask : ", newTask);
      tasks.push(newTask);
      saveTasks(tasks);
      displayTasks();
    } else {
      alert("Please add the new task");
    }
    newTaskInput.value = "";
    dueDateInput.value = "";
  }

  // Function to edit a task
  function editTask(index) {
    const tasks = getTasks();
    const taskObj = tasks[index];
  
    editIndex = index;
    document.getElementById("editTask").value = taskObj.text;
    document.getElementById("editDueDate").value = taskObj.dueDate
    ? formattedDateToInput(taskObj.dueDate)
    : null;
    document.getElementById("editModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("editModal").style.display = "none";
  }

  function updateTask() {
    const task = document.getElementById("editTask").value;
    const dueDate = document.getElementById("editDueDate").value;
    const updatedAt = new Date().getTime();
  
    if (task) {
      const tasks = getTasks();
      tasks[editIndex].text = task;
      tasks[editIndex].dueDate = new Date(dueDate).getTime();
      tasks[editIndex].updatedAt = updatedAt;
      saveTasks(tasks);
  
      displayTasks();
      closeModal();
    } else {
      alert("Please fill out both fields.");
    }
  }

  // Function to delete a task
  function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    displayTasks();
  }
  
  function formattedDateToInput(dateParam) {
    const date = dateParam ? new Date(dateParam) : new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
  
    let formattedDate =
      year +
      "-" +
      (month < 10 ? "0" : "") +
      month +
      "-" +
      (day < 10 ? "0" : "") +
      day;
  
    return formattedDate;
  }






    



