// datatype Summary
//primitive
//7types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.4;
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const Id = Symbol("123")
const anotherId = Symbol("123");
console.log(Id === anotherId);

//REference (Non primitive)

// Array, Object, Funtion



const heros = ["shaktiman", "naagraj", "doga"]; //Arry

// this is object ex-
 let: myObj ={  
    name: "Asta",
    age: 23,

 }

 // this is how we use funtion data type
 
 const myFunction = function(){
    console.log("Hello world");
 }

//+++++++++++++++++++++++++++++++++++++++ stack and heap memory ++++++++++++++++++++++++++++++++++++++++++++++++ class 10

 // memory are two types basically Stack and Heap
 // Stack (primitive), Heap (non-primitive)

 let myUserid = "Astakk"
 let anotherid = myUserid
 anotherid = "astabhai"

 console.log(myUserid); //Astakk
 console.log(anotherid);//astabhai
 //this above was stack memory means they are all primitive data type 

// this is now Object,  which is non-primitive means Heap memory

let userOne = {
   email: "Asta@gmail.com",
   upi: "user@ybl"
}
let userTwo = userOne
 userTwo.email = "Asta@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);


 // the end


