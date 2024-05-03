const output = document.querySelector(".output");
const numbers = document.querySelectorAll(".number");
const modifiers = document.querySelectorAll(".mod");

let num1;
let operator = "+";
let num2;

let outputBuffer = "";

// Functions
const add = () => Number(num1) + Number(num2); 
const subtract = () => Number(num1) - Number(num2);
const multiply = () => Number(num1) * Number(num2);
const divide = () => Number(num1) / Number(num2);


const updateFirstNumber = () => num1 = outputBuffer;
const updateSecondNumber = () => num2 = outputBuffer;
const updateScreen = () => output.textContent = outputBuffer;
const updateScreenModifier = () => output.textContent = operator;
const resetBuffer = () => outputBuffer = "";


Array.from(numbers).forEach(element => {
    element.addEventListener("click", () => {
        outputBuffer += element.textContent;
        updateScreen();
    })
});

Array.from(modifiers).forEach(element => {
    element.addEventListener("click", () => {
        operator = element.textContent;
        updateScreenModifier();
        updateFirstNumber();
        resetBuffer();
        console.log(num1);
        console.log(operator);
    })
})

document.querySelector(".enter").addEventListener("click", () => {
    updateSecondNumber();
    resetBuffer();
    console.log(num2);
    switch (operator){
        case "+":
            outputBuffer = add();
            break;
        case "-":
            outputBuffer = subtract();
            break;
        case "*":
            outputBuffer = multiply();
            break;
        case "/":
            outputBuffer = divide();
            break;
        default:
            outputBuffer = "ERROR";
    }
    updateScreen();
});


document.querySelector(".clear").addEventListener("click", () => {
    resetBuffer();
    updateFirstNumber();
    updateSecondNumber();
    updateScreen();
});

document.querySelector(".dot").addEventListener("click", () => {
    outputBuffer += ".";
    updateScreen();
});


document.querySelector(".back").addEventListener("click", () => {
    outputBuffer = outputBuffer.slice(0, -1);
    updateScreen();
});
