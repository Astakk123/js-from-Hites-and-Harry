

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

// understanding prototype purely using an Example 

let myName = "hitesh"

console.log(myName.length);  // here the result is 6
/* 
But here we have a different task i.e "Asta        ", and we have to calculate
 the length of this using a method which will cut the space and show the
  original length which is true length. 
*/
// we will achieve that by creating a method name as trueLength, let's start 

let Name = "Asta      "
console.log(Name.length)  // here the result is right but it include the space also and length is 10 but it should be 4 

// we can achieve the result with the long process 
console.log(Name.trim().length)   // here the result is 4 but we have not used oue own customed method which is trueLength 
// we should create a method because we have done the above using the variable so if there are alot then it will take time 

// ++++++++++++++++ look at the end this problem of trueLength method has been done +++++++++++++++++++++

//  wath this example clearly

let myHeros = ["thor", "spiderman"]

//creating an object 
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    // defining a method
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);

    }
}

// inserting a method in the object direcly can be done using the name of the object but we are taking the unversal object 
Object.prototype.Asta = function(){
    console.log(`power of Asta`)
}

// now using the method

heroPower.Asta()  // we used the method with an object 
myHeros.Asta()  // we used the method with an array


// Point to remember while setting up methods in prototype 

// 1) when we give the prototype mehtod to the object it is accessible or useful in all like string and array and function 
// 1) When we give the prototy method to the array, string, or function then it will not be available for other ex.
// ex. when we give to array works only for all the array and not for function and strings 

// this is a method given to all the array menas all the array will get the method .Hey()
Array.prototype.Hey = function(){
    console.log(` I am hey `)
}

myHeros.Hey()  // result is I am hey. becuase here myHeros is an Array diclared here 
// heroPower.Hey() // result is TypeError: heroPower.Hey is not a function. becuase it is not available for the object here heroPower is an object

// how propery i.e method transfer look at the diagram of prototype there parent can transfer propety but siblings never share 


// ++++++++++++++++++++++++++++++ Inheritance ++++++++++++++++++++++++++++++

// ex. 
const Teacher = {
    makeVideo: true
}
const TeachingAssistant = {
    isAvailable: false 
}

const TASupport = {
    makeAssignment: 'js assignment', 
    fulltime: true, 
    __proto__: TeachingAssistant
}

// Here the TAsupport gets the ability of teachingAssistant means TASupport gets the property of TeachingAssistant

// another way is given here with example 

const User = {
    name: "chai",
    mail: "chai@chai.com"
}

Teacher__proto__ = User //here Teacher will have all the propery of the User this is declared in different way
// the above is old style of writting prototype which is done in the first example of inheritance and second 

// this is the latest way using a method we will do the same as we did in the second example i.e Teacher.__proto__ = User 

//Modern syntax 
Object.setPrototypeOf(User, Teacher) // here teacher gets the property of the User 

// solveing the first problem with trueLength method 

let userName = "Astakk" //this is just a string stored in a variable userName

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`)
}

userName.trueLength()
Name.trueLength()   // result is 4  first problem solved by the requirement making a new method trueLength

/*
 this.trim().length is used because this here tells the context means when we use the method trueLength() 
 then we use it with some of the property like the above userName or Name i.e Name.trueLength() here it will
 work for the Name variable the do the function with the vallue of the name variable and same for all. but if we 
 add the hard core value in the this means Name.trim().length then it is not good we have to write for all the varible 
 time to time 
 */
