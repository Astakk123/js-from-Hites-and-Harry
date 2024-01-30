//++++++++++++++++++++++ Object Part -2 +++++++++++++++++++++++++++++++++++++++

// const tinderUser = new Object() //when we print this we get an empty object i.e {}
const tinderUser = {}        // when we print this we get an empty object i.e {} just like the above the different in them is the first one is single ton object and second one is non-singleton object literal 

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser ={
    email: "some@gmail.com", 
    fullname: {
        userfullname: {
            firstname: "Asta",
            lastname: "kk"
        }
    }
  
}

//this is how we access the above object data
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)
console.log(regularUser.fullname.userfullname.lastname)

//merging of objects like Array

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign({}, obj1, obj2, obj4) //Object.assign is used to asign the value in the the way shown here like the curly bracket is target and other are sources and they become the value of the obj3 
// sometime we do the same just using the spread i.e ...key, ...key2 we discussed in array see the below line how to use this 

const obj3 = {...obj1, ...obj2, ...obj4} // this is thelatest and best way to do the same called spread
console.log(obj3)

//ଯେତେବେଳେ ଡାଟାବେସ ରୁ ଭ୍ଯାଲୁ ଆସେ ଅବଜେକ୍ଟ array ରେ ଆସିଥାଏ ଯେମିତି ତଳେ ଦିଆ ଯାଇଛି 
const users = [
    {
        id: 1,
        email: "A@gmail.com"

    },
    {
        id: 2,
        email: "B@gmail.com"

    },
    {
        id: 4,
        email: "n@gmail.com"

    },
]
// then how to acces the above 
users[1].email // when we wiil log it we will get the first objects email

console.log(tinderUser)

console.log(Object.keys(tinderUser)) //tinderUse is the Objects and keys are being accessed by this syntax we get keys of the tinderUsers Object using this.  //here the important* thing to remember is we get the keys in a array like [ 'id', 'name', 'isLoggedIn' ] the whole is an array in return

console.log(Object.values(tinderUser))  // we get the result the values of the objects tinderUser in return as the array
console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ] this is the result arrays in an array as a return

console.log(tinderUser.hasOwnProperty('isLoggedIn'))  // this is used to ask whether the given is there or not it is used to ask we get the answer in boolean value here it is true because isLoggedIn is present in tinderUser Object
console.log(tinderUser.hasOwnProperty("sex")) // here the result will come as false because there is no data exist in the tinderUser Object having sex 
