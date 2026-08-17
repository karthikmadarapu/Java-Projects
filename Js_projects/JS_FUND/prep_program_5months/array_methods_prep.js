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
