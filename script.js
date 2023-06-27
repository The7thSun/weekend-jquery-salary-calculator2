jQuery(document).ready(onReady);
//global variables 
let SalaryCount= 0
let MonthlySalary= 0
let TotalMonthlySalary= 0
//turning my 20k thresh hold for the red background into a currency
//for some reason it kept turning red only when i hit 2k instead of 20k so i upped the number to 200k to compensate
//wasnt sure how to fix this 
let twentyThousand= 20000
let currencyFormat= new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})
let currency= currencyFormat.format(twentyThousand)

function onReady(){
    //log to see if function is working
    console.log('are you ready kids?');
    // Event listeners 
    $('.submit-btn').on('click', SubmitDataCollector)
    $('#table-input').on('click', '.deleteBtn', DeleteButton)
    

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
    console.log(' ay im collecting data over here!');
    //getting the input value for the employees information/other declarations i need 
    let FirstNameInputVal= $('#FirstName').val()
    let LastNameInputVal= $('#LastName').val()
    let IdIntegerValue= $('#IdInteger').val()
    let JobTitleInputVal= $('#JobTitleInput').val()
    //turning the salary input into a number with (+)
    let SalaryInputVal= parseFloat($('#SalaryInput').val())
    //pushing the information into the DOM table 
    $('#table-input').append(`
    <tr>
    <th>${FirstNameInputVal}</th>
    <th>${LastNameInputVal}</th>
    <th>${IdIntegerValue}</th>
    <th>${JobTitleInputVal}</th>
    <th>${SalaryInputVal}</th>
    <td><button class="deleteBtn">❌</button></td>
    </tr>
    `)
    //reseting the input values in the browser
    $('#FirstName').val('')
    $('#LastName').val('')
    $('#IdInteger').val('')
    $('#JobTitleInput').val('')
    $('#SalaryInput').val('')
    $('#Monthly').val('')
    //giving values to the global variables to calculate the total monthlysalary 
    TotalMonthlySalary += SalaryInputVal
    MonthlySalary = TotalMonthlySalary/12
    //conditional statment that will turn the totalmonthly cost background to red
    if(MonthlySalary >= twentyThousand){
        $('#Monthly-Costs-Display').css({
         'background-color': 'red' 
        })
    }
    //creating a seperate display for the monthly costs to be updated after 2 inputs
    $('#Monthly-Costs-Display').text(`$${MonthlySalary.toFixed(2)}`)
    }
 
function DeleteButton(){
    //log to see if the function is working 
console.log('NOOO that was my best employee!');
$(this).parent().parent().remove()
}