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

 
 