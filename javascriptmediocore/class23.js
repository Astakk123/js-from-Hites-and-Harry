//++++++++++++++++++++++++++++++++++ THIS and arrow function ++++++++++++++++++++++++++++++++++++

// lets create an object
const user = {
    username: "Asta",
    price: 999, 
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage() // here the result is Asta , welcome to website as expected

// "this" we have used above is used to refer the current context 
// here we use (user.welcomeMessage())  because user is an object and we acces something in an object like the above .notation with the key

// suppose someone came here and assigned the different value in user like the below given  then what will happen?
user.username = "sam"
//let's run the method and check 
// user.welcomeMessage() // here the result is sam , welcome to website result changed because username of the user is changed to sam 
//  console.log(this); // when we do this it gives an empty object because there is nothing in global or outside of that object so the result is empty object but when we tried the same inside the userobject then (this) will print the whole data of the object and later assigned name as seen here
 /*
  { username: 'Asta',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
  }
  sam , welcome to website
  {
    username: 'sam',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
  }
  */

//   lets create a function
/*
function chai(){
    console.log(this);
}
chai()  //calling the function 
*/

// after doing this we got a lot of things when we run it lets make some changes in the above function see below
/*
function chai(){
    let username = "Asta"
    console.log(this);
}
chai()   // here program runs and we get a lot of things but we made a little change here see below 
*/
/*
function chai(){
    let username = "Asta"
    console.log(this.username);
}
chai() // here after calling the functio we got undefiend as the result because the contxt console.log(this.username) dooes not work in the function 
*/
/*
const chai = function () {
    let username = "Asta"
    console.log(this.username)
}
chai() // again the result is undefined the above two function differ in format so we tried in different format but gives the same result just clear that in function it is not applicable i.e this.username will never give the desired result which is possible in an object 
*/

// ++++++++++++++++++++++++++++ arrow function +++++++++++++++++++++++++++++++++++++++++++

// little change in the above function and it will be the arrow function see how below 

const chai =  () => {
    let username = "Asta"
    console.log(this.username)
}

// chai()  // even here the thing this.username will show the undefined and only this will show empty object as we seen above

//how to write arrow function? see how 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4)) //result is same 

// lets learn how to write it different syntax the same arrow function which is called implicit return 

// const addTwo = (num1, num2) => num1 + num2  // we can write it like (num1 + num2) but if we use {num1 + num2} then we are bound to write the return word like the first one 
// console.log(addTwo(3, 4))

// the benifit of use of parenthesis is important when we try to return an obje then it is neccesary see how 


// const addTwo = (num1, num2) => {usrname: "Asta "}

// console.log(addTwo(3, 4))  // here the result is undefined  is undefined 

const addTwo = (num1, num2) => ({usrname: "Asta "})
console.log(addTwo(3, 4)) // here the result is {username: 'Asta ' }

// ex- loops 

const myArray = [3, 3, 4, 3, 2]
myArray.forEach()
// has to be discussed later on when loop will be studied






