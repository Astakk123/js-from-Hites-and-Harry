//+++++++++++++++++ call and this in detail +++++++++++++++++++++++

// understanding with example 

function setUserName(username) {
    //DB calls and more thing happen here 
    this.username = username
}

// function createUser(username, email, password ){
//     setUserName(username)
   
//     this.email = email
//     this.password = password

// }

// const chai = new createUser('chai', 'chai@chai.com', 123 )

// console.log(chai) // Here we get the  email & password  only but we have given all t he value but due to the absence of the 
// one line code we are missing it  we have done the setUserName(username) which is a function and this is nto work here 
// whis is this.username = username but we have outsourced it which is in the function setUserName and istead of doing the whole proocess
// we have called the function setUserNameand passes the username i.e YOu can see i.e  setUserName(username) 
// this was not being called  only referencee has got. to call this as we have written in the above then wew have to write the call explicitly 

function createUser(username, email, password ){
    setUserName.call(this, username) // when we call function we can pass this for current context at first postition 
   // the this we have used in the functin is gives the username of the createUser functions this not the setUserName username 
   // you can see the username as parameter is present in both the function in createUser and in setUserName here inside the function call this means current username
    this.email = email
    this.password = password

}

const chai = new createUser('chai', 'chai@chai.com', 123 )

console.log(chai)