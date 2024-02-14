//discussing Data Types after completing the variables.

//history = there is a lot of difference in the javascript of then and now. At earlier there were no classes, modules, arrow function, but now that are available. So in the past a lot of things had been written in the old style or standard so the commitee decided to manage it by declaring standard so tha these can be managed.

"use strict";  // treat all Js code as newer veersin.  when we write this line.


//alert(2+3) //we are using nodejs not browser so this alert doesn't work. it shows only in browser .


/*
semicolon and spaces where to use is important and in the world of coding readability is important just using line by line 
Ex- console.log(22+3) console.log(Asta) this code will not run 
   console.log(22+3); console.log(Asta) this will run
   but we should write it in different line like 
    console.log(22+3); 
    console.log(Asta);
    code readability should be high
*/
console.log("asta"); console.log(2+3); //it works but we should write it in two line. 

//insight or information = ecma is the original documentation for the coding standard and procedure, and the mdn reference also important



let name = "Asta"
let age = 18
let isLoggedIn = false

// Now : Types of Data  actually two primitive and object

//These are primitive data types

//number => 22 to the power 53 there is a rage upto that we use number otherwise we use bigint
//bigint
//string => "" written in double coatation mark specially characters
//boolean => true/false
//null => standalone value (when we try to know the data type of null then we get the object type in print it is little confusing)
//undefined => we get confused between null and undefined but the undefined is clear. i.e when we declare the variable but not its value then it is undefined and the null is standalone value we assign the value but it is null this is how null is different from the undefined.
//symbol => unique (use it for uniqueness)


// Object 

console.log(typeof "Asta")      //string
console.log(typeof age)     //number
console.log(typeof null)        //data type object 
console.log(typeof undefined) // data type undefined 
console.log(typeof "name")    //string

/* these are the results when i tried to investigate the data types of the different value and unique name like age, name
Node.js v20.11.0
@Astakk123 ➜ /workspaces/js-from-Hites-and-Harry (main) $ node Basics_of_javascript/third_variables.js
asta
5
string
@Astakk123 ➜ /workspaces/js-from-Hites-and-Harry (main) $ node Basics_of_javascript/third_variables.js
asta
5
string
number
@Astakk123 ➜ /workspaces/js-from-Hites-and-Harry (main) $ node Basics_of_javascript/third_variables.js
asta
5
string
number
number
@Astakk123 ➜ /workspaces/js-from-Hites-and-Harry (main) $ node Basics_of_javascript/third_variables.js
asta
5
string
number
object
@Astakk123 ➜ /workspaces/js-from-Hites-and-Harry (main) $ node Basics_of_javascript/third_variables.js
asta
5
string
number
object
undefined
@Astakk123 ➜ /workspaces/js-from-Hites-and-Harry (main) $ node Basics_of_javascript/third_variables.js
asta
5
string
number
object
undefined
string
@Astakk123 ➜ /workspaces/js-from-Hites-and-Harry (main) $ 

 Second class completed


*/


