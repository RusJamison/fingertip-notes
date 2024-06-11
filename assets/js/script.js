let editorInstance;
let editorEditInstance;
let datesVisible = true;

document.addEventListener("DOMContentLoaded", () => {
  ClassicEditor.create(document.querySelector("#editor"))
  .then((editor) => {
  editorInstance = editor;

  // Load saved content from localStorage
const savedContent = localStorage.getItem("editorContent");
if (savedContent) {
editorInstance.setData(savedContent);
}
})

.catch((error) => {
  console.error(error);
  });
  ClassicEditor.create(document.querySelector("#editTask"))
  .then((editor) => {
  editorEditInstance = editor;
  })
  .catch((error) => {
  console.error(error);
  });
  });
  

function changeGlobalDueDate() {
    const dueDate = document.getElementById("note-date").value;
    if (!dueDate) {
      let formattedDate = formattedDateToInput();
  
      document.getElementById("note-date").value = formattedDate;
    }
    displayTasks();
  }

  function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
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
      <span class="text-left">${task.text}</span> 
      <br />
      <span class="fs-12 date">Created At </span> <span class="fs-12 date">${taskDate.toLocaleString()}</span> 
      ${taskDueDate ? `<br />` : ""}
      ${taskDueDate ? `<span class="fs-12 date">Due </span> ` : ""}
      ${
        taskDueDate
          ? `<span class="fs-12 date">${taskDueDate.toLocaleString()}</span> `
          : ""
      }
      ${taskUpdatedAt ? `<br />` : ""}
      ${taskUpdatedAt ? `<span class="fs-12 date">Updated </span>` : ""}
      ${
        taskUpdatedAt
          ? `<span class="fs-12 date">${taskUpdatedAt.toLocaleString()}</span>`
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
    const editorData = editorInstance.getData();
    const newTaskInput = editorData;
    const dueDateInput = document.getElementById("dueDate").value;
  
    if (newTaskInput !== null && newTaskInput !== "") {
      const tasks = getTasks();
      const newTask = {
        text: newTaskInput,
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
    editorInstance.setData("");
  dueDateInput.value = "";
  }

  // Function to edit a task
  function editTask(index) {
    const tasks = getTasks();
    const taskObj = tasks[index];
  
    editIndex = index;
    editorEditInstance.setData(taskObj.text);
    document.getElementById("editTask").value = taskObj.text;
    document.getElementById("editDueDate").value = taskObj.dueDate? formattedDateToInput(taskObj.dueDate)
    : null;
    document.getElementById("editModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("editModal").style.display = "none";
  }

  function updateTask() {
    const task = editorEditInstance.getData();
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
      alert("Please fill out Task field.");
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

  function toggleDates() {
    datesVisible = !datesVisible;
    const dateElements = document.querySelectorAll(".date");
    dateElements.forEach((element) => {
      element.classList.toggle("hidden", !datesVisible);
    });
  }

    //// Initial changeGlobalDueDate, and displayTasks
changeGlobalDueDate();
displayTasks();







    



