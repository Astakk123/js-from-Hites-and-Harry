
// ++++++++++++++++++++++ getter setter and stack Overflow +++++++++++++++++++++++

// declaring a class

// class User {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password;

//     }
// }

// const Asta = new User("asta@gmail.com", 123)

// console.log(Asta)
// console.log(Asta.password)

/*
some time we want fine grain control i.e if someone want to
know the password i should give him some different answer or not show the password in 
that case we use getter and setter 

another thing suppose we have created a class and there are a lot of id is being generated using this class 
but i want to not give them all the property of the clsss to all the id we use it in that case also

############# See how to use that below

*/

// here in this case we want to show different password by using getter and setter 

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;

    }

    get password() {
        return this._passwod.toUpperCase()
    }

    set password(value) {
        this._passwod = value
    }
}

const Asta = new User("asta@gmail.com", 'abc')

console.log(Asta.password)

// the same thing can be done for email and other also

//+++++++++++++++ how to set getter and setter through property i.e property based +++++++++++++++++++++

// here in that cas we had no class so how can we do the same see below 

function Tser(email, password) {
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this.email = value
        }
    })
    // same for the password

    Object.defineProperty(this, "password",{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this.password = value
        }
    })
}
const man = new Tser("man@man.com", 123)
console.log(man.email)


// ++++++++++++++++++++ doing the same using the object i.e object based +++++++++++++++++++++++++

// let's define a Object

const Mast = {
    _email: 'a@a.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }

}

// creating object using factory function which is Object.create and new is the constructor function 

const tea = Object.create(Mast)
console.log(tea.email)