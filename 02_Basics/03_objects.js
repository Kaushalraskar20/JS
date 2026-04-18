//object literals 
const JsUser = {
    name:"Kaushal",
    age: 21,
    location:"Pune",
    email:"kaushal@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}


console.log(JsUser["email"]) //this is used to acces the objects use in the square bracket  

JsUser.email = "kaushal@gpt.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(
    JsUser.greeting()
);
