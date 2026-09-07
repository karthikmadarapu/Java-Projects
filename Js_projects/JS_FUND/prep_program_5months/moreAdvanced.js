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


