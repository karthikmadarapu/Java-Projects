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


const makeUsername = (username) =>  ({name : username, role : "user"}) ;

console.log(makeUsername("mandy"));


// returning High earning employees

const getHighEarners = employees => employees.filter(emp => emp.salary > 5000);

const employees = [
 {name:"John",salary:5000},
 {name:"Mike",salary:8000},
 {name:"Anna",salary:6000}
];
console.log(getHighEarners(employees));

// name greeter program

const myname = (name) => `Hello ${name}!`;


console.log(myname("noman"));



// arrow fucntion 
const fruits = ["apple", "banana", "orange"];

fruits.forEach(fruit => {
    console.log(fruit);
});

// arrow functions prep 


const myProgram = (param, num) => {
    if(param !== num){
        return "num is not same!"; 
    }
    else {
        return "both nums are same"
    }
}

console.log(myProgram(1,9));


// multiplication function 

const multiply = (a, b) => a * b;
console.log(multiply(7,9));

// discount  fucntion 

const giveMeDiscount = (actualPrice, disc) => {
    

    const discGiven = actualPrice * disc;
    const finalDiscPrice = actualPrice - discGiven;

    return finalDiscPrice;

  
}

console.log(giveMeDiscount(12.95, 0.10));

// making username 

const makeUserName = name => ({username : name});

console.log(makeUserName("karty"));


// array  callback functions 

const numbers = [1, 2, 3, 4, 5, 6];

const doubleTheNumbers = numbers.map(nums => nums * 2);

console.log(doubleTheNumbers);

// keeping even nums only function 

const evenOnly = numbers.filter(num => num % 2 === 0);

console.log(evenOnly);