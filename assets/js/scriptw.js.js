function addDate(){
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    
    let formattedDate = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
    
    document.getElementById('note-date').value = formattedDate;
}

// Run addDate when the page loads
window.onload = addDate;

// Declaring variables
const noteList = document.querySelector('#note-list');
const noteInput = document.querySelector('#note-input');
const noteButton = document.querySelector('#note-button');

noteButton.addEventListener('click', function(event) {
    event.preventDefault();
    const newJob = noteInput.value.trim();

    if (newJob === '') {
        alert('Enter a new job');
        return;
    }

    noteInput.value = '';
    addTask(newJob);
});

function addTask(job){
    const noteListItem = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        noteSpan.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });

    const noteSpan = document.createElement('span');
    noteSpan.textContent = job;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
        const newJob = prompt('Edit your task', noteSpan.textContent);
        if (newJob !== null) {
            noteSpan.textContent = newJob.trim();
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        noteList.removeChild(noteListItem);
    });

    noteListItem.appendChild(checkbox);
    noteListItem.appendChild(noteSpan);
    noteListItem.appendChild(editButton);
    noteListItem.appendChild(deleteButton);

    noteList.appendChild(noteListItem);
}