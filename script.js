
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

//Check if principal field has a 0 or negative number 
//If so stop and refocus to principal field

function checkdata(){
	if(principal <=0){
		alert("Enter a positive number");
		principal.focus();
		return false;
		//else all is well returen true
		return true:
}
}

// now finally do the calc to show result to user

//need to figure out how to trigger this one

function compute()
{
	document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}




    