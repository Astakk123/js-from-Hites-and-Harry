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
}

  */

// now it is time to change the hidden property 

