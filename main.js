// catch HTML elements
let billInput = document.querySelector("#bill");
let percentageInput = document.querySelectorAll(".tips");
let customInput = document.querySelector("#percentage-input");
let peopleInput = document.querySelector("#people");
let tipAmount = document.querySelector("#tip-per-person");
let totalAmount = document.querySelector("#total-per-person");
let resetAll = document.querySelector("#reset");


// default values
// let billValue = 0;
// let customValue = 0;
// let peopleValue = 1;
// let percentageValue = 1;


//functions

function billInputFn(){
    billValue = Number(billInput.value);    
    // console.log(billValue);
}

function percentageInputFn(){
    for (let tipList of percentageInput) {
        if (tipList.checked) {
        //   console.log(tipList.value)
        percentageValue = Number(tipList.value);
        }
      }    
}

function customInputFn(){
    customValue = Number(customInput.value / 100);
    // console.log(customValue);
}

function resetFn(){
    billInput.value = 0;
    peopleInput.value = 1;
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
}


function peopleInputFn(){
    peopleValue = Number(peopleInput.value);    
    // console.log(peopleValue);
    tipAmount.innerText = (billValue * percentageValue) / peopleValue;
    totalAmount.innerText = (billValue + (billValue * percentageValue)) / peopleValue;
}





//event listeners

billValue = addEventListener("input", billInputFn);
percentageValue = addEventListener("click", percentageInputFn);
customValue = addEventListener("input", customInputFn);
peopleValue = addEventListener("input", peopleInputFn);
resetAll.addEventListener("click", resetFn);



