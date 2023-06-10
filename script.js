$(document).ready(onReady);

function onReady(){
    // Event listeners 
    $('.submit-btn').on('click', SubmitDataCollector)
}

//event handlers
//when i click this button i want you to store the information
//im gonna have to incorperate all of the info from the employer here taking it from the html'
//using id and on to here to be able to store all the information with the click of a button 
//i might not need this method for the submit button but for the actual criteria of the employee instead
function SubmitDataCollector(event){
     //this is to prevent the default refresh
     event.preventDefault()
    //log to test the function
    console.log('im collecting data over here!');
    //input value for the employees information
    let FirstNameInputVal= $('#FirstName').val()
    let LastNameInputVal= $('#LastName').val()
    let IdIntegerValue= $('#IdInteger').val

    //pushing the information into the DOM table 
    $('table-input').append(`
    <tr>
    <th>${FirstNameInputVal}</th>
    <th>${}</th>
    <th>ID</th>
    <th>Title</th>
    <th>Annual Salary</th>
    </tr>
    `)
    //(placeholder)
    $('#FirstName').val('')
   


}