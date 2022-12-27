var userMonth=document.getElementById("user-month");
var userDay=document.getElementById("user-day");
var userYear=document.getElementById("user-year");

var subButton=document.getElementById("submit-date");

submitButton=document.addEventListener("click",function(evt){

var message=document.getElementById('message');
var parsedMonth=(parseInt(userMonth.value) -1);
var parsedDay=parseInt(userDay.value);
var parsedYear=parseInt(userYear.value);

var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var weekday=["Sunday","Monday","Teusday","wednesday","Thursday","Friday","Sutarday"];

var dateIs=new Date(parsedYear,parsedMonth,parsedDay);
var weekdayIs=weekday[dateIs.getDay()];
var monthIs=months[parsedMonth];

if (weekdayIs === undefined || months === undefined ) {
    message.innerText = "";

    setTimeout(function(){
message.innerText="please enter the valid date";
},500)
    
}
else{
    message.innerText= weekdayIs +", " + monthIs + " " + parsedDay + ", " + parsedYear;
}
})

