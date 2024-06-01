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
const noteList = document.querySelector('note-list');
const noteInput = document.querySelector('note-input');
const noteForm = document.querySelector('note-form');
const noteButton = document.getElementById('note-button')

noteButton.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = noteInput.value;

    if(newTask === ""){
        alert('Please enter a todo note');
        return;

    }
    noteInput.value = '';
    addTask (newTask);
})
function addTask(task){

}

