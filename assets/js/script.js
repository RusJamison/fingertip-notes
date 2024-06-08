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
    



