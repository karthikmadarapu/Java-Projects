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

  if(age <= 19) throw new Error(`your age must be 19+ to enter the CLUB`);



  console.log(`Access Granted`);

 }

 catch(error){

    console.log(`error caught successfully :`, error.message);

 }


 

