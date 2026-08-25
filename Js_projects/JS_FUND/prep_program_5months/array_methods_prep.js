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


const myArr = [5.99, 10.00, 2.50];


const  totalAdd = myArr.reduce((acc, each) =>{

return acc + each;

},0);

console.log(totalAdd);


// reduce array method 
const bikes = ["s1000rr", "zx10r", "rc390", "panigale", "panigale"];

const groupBikes = bikes.reduce((total, eachBike)=>{

    if(!total[eachBike]){
        total[eachBike] = 0;
      
    }

     total[eachBike]++;
    return total;

},{});

console.log(groupBikes);

const students = [{name: "Alex", score: 85}, {name: "Blake", score: 42}, {name: "Charlie", score: 91}];

const passingStudentsNames = students.filter(student => student.score >= 50).map(student => student.name);

console.log(passingStudentsNames);


const arrayOfavailStock = [{name: "Laptop", stock: 5}, {name: "Shirt", stock: 0}, {name: "Book", stock: 12}];

const filtering =  arrayOfavailStock.filter(each => each.stock > 0);


console.log(filtering);

// given an array of inventory items 

const inventory_products = [{cat: "fruit", name: "apple"}, {cat: "meat", name: "beef"}, {cat: "fruit", name: "banana"}];

const grouping_cat = inventory_products.reduce((acc, each) =>{

    const current_cat = each.cat;

    if(!acc[current_cat]) acc[current_cat] =[];

    acc[current_cat].push(each.name);



return acc;


},{})

console.log(grouping_cat);


// array methods when ?

function customFilter(array, callback){

    return array.reduce((acc, each) =>{
        
        if(callback(each)){
            acc.push(each);

        }

        return acc;
    

    },[]);

}


const isEven = (param) => param % 2 === 0;

const myempty_arr = [1,2,3,3,4,2,8];

console.log(customFilter(myempty_arr,isEven));


const scores = [45, 89, 72, 95, 60, 88];

const findTheHighest = scores.reduce((acc, currentNum) =>{

if(acc <= currentNum) return currentNum;

return acc;

});

console.log(findTheHighest);

const nestedArr = [[1,2], [3,4],[5,6]];

const flatTheArr = nestedArr.reduce((acc, current) =>{

   return acc.concat(current);

    

}, []);

console.log(flatTheArr);


// IMP 6 BEST ARRAY METHODS ONLY 

// .map() Method 

const cars = ["toyota", "subaru", "BMW", "MERC"];

const newArr = cars.map(each => each.toUpperCase());

console.log(newArr);



// 
