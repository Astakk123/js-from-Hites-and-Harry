

// ++++++++++++++++ Prototype  class 43 +++++++++++++++++++++++++++

// lets create a function and learn something interesting 

function multiplyBy5(num) {
    return num * 5
}

multiplyBy5.power = 2

// .power is used in the object but here we are using it with the multiplyBy5 which is a function 
// here we conclude that everything is object in javascript at the end 

console.log(multiplyBy5(3))            // result is 15
console.log(multiplyBy5.power)          // here result is two
console.log(multiplyBy5.prototype)  // gives the vacant object {}



// another explanation using another function   

// how (this) is connected to prototype

function createUser(username, score) {
    this.username = username
    this.score = score
}
// How to create a prototype
createUser.prototype.increament = function () {
   return this.score++
   
}
 // here the this is very important othe wise it will not  recognise when to do increament if 
//  more than one is called at a time we are talking about the above score++

createUser.prototype.printMe = function () {
    console.log(`hey I am ${this.score}`)
}

// lets create two user 
// here the new word is very very important other wise it will not work evenafter doing this all 
const chai = new createUser('chai', 23)
const tea = new createUser('specialtea', 25)

//  console.log(chai)

chai.printMe()
chai.increament()


console.log(chai.increament()) // don't know why it is undefined 
//after half an hour i found that we hadn't written return so it was writting undefined now it is solved


// Here we understood the new word clearly 
/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the 
constructor function. This means that it has access to properties and methods defined on the
 constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and
 this is bound to the newly created object. If no explicit return value is specified from the constructor, 
 JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// ++++++++++++++++ now  understanding Prototype +++++++++++++++++++++++++




