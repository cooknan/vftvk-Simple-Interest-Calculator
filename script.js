function compute()
{
var principal = document.getElementById("principal").value;
	if(principal<1){
		alert("Enter a positive number");
		return false;
		console.log(principal);
	}
	
	var rate = document.getElementById("rate").value;
	console.log(rate);
	var years = document.getElementById("years").value;
	console.log(years);
	var interest = principal * years * rate /100;
	console.log(interest);
	var year = new Date().getFullYear()+parseInt(years);
	console.log(year);


var res = "If you deposit <mark>"+principal+",</mark>\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>";
document.getElementById("result").innerHTML = res;
console.log("inner html executed");
}

function updateRate()
{
	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText=rateval;
}