function calculate(numberA, operator, numberB){

    switch(operator){
        case "+" :
            return numberA + numberB;
        
        case "-":
            return numberA - numberB;

        case "*":
            return numberA * numberB;

        case "/":
            if(numberB === 0) return "error";
            
            return numberA / numberB;

         default :  return "Invalid Operator";
    }
}

export {calculate};