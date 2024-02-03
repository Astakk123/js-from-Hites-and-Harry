// +++++++++++++++++++++++++++++ Immediately Invoked Function Expression (IIFE) ++++++++++++++++++++++++++++++++++++++++++++++

// we use iife to avoid pollution of global scope and immediate run 

// function chai(){
//     console.log(`DB CONNECTED`)

// }
// chai()

// How to write iife let's see

(function chai(){
    //this is named iife because we have given it a name called chai 
    console.log(`DB CONNECTED`)
})();

// now the just above is iife but it can be written in arrow function 

// (() => {
    // this is unnamed iife because we haven't given any name 
//     console.log(`DB CONNECTED`)
// })()

//here the arrow functio of iife 
//One of the very very important point is when we write more than one iife then we have to end the function using semicolon i.e ; we can see above 

// here in the arrow functio how to assign a variable and access it see here 

((name) => {
    //This is how we pass parameter name here 
    console.log(`DB CONNECTED Two ${name}`)
})("Asta")




