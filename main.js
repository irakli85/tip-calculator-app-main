// variables
let billInput = document.querySelector("#bill");
let percentageInput = document.querySelectorAll(".tips");
let customInput = document.querySelector("#percentage-input");
let peopleInput = document.querySelector("#people");
let tipAmount = document.getElementById("#tip-per-person");


// default values
let billValue = 0;
let customValue = 0;
let peopleValue = 1;

//functions
function billInputFn(){
    billValue = billInput.value;
    console.log(billValue);
}

function percentageInputFn(){
    for (let tipList of percentageInput) {
        if (tipList.checked) {
          console.log(tipList.value)
        }
      }    
}

function customInputFn(){
    customValue = customInput.value / 100;
    console.log(customValue);
}

function peopleInputFn(){
    peopleValue = peopleInput.value;
    console.log(peopleValue);
}



//event listeners
billValue = addEventListener("input", billInputFn);
percentageValue = addEventListener("click", percentageInputFn);
customValue = addEventListener("input", customInputFn);
peopleValue = addEventListener("input", peopleInputFn);



