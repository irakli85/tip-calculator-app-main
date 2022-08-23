// variables
let billInput = document.querySelector("#bill");
let percentageInput = document.querySelectorAll(".tips");


// default values
let billValue = 0;

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


//event listeners
billValue = addEventListener("input", billInputFn);
percentageValue = addEventListener("click", percentageInputFn);
