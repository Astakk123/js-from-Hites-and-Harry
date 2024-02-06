//++++++++++++++++++++++++++++++++++++++++++++ control flow intro and little more ++++++++++++++++++++++++++++++++++++++++++++++++++++
// control flow i.e control flow is used to control the execution of the code mens when to run and which code is run these all are done by using some control flow like condition see below 

// if (condition) {

// }

// if the condition is true then only the code will execute otherwise not ex-
// if (userLoggedIn){

// } 
//her if the user is loggedIn then it is true so it will run otherwise it will not run 
// there are number of operator to compare to apply condition like
/* 
< lessthan 
> greaterthan
<= lesstahn or equality
>= greaterthan or equality
= this is just on operator to assign the value to the variables
== equality
!= not equal 
=== strict equal (means it will check the typeof data also strictly equal or not)
!== strict not eqqual 
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++ if and else if ++++++++++++++++++++++++++++++++++++++++++++++++++++

// const temp = 21

// if ( temp  < 50){
//     console.log("yes")
// }
// console.log("no");// this code has nothing to do with what condition is given above because it is global scope not in the block scope so what should we do? see here 

//look at the above code and the below code in the above there we get two result yes and no but in the below case we get only one according to the value the reason is the style of code else is been usen in the below case and the console.log("no") is inside the else block 

// const temp = 21

// if ( temp  < 19){
//     console.log("yes")
// } else {
//     console.log("no")
// }

// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log( `User power: ${power}`);
// }
// console.log( `User power: ${power}`);  //result is referenceError: power is not defined  because const power = "fly" is not a global that is inside the scope 

// const balance = 1000 
// if (balance > 500) console.log("test"); //When we use the semicolon it ends here to write more we use coma but not recomended here there is no curly bracec but it act like that because it is in one line 

// lets do nested with the same example 

// const balance = 2000
// if (balance < 500){
//     console.log("less than");   
// }else if (balance <750) {
//     console.log("less than 750")
// }else if (balance < 900) {
//     console.log("les than 900")
// }else {
//     console.log("less than 1500") // only this line will be printed because the above are not true so if the above is not true then itwill run the else statement 
// }

const userLoggedIn = true 
const debitCard = true 
if( userLoggedIn && debitCard){
    console.log("Allow to buy course")
}
 // this is used to When all the condition is true like the aove then we use (&) in between the two condition this was and,  now look at the (or) below 

 const loggedInFromGoogle = false
 const loggedInFromEmail = true 
 if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
 }
//  this is called (or) either the first or the second noted by two pipelene(||)

// +++++++++++++++++++++++++++++++++++++++ Switch +++++++++++++++++++++++++++++++++++++++++++++++++++++++

//swith case statement look at the basic syntax 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3 
switch (month) {
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("mar")
        break;
    case 4:
        console.log("apr")
        break;

    default:
        console.log('no mathch above it is default ')
        break;
}
// if we run the code then it will print mar because it matches the value 
//another important point is we shoule never ever neglect the breack if any how it got disturbed then all the code after that break will run and no control will be ther in the code flow 
// if there is number in value then write number and when there is string then write strin nothing to be worried 

// const userEmail = "A@asta.ai"
 
// if (userEmail) {
//     console.log("got the user email")
// }else {
//     console.log("don's have user email") 
// }
//result is got the user email because there is a value in the string  means it is true 

//after making a little change
// const userEmail = ""
 
// if (userEmail) {
//     console.log("got the user email")
// }else {
//     console.log("don's have user email") 
// }
//result is don't have user email because there is nothing iside the string  means as false 

//after making little more change 
const userEmail = []
 
if (userEmail) {
    console.log("got the user email")
}else {
    console.log("don's have user email") 
}
//here the result is got the user email it take as value when we use this array  means it is true 


//these all are called false and truthy value 

// falsy values 
// false, 0, -0, BigInt on, "", null, undefined, NaN   these all are false value and the rest is truthy 

// truthy values
//"0", 'false', " " , [], {}, function(){}, 

//how to check aray look there is a const userEmail = [] so we will check that like this 
if (userEmail.length === 0){
    console.log("Arry is empty ")
}
// if it prints the console.log's value then it is a truthy value because it is true so it runs the console or the code.

//how to check empty object 
const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is true")
}
//it runs means it is truth  and this is how we we check 

// +++++++++++++++++++++++++ Nullish Coalescing Operator (??): null, undefined (this is all about null and undefined ) +++++++++++++++++++++++++++++++++++++

// let val1; 
// val1 = 5 ?? 10

// console.log(val1) //here the value is 5 

// let val1; 
// val1 = null ?? 10

// console.log(val1) // here the value is 10 according to the above the value should be null because it is in the first place but this operator is used when it get null then it checks shafety of the code, like will null will disturb the whole data and assign its value for the shafety of the code 

let val1; 
val1 = undefined  ?? 10

console.log(val1) // here the value is 10 according to the above the value should be undefined because it is in the first place but this operator is used when it get null and object  then it checks shafety of the code, like will null or the undefined  will disturb the whole data and assign its value for the shafety of the code  basically it is an fallback 

// another case 

let val2;
val2 = null ?? 10 ?? 20 

console.log(val2)  // result is here the 10 not 20 because when it gets the proper value it doesn't proceed 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Terniary Operator +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// condition ? true : false                 // this is how we write the Terniary Operator 

const iceTeaPrice = 100
iceTeaPrice  <=  80 ? conosle.log("less than 80") : console.log("more than 80")




