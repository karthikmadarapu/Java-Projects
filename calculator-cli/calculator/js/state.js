let currentValue = "";
let previousValue = "";
let operator = null;
// for Reading the values!!!
function getCurrentValue(){
    return currentValue;
}

function getPreviousValue(){
    return previousValue;
}

function getOperator(){
    return operator;
}

// for setting  or updating new values 
function setCurrentValue(value){
        currentValue = value;
}

function setPreviousValue(value){
        previousValue = value;
}

function setOperator(value){
        operator = value;
}

export {
    getCurrentValue,
    getPreviousValue,
    getOperator,
    setCurrentValue,
    setPreviousValue,
    setOperator
};

