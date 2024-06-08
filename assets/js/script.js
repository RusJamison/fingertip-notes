function changeGlobalDueDate() {
    const dueDate = document.getElementById("note-date").value;
    if (!dueDate) {
      let formattedDate = formattedDateToInput();
  
      document.getElementById("note-date").value = formattedDate;
    }
    displayTasks();
  }



