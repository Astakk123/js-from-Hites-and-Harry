//+++++++++++++++++++++ Function with object and Array, Functions part - 2 +++++++++++++++++++++++++++++++

function calculateCartPrice(num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500))  // here i have passed three argument but it prints only one reason is we have given the single parameter this is a problem


// Here we have tried the rest operator and the result changes. and in the  ...num1 the dot dot dot is called rest operator

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500)) // the result is an array of all the argument because of the chnges in the function definition

// this is another situation with the same function 
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500)) // the result will change for the same console because of the changes in teh parameters of the same function i.e val1, val2 is been added with the ...num1

// creating object and using in function 

const user = {
    username: "Asta", 
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) // in the object and the console the spelling is important and the same can be done just put the user data like 
handleObject({
    username: "Asta",
     Price: 199
    })

// Creating Array and using in function 

const myNewArray = [200, 400, 300]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); 
console.log(returnSecondValue([200, 400, 300])); //this is the unlernative way to do the same as we did in the just above console



