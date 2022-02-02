
//set up variables to get data entered by user

var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);

function updateRate()
{
    var rateval = document.getElementById("rate").value; 
	document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
    p = document.getElementById("principal").value;
	document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}

function checkdata()
{
	//check principal is empty
	
	if(principal.value==""){
		alert("Please enter a positive number");
		principal.focus();
		return false;
}
        