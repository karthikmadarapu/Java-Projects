// Try - catch block 
 const brokenJson = '{"name": "Alice", "age": 25'; 

 let data;
 try{
    data = JSON.parse(brokenJson);
     
 }
 catch(err){

    console.log("error captured gracefully : ", err.message);

    data = {error : true};
 }

 console.log("final application data status : ", data);



//  Strip Club entry Bouncer
let age;
 try {
  age = 18;

  if(age < 19) throw new Error(`your age must be 19+ to enter the CLUB`);



  console.log(`Access Granted`);

 }

 catch(error){

    console.log(`error caught successfully :`, error.message);

 }


//  Loading animation for the App 
 
let isLoading = true;

try{
    throw new Error (`an unexpected error occured, server crashed!`);
}
catch(error){
    console.log(`error caught gracefully: `, error.message);
}

finally{
    isLoading = false;
}

console.log(`spinner animation turned off successfully: `, isLoading);

// calculator dividing by zero 

function calc(a, b){
    if(b === 0) throw new Error(`cannot divide by zero!`);
    else  return a/b ;
}

try{
    calc(10, 0);

}
catch(error){
    console.log(`error captured successfully: `, error.message);
}

//  The "Missing Database Value"

let user = null;

try{
   
    console.log(user.phone);
    throw new Error(`user object null!`);
}
catch(error){

    console.log(`successfully captured error!`, error.message);
   user = {user: null};

}
// try catch grind

const invalidList = undefined;
try {
    console.log(invalidList.length);
}
catch(error){

    console.log("message captured", error.message);
}
finally{
    console.log("Validation check complete");
}

// try catch block for user profile
const user_01 = { id: 101, profile: null };

try{

    console.log(user_01.profile.phone);
}
catch(err){
    console.log("phone no. not provided", err.message);

}

// HTTP STATUS CODE PARSER

function checkStatus(code){
    if(code === 404) throw new Error ("Page not found");

    else if(code === 505 ) throw new Error ("server error");
    else  throw new Error("wrong number");
}

try {
    checkStatus(1139);
}
 catch(error){
    console.log(error.message);
 }


 
