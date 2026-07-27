

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

function trappingRainWater(array){
   
   let left = array[0], right = array.length - 1;
   let left_Max = 0, right_Max = 0, water_units = 0 ;
   
   while(left < right){

      if(array[left] < array[right]){

         array[left] >=  left_Max ? (left_Max = array[left] ) : (water_units += left_Max - array[left]);
        
         left++;

      }
      else{
          array[right] >=  right_Max ? (right_Max = array[right] ) : (water_units += right_Max - array[right]);
        
         right--;
      }

   }

   return water_units ;


}

const exArray =  [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trappingRainWater(exArray));



