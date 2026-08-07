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




