let a = 0;
let b = 0;
let result = null;
let operator = null;

//creating varibles for display
const displayNum = document.getElementById('displayNum');
const activeDisplay = document.createElement("span");

//main math function declarations
function add(a, b) {
    result =  a + b;
    console.log("Result is", result);
    console.log("Result is", typeof(result));
    result = +result.toFixed(7);
    return result;
}
function subtract(a, b) {
    result = a - b;
    console.log("Result is", result);
    console.log("Result is", typeof(result));
    result = +result.toFixed(7);
    return result;
}
function multiply(a, b) {
    result = a * b;
    console.log("Result is", result);
    console.log("Result is", typeof(result));
    result = +result.toFixed(7);
    return result;       
}
function divide(a, b) {
    result = a / b;
    console.log("Result is", result);
    console.log("Result is", typeof(result));
    result = +result.toFixed(7);
    return result;
}
//for calling the math function depending on operator sign
function operate(operator, a, b) {
    if (operator === "+"){
        add(a, b);
        newCalc(a, result);
    }
    else if(operator === "-"){
        subtract(a, b);
        newCalc(a, result);
    }
    else if(operator === "*"){
        multiply(a, b);
        newCalc(a, result);
    }
    else if(operator === "/"){
        divide(a, b);
        newCalc(a, result);
        }
    else if(operator === null){
        init();
        newCalc(a, result);
    }
}

//assigning result values if user decides to continue calculating with acquired result
function newCalc(a, result) {
a = result;
console.log("Result has become new a:", a); }

//assign value before operation to variable a, after operation to variable b. 
const numBtns = document.getElementsByClassName('btnNum');
for (const element of numBtns) {
    element.addEventListener('click', () => {
        if(operator === null){ 
            a = Number(a + element.value);
            console.log("Value of a is:", a);
            console.log(typeof(a));
            activeDisplay.textContent = a;
            displayNum.appendChild(activeDisplay);
        }
        else if(operator !== null && b === 0){
            b = Number(b + element.value);
            console.log("Value of b is:", b);
            console.log(typeof(b));
            activeDisplay.textContent = b;
            displayNum.appendChild(activeDisplay);
        }
//if user starts new calculation without clearing
        else if(result !== null){
            a = 0;
            b = 0;
            a = Number(a + element.value);
            console.log("Value of a is:", a);
            console.log(typeof(a));
            activeDisplay.textContent = a;
            displayNum.appendChild(activeDisplay);
        }
    }) 
}  
//assign operator sign    
const operatorBtns = document.getElementsByClassName('btnOperator');
for (const element of operatorBtns) {
    element.addEventListener('click', () => {
        if (operator === null) {
            activateDecPoint();
            operator = element.value;
            console.log("Operator is:",operator);
            activeDisplay.textContent = operator;
            displayNum.appendChild(activeDisplay);
        }
        //assign operator sign for next operation and calculate if the equal sign is not clicked
        else if(operator !== null) {
            activateDecPoint();
            operate(operator, a, b);
            a = result;
            console.log("Value of new a is:", a);
            b = 0;
            console.log("Value of new b is:", b);
            operator = element.value;
            console.log("New operator is:",operator);
            activeDisplay.textContent = operator;
            displayNum.appendChild(activeDisplay);
        }
    });
}
//adding decimal point
const decPoint = document.getElementById('decimalPoint');
decPoint.addEventListener('click', () => {
    if(operator === null){
        decPoint.disabled = true;
        a = a + ".";
        activeDisplay.textContent = a;
        displayNum.appendChild(activeDisplay);
    
    }
    else {
        decPoint.disabled = true;
        b = b + ".";
        activeDisplay.textContent = b;
        displayNum.appendChild(activeDisplay);
    }
});

//reactivate decimal point button for next input
function activateDecPoint() {
    decPoint.disabled = false;
}
//calling corresponding math function when "=" clicked
const equals = document.getElementById('equals');
equals.addEventListener('click', () => { 
    operate(operator, a, b)
    activeDisplay.textContent = result;
    displayNum.appendChild(activeDisplay);
    decPoint.disabled = true;
});

//clearing the display when C clicked and reset variables
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
    displayNum.innerHTML = ""
    init();
    activateDecPoint();
});

//getting back initial values of global variables    
function init() {
    a = 0;
    b = 0;
    result = null;
    operator = null;
}








