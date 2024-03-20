
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

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))  // here chai is object and name is prop so look the syntax 
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

Object.defineProperty(chai, "name", {
  writable: false, 
  enumerable: false,
})
 
//now when we sconsole the hidden proporty of the object chai then we get some different answer which is different when we hadn't done the define property of the chai object 

const secDescriptor = Object.getOwnPropertyDescriptor(chai, "name")

console.log(secDescriptor)



