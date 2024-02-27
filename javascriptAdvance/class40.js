//reading promise

/*
Discussing Promise:-

The Promise object represents the eventual completion 
(or failure) of an asynchronous operation and its resulting value.

 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */

//  How to create a promise 

const promiseOne = new Promise(function (resolve, reject) {
    // here we do the task that is done in Promise  these are 
    // (i) Do an async task 
    // DB calls, cryptography, nework
    // let's do here something known as setTimeout
    setTimeout(function () {
        console.log('Async task is complete ')
        resolve()
    }, 1000)

})

// consuming promise

promiseOne.then(function () {
    console.log('promise consumed')
})

/*
we exucuted the above code i.e 
const promiseOne = new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log('Async task is complete ')
    }, 1000)

})

promiseOne.then(function(){
    console.log('promise consumed')
})

and the result is Asynt task is complete bcause we had written a console 
in the promise creation and we completed we didn't get the promise consumed printed
bcause the consumed promise has not connected reason we haven't mention the resolve 
in the promise creation which is important then we did a little change in code i.e 

const promiseOne = new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log('Async task is complete ')
        resolve() //this is added here and the consumed part also worked which was absent in the abve example
    }, 1000)

})

promiseOne.then(function(){
    console.log('promise consumed')
})

Now the result is two one is "Async task is complete" and 
two is "promise consumed" two console worked because of the 
simple resolve() method added to the creation part because this connect to the .then
 
after writting the resolve method in promise creation it connects to the 
consume part which is first createdpromise.then() then the resolve get activated 
and the reject is still inactive
*/


// look at this how do we writhe it in the different way 

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2')
        resolve()
    }, 1000)
}).then(function () { // this is consuming parat of promise
    console.log('Asyc 2 resolved')
})

/* Here we didn't store the first created promise in a variable
 and completed this we directly used the .then and wrote it in 
 short just after the block of the promise created 
*/

// let's see another way 

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "chai@example.com" })

        // Here in resolve() method directly parameter has been passed 

    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user)
})

/*
 here we directly got the value which is {username: 'chai, email: 'chai@example.com'}
 after exucuting the code. we can expect this here we used just user and printed 
 the user and got the value given value
 */


// something different here 

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: "Asta", password: "1234" })
//         } else {
//             reject('Error: Something went wrong')
//         }

//     }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user) //we know what we get when we do this console 
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function (err) {  // we finally managed the error so it print "Error: something went wrong ""
//     console.log(err)
// })

/*
 here in the above code we have given error true so it does't 
 full fill the condition so it print the reject i.e Error: something went wrong
 */

/*
when we made a little change means when we did the error false and ran the same code 
i.e 
const promiseFour = new Promise(function (resolve, reject) {
   setTimeout(function () {
       let error = false
       if (!error) {
           resolve({ username: "Asta", password: "1234" })
       }else{
           reject('Error: Something went wrong')
       }

   }, 1000)
})

promiseFour.then((user) => {
 console.log(user) //we know what we get when we do this console 
 return user.username
}).then((username) => {
console.log(username)
}).catch(function(err){  // we finally managed the error so it print "Error: something went wrong ""
   console.log(err)
})

It fulfill the codition and run the resolve which is username: "Asta", password: "1234"
and the username only "Asta"
*/

// here we have added the finally() method
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Asta", password: "1234" })
        } else {
            reject('Error: Something went wrong')
        }

    }, 1000)
})

promiseFour.then((user) => {
    console.log(user) //we know what we get when we do this console 
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function (err) {  // we finally managed the error so it print "Error: something went wrong ""
    console.log(err)
}).finally(() => console.log('Promise is either resolved or rejected')) // this line always exucute


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'javascript', password: '1211'})
        }else{
            reject('error; Js went wrong')
        }
    }, 1000)
});

//  consuming using asynawait

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response)
// }
// consumePromiseFive()

/*
it works if the condition fulfill if it does as we can see this particular case
it should print reject because the condition in the set timeout is false so it 
should print the else case which is reject() but it doesn'e handle it well to do
 this we should write other try cath code 


*/ 

// trycath using in the asyncwait which can be used instead of the .then() and .catch()

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()


// practical use 

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// Here in the above we used asynawait 


// now .then and .catch

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);    // this is used to know the whole data that has been accessed from the API
    console.log(data.login); // this is just to get the login
    console.log(data.followers) // this is to get the followers

})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
console.log('asta')





