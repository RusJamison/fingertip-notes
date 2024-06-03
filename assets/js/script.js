/* Access of date for planning to do list*/
function addDate(){
    date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();

    if (document.getElementById('date').value == ''){
        document.getElementById('date').value = day + '-' + month + '-' + year;
        document.write("Today's date is: " + day + '/' + month + '/' + year);
    }
}

//Declaring variables
const noteList = document.querySelector('#note-list');
const noteInput = document.querySelector('#note-input');
const noteButton = document.getElementById('#note-button')


noteButton.addEventListener('submit', function(event) {
    event.preventDefault();
    const newJob = noteInput.value.trim();

    if (newJob === '') {
        alert ( 'Enter new job');
        return;
    
    }

    noteInput.value = '';
    addTask(newJob);

    
});

function addTask(job){
    const noteListItem = document.createElement('li');

    const checkbox = document.createElement('input'); 
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function(){
        noteSpan.style.textDecoration =checkbox.checked?'line-through':'none';
    })

    const noteSpan = document.createElement('span');
    noteSpan.textContent = job;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function(){
        const newJob = prompt('Edit your job', noteSpan.textContent);
        if(newJob!==null){
            noteSpan.textContent = newJob.trim();
        }
    })

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function(){
        noteList.removeChild(noteListItem);
    });


    noteListItem.appendChild(checkbox);
    noteListItem.appendChild(noteSpan);


    noteListItem.appendChild(editButton);
    noteListItem.appendChild(deleteButton);


    noteList.appendChild(noteListItem);

}


