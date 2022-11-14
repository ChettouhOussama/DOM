const display = document.querySelector('.counter-preview');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const resetBtn = document.querySelector('#reset');


const total = document.querySelector('#totalfacture');

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);


let value = 0;
let totalvalue=0

function increment() {
    value += 1;
    display.textContent = value;
    totalvalue=499.99*value;
    total.textContent= totalvalue + "$"

    return totalvalue;
}


function decrement() {
    if (value>0){
    value -= 1;
    display.textContent = value;
    totalvalue = totalvalue-499.99;
    total.textContent= totalvalue + "$"
    }
    else {
        display.textContent="O";
    }


}

function reset() {
    value = 0;
    display.textContent = value;
    total.textContent="000.00$"

}

