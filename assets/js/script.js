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
const noteForm = document.querySelector('#note-form');
const noteButton = document.getElementById('#note-button')

noteButton.addEventListener('click', function(event) {
    event.preventDefault();
    const newJob = noteInput.value;

    if (newJob === ' ') {
        alert ( 'Enter new job');
        return;
    }

    noteInput.value = '';
    addTask(newJob);

    
})

function addTask(job){
    const noteListItem = document.createElement('li');
    const noteSpan = document.createElement('span');
    //noteListItem.textContent = note;
    //noteList.appendChild(noteListItem);
    noteSpan.textContent = job;
    noteListItem.appendChild(noteSpan);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    noteListItem.appendChild(deleteButton)




    noteList.appendChild(noteListItem);

}


