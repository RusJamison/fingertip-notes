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
const 