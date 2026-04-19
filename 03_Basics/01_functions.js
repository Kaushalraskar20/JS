function addTwoNumbers(number1, number2) {
    let result = number1 + number2;   // define result
    console.log(result);
    return result;
}

let output = addTwoNumbers(3, 4);
console.log("Final Result:", output);


//**************************** 

function loginUserMessage(username){
    if(username === undefined){
            console.log("Enter the use name ");
            return 
    }
    return '${username} just logged in '
}
console.log(loginUserMessage());

//empty if staemnt willl be consider as the false value 

