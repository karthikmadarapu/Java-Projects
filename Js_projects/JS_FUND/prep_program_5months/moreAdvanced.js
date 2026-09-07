// ASYNC / AWAIT + promises 

const deliverPackage = () => new Promise((resolve) => {
    setTimeout(() => resolve("📦 Package Delivered!"), 1500);
});


async function receiveOrder(){

    console.log("isUser === true");
    const message = await deliverPackage();
     console.log(message);
    
    console.log("shipped");
   
    return message;

}

receiveOrder();


// Password authenticator

const checkCredentials = (password) => new Promise((resolve, reject) => {
    if (password === "secret123") {
        resolve("🔐 Access Granted");
    } else {
        reject("❌ Invalid Password!");
    }
});


async function login(userPassword){
    
    try{
        if(!userPassword || userPassword.trim() === ""){
            throw new Error("Password cannot be empty !");
        }
        

        console.log("=====PASSWORD CHECKING VERY STRICT=====");
        const passConfirm = await checkCredentials(userPassword);

        console.log(passConfirm);
    }
    catch(err){
        console.log("err: " ,err.message|| err);
    }
    finally{
        console.log("FUNCTION PASSED EFFECIENTLY\n");
    }

}


login("secret123");


