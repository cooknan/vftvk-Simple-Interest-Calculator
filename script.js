
//set up variables to get data entered by user


var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);

function updateRate(){
//give a value to right of slider as rate is updated
    var rateval = document.getElementById("rate").value; 
	document.getElementById("rate_val").innerText=rateval;
}

function checkdata()
{

//Check if principal field has a 0 or negative number 
//First see what is in the field and stuff into var principal
// if it looks good run function compute()


	if(principal <= 0 ){
		alert("Please enter a positive number");
		principal.focus();
		return false;
	}
	if all is well return true and keep going
	alert("Continue");
	return true;

// now finally do the calc to show result to user
function compute()
{
	document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}
}



    