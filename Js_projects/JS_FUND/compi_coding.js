

for(let i=1; i<=100;i++){
    
     if(i % 3 === 0 && i % 5=== 0){
          console.log("FizzBuzz");
     }
     else if(i % 3 === 0 ){
        console.log("Fizz");
     }
     else if(i % 5=== 0){
        console.log("Buzz");
     }
     else{
        console.log(i);
     }

}




// trapping water 

// function trappingRainWater(array){
   
//    let left = array[0], right = array.length - 1;
//    let left_Max = 0, right_Max = 0, water_units = 0 ;
   
//    while(left < right){

//       if(array[left] < array[right]){

//          array[left] >=  left_Max ? (left_Max = array[left] ) : (water_units += left_Max - array[left]);
        
//          left++;

//       }
//       else{
//           array[right] >=  right_Max ? (right_Max = array[right] ) : (water_units += right_Max - array[right]);
        
//          right--;
//       }

//    }

//    return water_units ;


// }

// const exArray =  [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// console.log(trappingRainWater(exArray));



function trappingWater(myArr){
   
   let leftP = myArr[0], rightP = myArr.length - 1;
   let leftmaxx = 0, rightmaxx = 0, waterUnits = 0;

   while(leftP < rightP){

      if(myArr[leftP] < myArr[rightP]){
         myArr[leftP] >= leftmaxx ? (leftmaxx = myArr[leftP]) : (waterUnits += leftmaxx - myArr[leftP]);
         leftP++ ;
      }

      else{
         myArr[rightP] >= rightmaxx ? (rightmaxx = myArr[rightP]) : (waterUnits += rightmaxx - myArr[rightP]);
         rightP-- ;
      }



   }

   return waterUnits;


}


 const exArray =  [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

 console.log(trappingWater(exArray));


 
// finding the length of longest strictly increasing subsequence 

const nums = [10, 9, 2, 5, 3, 7, 101, 18];

function lengthOfSubsequece(arr){

   const dp = new Array(arr.length).fill(1);

   for(let i = 1; i < arr.length; i++){
      for(let j = 0; j < i; j++){

         if(arr[j] < arr[i]){
         dp[i] = Math.max(dp[i], dp[j] + 1);
         }
      }
   }

   return Math.max(...dp);

}
console.log(lengthOfSubsequece(nums));


