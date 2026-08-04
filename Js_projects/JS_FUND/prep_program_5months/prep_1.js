// Arrow functions

const square = (num) => num * num;

const greet = (name) => `hello ${name}`;

const isEven = (num) => num % 2 === 0;

const doubleNumber = (num) => num * 2;

console.log(doubleNumber(9));

// No arrguments for the arrow function 

const sayHello = () => "Hello World!" ;

console.log(sayHello());


const isBigger = (a, b) =>  a > b ;


console.log(isBigger(50000, 10));

const gettingAnAbsoluteVal = (num) => {
    if(num < 0 )  return num * -1 ;
    return num;
};

console.log(gettingAnAbsoluteVal(1));

