
// indepth discussion on object How it works 

// Object.getOwnPropertyDescriptor(Math) 
// this method used to know something hidden of the passed value here we would know about the Math 

// console.log(Math.PI); result is always same but why 
//can i change it or not and why this object method only to know this we should do the above see line number 9

const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descripter)
/*
 this is the result when we console the above
 {
   value: 3.141592653589793,
   writable: false,
   enumerable: false,
   configurable: false
 }
 */

//   remember this is applicable only for property of the object not the object 

// creating an object to understand it fully

// const chai = {
//     name: 'ginger chai',
//     price: 250,
//     isAvailable: true,
// }

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))  // here chai is object and name is prop so look the syntax 
/*
  the  above console result is

  {
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true

  here we tried to know the hidden truth and writable and enumerable and configuratble is true means we can do this the same thing was false in the pi of math
}

  */

//  +++++++++++++++++++++++ can we declare some property so that an user can't change it ever just like math.pi using the false for some property

// now it is time to change the hidden property 
// we change that hidden property of chai as we see there are true for writable and enumerable and configuratble to false using define property

// Object.defineProperty(chai, "name", {
//   writable: false, 
//   enumerable: false,
// })
 
//now when we sconsole the hidden proporty of the object chai then we get some different answer which is different when we hadn't done the define property of the chai object 

// const secDescriptor = Object.getOwnPropertyDescriptor(chai, "name")

// console.log(secDescriptor)

/*
this is how the console.log(secDescriptor) gives the result 
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true

  now you can see the change
}
*/

// let's try to use loop on this object 

// for (let [key, value] of chai) {
//   console.log(`${key} : ${value}`)
// }

// chai is not  iterable  is error found when we run this file  to do this we should use it as below 

// for (const [key, value] of Object.entries(chai)) {
//   console.log(`${key} : ${value}`)
// }
/*
result after using loop on this object 

// when we don't change the property of the name which is hidden then the result is 

name : ginger chai
price : 250
isAvailable : true

***** Because we have used loop and and changed the hidden property of the name object which is enumerable then the result is like this 

 price : 250
isAvailable : true

*** the difference is because here the property of the name has changed and not allowed to loop 
*/

// little extra knowledge while accessing the key and value of any object entries using loop 

const chai = {
      name: 'ginger chai',
      price: 250,
      isAvailable: true,

      orderChai : function(){
        console.log(`${this.name} will take time `)
      }

      
  }
  chai.orderChai()
  

  // for (const [key, value] of Object.entries(chai)) {
  //   console.log(`${key} : ${value}`)
  // }
/*

this is result But we don't want the function so, we should change little bit  see how simply putting an if condition

}
name : ginger chai
price : 250
isAvailable : true
orderChai : function(){
        console.log(`${this.name} will take time `)
      }

*/

for (const [key, value] of Object.entries(chai)) {
  if(typeof value !== 'function')
  console.log(`${key} : ${value}`)
}

/* 
now we got the desired  answer just using the if condition 

name : ginger chai
price : 250
isAvailable : true

here the function is not presetnt that is what we want 
*/
