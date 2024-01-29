// in this class we have discussed about the object 

//literal and constructor

//singleton //when we declare like constructor then it is singleton

// this is blject literal 
// sometime we create this using  Object.create
const mySym = Symbol("key1") // this is how we declare symbol which is unique
const JsUser = {
    name: "Asta",
    "full name": "Asta kk",
    age: 23,
    [mySym]: "myKey",
    location: "Bhubaneswar",
    email: "asta@google.com", 
    isLoggedIn: false, 
    lastLoggedinDays: ["Monday", "Saturday"]
}
// how to access the above date of an object

console.log(JsUser.email) // this is one way to excess here we can access the email
console.log(JsUser["email"])
console.log(JsUser["full name"]) // this is the only one way to acces the value of the key if the key is written like the "full name"
console.log(JsUser[mySym])
// console.log(typeof JsUser.mySym) // result is string when we declare a symbol in a object as usual like mySym: "myKey" but when we use id like [mySym]: "myKey" then it is symbol
console.log(typeof JsUser[mySym]) // yet this is giving string why is that has to study

JsUser.email = "Asta@yahoo.com"  // this is how we overwrite the value of something by the key and using equalty here key is .email and JsUser is Object and by putting equalty we changed the value as "Asta@yahoo.com"

// Object.freeze(JsUser)  // this willl freeze the Object and not allow to change the value of the assigned object 
// JsUser.email = "Asta@microsoft.com"  // this is the new value tried to insert in the email and we printed like the below
// console.log(JsUser)                     // after printing we found there is no "Asta@microsoft.com" in the JsUser Object

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting());
// console.log(JsUser.greeting); // function return back printed as [Function(anonymous)]

JsUser.greetingTwo = function(){
    console.log(`Hello JS user I Am, ${this["full"]}`);

}
console.log(JsUser.greetingTwo())