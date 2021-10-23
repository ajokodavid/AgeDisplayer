var Inputs = document.querySelectorAll(".form");
var btn = document.querySelector("button");

function getUserDOB() {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    var date = new Date();
    var userYear = date.getFullYear();
    var userMonth = date.getMonth();
    var date = new Date();
    var userDay = date.getDate();
  
    var userYearDOB = Inputs[0].value;
    var userMonthDOB = Inputs[1].value;
    var userDayDOB = Inputs[2].value;
  
    var userYearAge = userYear - userYearDOB;
    var userMonthAge = userMonth - userMonthDOB;
    var userDayAge = userDay - userDayDOB;
  
    document.querySelector("#result").innerHTML = `You are ${+userYearAge} years, ${+userMonthAge} months, and ${+userDayAge} days old.`;
  });
}

setTimeout(getUserDOB, 5000);