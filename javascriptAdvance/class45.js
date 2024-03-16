// today we are going to learn the class in javascript // this is ES6

// class User {
//     constructor(username, email, password){

//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return  `${this.password}abc`
//     }

//     changedUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

/*
here we are directly crating a user using the User class and it get new instance with the new word and 
this is create different user like the chai and it get all the property as the User get here user is a 
constructor 
*/

// const chai = new User("chai", "chai@chai.com", 123)
// console.log(chai.encryptPassword())
// console.log(chai.changedUsername())

// now let's understand behind the scene 
// if there would have no class then how could have we achieve the same 

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password

}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User.prototype.changedUsername = function () {
    return `${this.username.toUpperCase()}`
}

let tea = new User('tea', 'tea@fb.com', '345')

console.log(tea.encryptPassword())


// ++++++++++++++++++++++++++  Inheritance +++++++++++++++++++++++++++++


// first example is to understand if one class property to another property how to do 

//first class User with some property and method
class Tuser {
    constructor(username) {
        this.username = username
    }
    logme() {
        console.log(`username is ${this.username}`)
    }
}
/*
second class with some property and here we will
 inherit the username property direcly using usuper wokeyword which is for  one class to another class
 */

//here the first one is user but in them some are teacher and some are student so have to create an user with teacher class
//  who will have the property of the user directly so we are using extends here because teacher also an user  
class Teacher extends Tuser {
    constructor(username, email, password) {
        super(username) // this is the thing we achieve username frome the above user because username was already in the User above
        this.email = email
        this.password = password

    }
    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher('chai', 'chai@ww.com', 123)
chai.addCourse()

const me = new Tuser('chaiwala',)
me.logme()
console.log(me)
// me.addCourse()  // result is not a function when we runm, because addCourse() only for the Teacher class not declared in Tuserclass and me is Tuser 

// ++++++++++++++++++++++ Static poperty ++++++++++++++++++++++++++++++++++++++++

//staticprop

// class Muser {
//     constructor(username) {
//         this.username = username
//     }
//     logme() {
//         console.log(`username: ${this.username}`)
//     }

//     createId() {
//         return `123`
//     }
// }

// const Asta = new Muser("MrAsta")
// console.log(Asta.createId()) // here Asta gets the createId() method 

// *** in some case we don't want to give alll Muser the creteId() method but it will present there then just write static 


class Muser {
    constructor(username) {
        this.username = username
    }
    logme() {
        console.log(`username: ${this.username}`)
    }

    static createId() {
        return `123`
    }
}


const Asta = new Muser("MrAsta")
// console.log(Asta.createId())  // now it will not work because of static before the used method and we want it in some case 

// it is same in the case of extends when we extends the same property to another class Ex. 

// Extending Muser to teacher 

class teacher extends Muser {
    constructor(username, email) {
        super(username)
        this.email = email 
    }
}

// creating an teacher with the reather class 

const mrjohn = new teacher('johnkk', 'johnkk@mail.com')
console.log(mrjohn)
console.log(mrjohn.createId())  // createId is not a function  because create id is static and mrjohn is extends of the Muser class 
// teacher class is inherit of Muser 

