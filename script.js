var principal = document.getElementById("principal").value;

var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;

var rate = document.getElementsById("rate").value;
var years = document.getElementsById("years").value;

var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);

function updateRate()
{
    var rateeval = document.getElementById("rate").value; document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
    p = document.getElementById("principal").value;
    
}
        