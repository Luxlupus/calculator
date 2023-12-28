let a = 0;
let b = 0;
let result;
let operator = null;

//main math function declarations
function add(a, b) {
    result = a + b;
    console.log(result);
    return result;
}
function subtract(a, b) {
    result = a - b;
    console.log(result);
    return result;
}
function multiply(a, b) {
    result = a * b;
    console.log(result);
    return result;       
}
function divide(a, b) {
    result = a / b;
    console.log(result);
    return result;
}
//for calling the math function depending on operator sign
function operate(operator, a, b) {
    if (operator === "+")
        {
            add(a, b);
        }
    else if (operator === "-")
        {
            subtract(a, b);
        }
    else if (operator === "*")
        {
            multiply(a, b);
        }
    else if (operator === "/")
        {
            divide(a, b);
        }
}

//assign value before operation to variable a, after operation to variable b
const numBtns = document.getElementsByClassName('btnNum');
for (const element of numBtns) {
    element.addEventListener('click', () => {
        
        if(operator === null){ 
        a = Number(a + element.value);
        console.log("Value of a is:", a);

        }
        else {
        b = Number(b + element.value);
        console.log("Value of b is:", b);
        }
    }) 
}  
//assign operator sign    
const operatorBtns = document.getElementsByClassName('btnOperator');
for (const element of operatorBtns) {
    element.addEventListener('click', () => {
        operator = element.value;
        console.log("Operator is:",operator);    
    });
}
//calling corresponding math function when "=" clicked
const equals = document.getElementById('equals');
equals.addEventListener('click', () => {operate(operator, a, b)});








