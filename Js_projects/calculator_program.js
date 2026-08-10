let curentValue = "";
let prevValue = "";
let operator = null ;

function inputNumber(num){
    // todo
}

function inputOperator(operator){
    // todo
}

function calculate(a, operator, b){
    
    switch(operator){
        case "+" :
            return a + b;

        case "-" :
            return a - b;

        case " * " :
            return a * b;
          
        case "/":
            return  a/b;
          
        default:
            return null;    
        }
    }



function clearCalculator(){
    // todo
}

function updateDisplay(){
    // todo
}


// numberButtons.foreach(button =>{
//    button.addEventListener("click", () =>{
//     inputNumber(button.textContent);
   
//    });
// });  




console.log(calculate(1500, "/", 3 ));

