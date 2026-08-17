const arrayPrices = [10, 120, 20, 30, 40];

const afterDiscountPrice = arrayPrices.map(eachNum => eachNum * 0.80);

console.log(afterDiscountPrice);

// array filter method 

const filterNums = [1, 4, 7, 10, 15, 18];

const evenNum = filterNums.filter(each => each % 2 === 0);

console.log(evenNum);

// array reduce method 

const itemPrices = [5.99, 10.00, 2.50];

const addingSum = itemPrices.reduce((total, currentItem)=> {
    return total + currentItem;

}, 0);

console.log(addingSum);
// Data Manipulation 

const arrayOfNames = [{first: "John", last: "Doe"}, {first: "Anna", last: "Smith"}];

const fullNames = arrayOfNames.map(eachUser => `${eachUser.first}${eachUser.last}`);

console.log(fullNames);

// filter medium version problems 

const products  = [{name: "Laptop", stock: 5}, {name: "Shirt", stock: 0}, {name: "Book", stock: 12}];

const filterProducts = products.filter(each =>  each.stock > 0);
console.log(filterProducts);

// medium hard reduce method

const  votes =  ["yes", "no", "yes", "yes", "no"];

const groupingVotes = votes.reduce((tally, vote) =>{
    if(!tally[vote]){
        tally[vote] = 0;
    }

     tally[vote]++;

     return tally;

   
    

},{});

console.log(groupingVotes);