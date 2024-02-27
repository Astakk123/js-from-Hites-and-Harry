// creating an object literal

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){     // the whole is called method we know the difference between the function and method
        // console.log("Got user details from database");

        // console.log(`Username: ${this.username}`);
         console.log(this); // this print the whole of this object "user" it runs after running the getuserDetails() method 
    }
    
}

// console.log(user)

// console.log(user.getUserDetails())

// console.log(this) // we know a vacant object show here but same thing show a lot more in console because of the variouse thing


//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);   // here it is global so the this print an vacant object if there would have been data it would have shown 

// creating a function to understand the cunstructor and instance 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    // here we can even add the method also you can see this will be available to all the new users when we make 

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
/* if we don't add the "new" which is constructor then we can't get a fresh instance 
then when we pass the value in the above given function or object then this value override 
the last one and it disturb everything we can't ful fill our purpose 

this constructor function everytime help to create a new instance where we get all the functionality 
or property or parametere that had been created 

in second it pack the all argument and functionality and then passes to the new one 

then this get available and we finally get that in the function
this is the basic working machanism 

*/
// console.log(userOne.constructor); // [function: user] it refer the object itself 
// have to read instanceof
console.log(userOne.greeting())
console.log(userTwo);