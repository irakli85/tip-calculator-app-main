// BILL INPUT

let billInput = document.querySelector('#bill'); 
let billValue = 0.0;

function billInputFn(){
    billValue = billInput.value;
    console.log(billValue);
}


billInput.addEventListener('input', billInputFn);



// PEOPLE INPUT

let peopleInput = document.querySelector('#people');
let peopleValue = 1;

function peopleInputFn(){
    peopleValue = peopleInput.value;
    console.log(peopleValue);
}

peopleInput.addEventListener('input', peopleInputFn);


// PERCENTAGE INPUT

let percentageInput