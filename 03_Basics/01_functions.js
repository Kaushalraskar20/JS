// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2;   // define result
//     console.log(result);
//     return result;
// }

// let output = addTwoNumbers(3, 4);
// console.log("Final Result:", output);


// //**************************** 

// function loginUserMessage(username){
//     if(username === undefined){
//             console.log("Enter the use name ");
//             return 
//     }
//     return '${username} just logged in '
// }
//console.log(loginUserMessage());

//empty if staemnt willl be consider as the false value 


function calculateCartPrice(...number1) { //... this will be called the rest operator and this will store it into the array 
    return number1;
}

//console.log(calculateCartPrice(2,3,5,5,6));

const user = {
    username: "kaushal",
    price: 199
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);
}

handleObject(user);