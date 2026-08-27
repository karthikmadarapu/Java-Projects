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



// Using dataBases and manipulating
const apiUsers = [
  { id: 101, first_name: "John", last_name: "Doe", role: "admin" },
  { id: 102, first_name: "Jane", last_name: "Smith", role: "user" }
];

const organisingData = apiUsers.map(eachItr => ({
  userId : eachItr.id,
  fullName : `${eachItr.first_name} ${eachItr.last_name}`,
  isAdmin : eachItr.role === "admin"


}));

console.log(organisingData);


// extracting just the ids

const cartItems = [
  { productId: "p1", quantity: 2, price: 49.99 },
  { productId: "p5", quantity: 1, price: 19.99 }
];

const ids = cartItems.map(eachProduct => eachProduct.productId);

console.log(ids);


// id plucker 

const products_api = [
  { id: "p10", name: "Laptop", price: 999 },
  { id: "p20", name: "Mouse", price: 25 },
  { id: "p30", name: "Keyboard", price: 45 }
];


const ids_pluck = products_api.map(eachItr => eachItr.id);
console.log(ids_pluck);


// Inflation Adjuster 

const price = [100, 250, 500, 1000];

const inflatedPrices = price.map(each => each * 1.1);

console.log(inflatedPrices);


// The HTML list builder 

const menuItems = ["home", "about", "contact"];

const listedMenuItems = menuItems.map(each => `<li> ${each} </li>`);

console.log(listedMenuItems);


// scorecard Maker 

const players = ["Alice", "Bob", "Charlie"];

const scorecard = players.map((each,index) => ({

    Name : each,
    Score : 0, 
    Rank : index + 1



}));

console.log(scorecard);

// filter method 

const engines = ["v2", "v4", "v6", "v8", "v12"];

const highValEngines =  engines.filter(each => each >= "v4");

console.log(highValEngines);

// liquor store  checkout system 

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Bob", age: 16 },
  { name: "Alice", age: 30 }
];

const filtered_Users = users.filter(eachItr => eachItr.age >= 19);

console.log(filtered_Users);

//bot spamming --- comment section

const comments = ["Love this!", "", "Very helpful article", " ", "Awesome post!"];

const filterComments = comments.filter(each =>{
    if(each !== "" && each !== " " ) return each;
});

console.log(filterComments);


// The "Odd Position Evictor"
const  UI_Cards = ["Card A", "Card B", "Card C", "Card D", "Card E"];

const oddPosition = UI_Cards.filter((each, index )=> index % 2 === 0);

console.log(oddPosition);



// THE Stock Broker DashBoard 

const inventory = [
  { sku: "A1", stock: 0, status: "active" },
  { sku: "B2", stock: 12, status: "active" },
  { sku: "C3", stock: 4, status: "active" },
  { sku: "D4", stock: 2, status: "discontinued" }
];


const filteredInventory  = inventory.filter((each) => {
    if((each.stock <= 5 && each.stock >0) && each.status === "active" ) return each;

});

console.log(filteredInventory);

//  "Search Bar Filter"

const articles = ["New tech trends", "Cooking 101", "FinTech Explained", "History of Art"];
const keyword = "tech";

const newArticles = articles.filter((each) => {
each.toLowerCase().includes(keyword.toLowerCase());
});
console.log(newArticles);

// The "Missing Data Purge"

const profiles = [
  { user: "dev_dan", email: "dan@test.com" },
  { user: "ghost_user" }, 
  { user: "bot_99", email: null },
  { user: "admin_ace", email: "ace@test.com" }
];

const filtered_profiles = profiles.filter((each) => {
    if(each.email !== null && each.email !== undefined) return each;

});
console.log(filtered_profiles);


// BOUNCER DE DUPLICATOR

const sessionIds = [102, 305, 102, 404, 305, 500];

const originalSessionIds = sessionIds.filter((each, index, arr) => arr.indexOf(each) === index);

console.log(originalSessionIds);


