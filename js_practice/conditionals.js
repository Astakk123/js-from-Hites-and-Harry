// today we will practice conditionals one by one 



function ageCalculator(age) {
    if (age < 18) {
        console.log("you are under age ")
    } else if (age === 18) {
        console.log("you just became an adult")
    } else {
        console.log("you are an adult")
    }

}

ageCalculator(23)

// Here teh === is different it checks the value and type while the == chcecks only value 

"5" == 5     // true
"5" === 5    // false

// ternary operators

let isLoggedIn = false;
let message = isLoggedIn ? "Welcome!" : "Please login";
console.log(message);

// switch statement 

let color = "white";

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log("color is blue ");
        break;
    default:
        console.log("color is ot red or blue");

}

// excercise part 

//have to print too small 

let num = 2;
// if (num > 5) {
//   console.log("Too small");
// }

// answer  
if (num < 5) {
    console.log("too small")
}

// have to print even if the num is divisible by 2
let number = 3;
// Your code here

if (number % 2 == 0) {
    console.log("even")
} else {
    console.log("odd")
}

let temp = -1
if (temp < 0) {
    console.log("freezing")
} else {
    console.log('not freezing')
}

let score = 120;



// 90 and above: A
// 80-89: B
// 70-79: C
// below 70: F
if (score >= 90) {
    console.log("A")
} else if (score < 90 && score >= 80) {
    console.log("B")
} else if (score < 80 && score >= 70){
    console.log("C")
}else{
    console.log("F")
}
    
 
let time = 13;
if (time < 12) {
  console.log("Morning");
} else if (time < 18) {
  console.log("Afternoon");
} else {
  console.log("Evening");
}

let yourNum = 10;
if(yourNum >= 10 && yourNum<= 20){
    console.log("your number is between 10 and 20")
}else{
    console.log("it is not as you expected")
}

// have to check using if the either one is true then print relax 
let isWeekend = false;
let hasDayOff = true;
if(isWeekend||hasDayOff){
    console.log("relax")
}else{
    console.log("go to work")
}
//fizbuzz printing logic using conditions
let Num = 9;
if(Num %3 ==0 && Num %5 == 0){
    console.log("fizzbuzz")
}else if(Num %3 ==0 ){
    console.log("fizz")
}else if(Num % 5 ==0){
    console.log("buzz")
}else {
    console.log(Num)
}
 
//leap year checking 



let year = 1900;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}
