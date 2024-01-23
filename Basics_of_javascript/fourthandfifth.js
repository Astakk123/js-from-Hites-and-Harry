// This clss is all about the data type conversion. Why it is so confusing ?

/*
let score = 31;

console.log(typeof score);
typeof is number 
*/

// suppose the above value is like this 
// let score = "31"
// console.log(typeof score) //here type of is string


// But if it is necessary to do the operation in number then we can convert the string to number 
let score = "31abc"

let valueInNumber = Number(score)               // now it will change the score to number earlier it was as string
console.log(typeof valueInNumber)

// But when the 33 is given as "33abc"  then also it will change to the number to know what its value we should check the value 

console.log(typeof valueInNumber)  // after conversion of the "31abc" to number the type of come as number

console.log(valueInNumber)        //When we print its value then it doesnot give any number it says (NaN) not a number mens mof number and text because it was "31abc" //NaN is also a special type


//    score   value     typeof
    // "33" => 33       Number (When we convert the "33") other wise its value is same but it will come as string because of the double qouotation 
    //"33abc"=>NaN      Number (when we conver the "33abc") it changes to value NaN and typeof is Number
    //null  => 0        Number
    //"null"=>NaN       Number
    //true  =>1         Number
    //false=>0          Number
    //undefined=>Nan    Number
    //"Asta"=>NaN       Number

let isLoggedIn = "Asta"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn) 

// isloggedIn       printvalu       typeof
// 1                true            boolean
//0                 false           boolean
// "" vacantstring  false           boolean
//"Asta"            true            boolean

let someNumber = 33
let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber)
console.log(typeof stringSomeNumber)


//******************************* Operations ***************************/ fifth class

let value = 3 
let negValue = -value
console.log(negValue)
  
// some basics operators and their operation shoud be studied by self

/*

console.log(2+3)
console.log(2-3)
console.log(2*3)
console.log(2**3)
console.log(2/3)
console.log(2%3)

*/
let str1 = "Asta"
let str2 = " karkaria"  // when  title was like "karkaria" result was Astakarkaria and when " karkaria" result Asta karkaria
let str3 = str1 + str2 
console.log(str3)

// In operations upto this it was easy and simple let's see some difficulties

console.log("1" + 1); //result is 11 when i print it 
console.log(1 + "1");  //result is 11 when i print it 
console.log("1" + "1");  //result is 11 when i print it, it is ok because thse two are now acting as string
console.log("1" + 1 + 1); //the result is 111 because the string is first and when string is first the whole is string 
console.log(1 + 1 + "1"); //the result is 21 because the first one and 2nd one is number so added up and then string so merged
console.log( 1 + 2 * 2 % 3); // this is the messy way we should avoid it and instead write in parenthesis to define properly

console.log(true) // it gives true as result
console.log(+true) // it gives 1 as result
// console.log(true+) // doesn't work, it is error 
console.log(+"");  // it prints 0 
console.log(""); // It prints nothing menas vacant 




let num1, num2, num3
num1 = num2 = num3 = 2+2 // here the meaning value of num1 num2 and num3 are 4 
console.log(num1 + num2 ) // its value is 8 

let gameCounter = 100 
gameCounter++;
// sometime
++gameCounter
console.log(gameCounter) // prints 101 the above ++gameCounter and gameCounter++ gives the same value but to know self study

//self study  subject=  have to study on prefix and postfix  increament 








