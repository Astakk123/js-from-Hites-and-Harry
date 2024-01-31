//++++++++++++++++++++++ functions and parameters ++++++++++++++++++++++++++++

//function is something when we write 10 or 14 line code and package it in one pack suppose
/*
console.log("a")
console.log("s")
console.log("t")
console.log("a")
these all console.log() can be done only using sayMyName() this is a simple funcion call sayMyName and the whole is definition of function
Only sayMyName without parenthesis () is called reference 
*/

function sayMyName(){
    console.log("a")
    console.log("s")
    console.log("t")
    console.log("a")
} 
sayMyName()

// another example for deep understanding 

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// in the above the number1, and number2 after the name of the functio i.e addTwoNumbers is called parameters and the value we put in the function i.e addTwoNumbers(2, 4) are called argument here- 2 and 4 are agrument 

addTwoNumbers()                  // this is how we call the funtion function name and a parenthesis()
//addTwoNumbers() will give NaN if we simply do this because we have not passed any argument to function work we pass the argument
addTwoNumbers(2, 4)


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
addTwoNumbers(3, 6)  // this is another here the value is 9

// const result = addTwoNumbers(3, 6) // this print 9
// console.log("Result: ", result);  //this is used to print the result but it doesn't because return  is another concept we have to write it before printing it see how 


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2 // second formula we can do this instead of the let rusult = number1 + number2 return result
}

const result = addTwoNumbers(3, 6) 
console.log("Result: ", result);

// now the result is perfet which is result: 9  and remember in the function after return result we can't print if we have to then write it above return result 

// the above can also be written simply check one is in comment and another is in active

// the values above taken are one way letus see how many ways there to do the same and what can we do

function loginUserMessage(username){
    return `${username} just logged in`
}
// how to call the function
loginUserMessage("Asta")     // this will not print anything if we run this because we have missed to write print because we have used return it will return if we don't store the result in a variable or print it we will not get it 

console.log(loginUserMessage("Asta")) // result is asta just logged in (now this is the proper way )
console.log(loginUserMessage()) // result is undefined because the argument is not given to avoid this we can use if in the function

// consider a situation  here below you can see in the function in the username a small change has been done and the console is different and the result is different here 



// look at this situation  here the function is same but the console contain the kksahan and it print kksahab but when the console in the above case was vacant username asta was printed and when there was only username in the function and console was vacant then it was undefined

function loginUserMessage(username = "Asta"){
    return `${username} just logged in`
}
console.log(loginUserMessage("KKsahab"))

