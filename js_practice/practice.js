// this is the practice session of my js  this commented one my task 
/*
// Q1: What will be the output of this code?
let x = 5;
let y = "5";
console.log(x == y);     // ?
console.log(x === y);    // ?

// Q2: Declare a variable 'name' and assign your name to it.
// Then print: "Hello, <your name>!"
*/

// first question is done here 

let x = 5;
let y = "5";
console.log(x==y)  // true due to type coercion
console.log(x===y) // false due to strict equality

// here the main difference is in the == checking the value first get congerted and then get compared while 
//in the === checking it first get compared without checkig so it is false 

// question 2 is done here

const name = "Asta";
console.log("Hello Mr." + name + "!")

// Q3: Write a function that takes two numbers and returns their sum.

function sum(num1, num2){
    return num1+num2
}

console.log(sum(3,7))

// Q4: Create an array of your 5 favorite fruits.
// Use a for loop to print each fruit.

let fruits = [ "apple", "banana", "cherry", "date"]
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

// Q5: Write a function that takes a number and returns:
// "Even" if it's even, and "Odd" if it's odd.




function oddEvenDetector(num)
{
    if(num % 2==0){
        return 'even';
    }else{
        return 'odd'
    }
}

console.log(oddEvenDetector(5))






