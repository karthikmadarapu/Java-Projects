import {
    getCurrentValue,
    setCurrentValue,
    getPreviousValue,
    setPreviousValue,
    getOperator,
    setOperator
} from "./state.js";

import { calculate } from "./operations.js";

const display = document.getElementById("display");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById("equals");


numberButtons.forEach(function(button){
    button.addEventListener("click", function(){

        const number =  button.dataset.number;
        
        const currentValue = getCurrentValue();

        setCurrentValue(currentValue + number);
       
        display.textContent = getCurrentValue();

    });

});

operatorButtons.forEach(function(button){
    button.addEventListener("click", function(){

        const operator = button.dataset.operator;

        setPreviousValue(getCurrentValue());
        setCurrentValue("");
        setOperator(operator);
        display.textContent = "";

    });
});

equalsButton.addEventListener("click", function(){
    const current = getCurrentValue();
    const previous = getPreviousValue();
    const operator = getOperator();

    const numberA = Number(previous);
    const numberB = Number(current);

    const result = calculate(numberA, operator, numberB);

    setCurrentValue(String(result));
    setPreviousValue("");
    setOperator(null);
    display.textContent = getCurrentValue();

});