//  The "E-Commerce VIP Checker" (The Ultimate Test)

const shoppers = [
  { name: "Zack", tier: "premium", purchases: [50, 30, 150] }, // Total: 230
  { name: "Kelly", tier: "standard", purchases: [300] },       // Total: 300
  { name: "Slater", tier: "premium", purchases: [20, 40] },     // Total: 60
  { name: "Jessie", tier: "premium", purchases: [100, 120] }    // Total: 220
];

const premiumShoppers = shoppers.filter((each) => {

    const  totalSpent = each.purchases.reduce((sum, current) =>  sum + current, 0);
    if(totalSpent>= 200 && each.tier === "premium") return each;
});

console.log(premiumShoppers);



// reduce  methods quick practice 

const numbers = [10, 2, 4, 7 ,9, 25];

const sum = numbers.reduce((acc, eachNum) => acc + eachNum ,0);

console.log(sum);

// cart Totalizer 
const prices = [12.99, 5.00, 45.00, 2.50];

const cartTotal =  prices.reduce((acc, eachPrice) => acc + eachPrice, 0);

console.log(cartTotal);


// The "Salary Multiplier"

const factors = [1, 2, 3, 4];

const salaryMultiplier = factors.reduce((acc, eachNum) => acc * eachNum, 1);

console.log(salaryMultiplier);

// Inventory Valuator 

const warehouse = [
  { product: "Chair", price: 50, quantity: 4 },  // Value: 200
  { product: "Table", price: 150, quantity: 2 }, // Value: 300
  { product: "Lamp", price: 25, quantity: 10 }   // Value: 250
];


const valuation = warehouse.reduce((acc, eachVal) => {

  const currentTotal = eachVal.price * eachVal.quantity;

   const finalTotal =   acc + currentTotal;
   
  return finalTotal;


}, 0);

console.log(valuation);
// T-shirt Picker
const sizes = ["S", "M", "L", "XL"];

const modifiedSizes = sizes.reduce((acc, eachItr, index) => {

    if(index === 0 ) return eachItr;

    return acc + "-" + eachItr;

}, "");

console.log(modifiedSizes);


// E-COMM Platform Program 

const userData = [
  { id: 1, name: "Alice", status: "active", transactions: [150.00, 25.50] },
  { id: 2, name: "Bob", status: "suspended", transactions: [400.00] },
  { id: 3, name: "Charlie", status: "active", transactions: [10.99, 99.00, 5.50] },
  { id: 4, name: "David", status: "inactive", transactions: [1000.00] },
  { id: 5, name: "Eve", status: "active", transactions: [] }
];


const totalRevenueGenerator = userData

.filter(eachUser => eachUser.status === "active") 

.map(eachuser => {
    return eachuser.transactions.reduce((sum, num) => sum + num, 0);
})

.reduce((grandTotal, userTotal) => grandTotal + userTotal, 0);

console.log(totalRevenueGenerator);



// ADVANCED TOPICS JS INDUSTRY STANDARD


// SPREAD OPERATOR 

const  goodfruits = ["apple", "banana", "watermelon", "mango"];

const okayishFruits = ["jackfruit"];

const fruits = [...goodfruits , ...okayishFruits , "grapes" ];

console.log(fruits);

// SPREAD OPERATOR CODING QUIZ 
const rockSongs = ["In the End", "Numb"];
const popSongs = ["Bad Romance", "Blank Space"];


const masterPlaylist  = [...rockSongs, ...popSongs];
console.log(masterPlaylist);



// ex 2
const originalUsers = ["Alice", "Bob", "Charlie"];

const clonedUsers = [...originalUsers];

const check = originalUsers === clonedUsers;

console.log(clonedUsers , check);

// ex 3 

const baseProfile = { id: 101, username: "dev_dan", country: "USA" };
const updates = { country: "Canada", status: "active" };

const finalProfile = {...baseProfile, ...updates};

console.log(finalProfile);









