// Array

const myArr = [1, 2, 3, 4, 5] // the data inside the bracket is called element and we can put any kind like boolean or string or number
const myHeros = ["shaktiman", "nagarjun"]

const myArr2 = new Array(1, 2, 3, 3, 4)  // this is another way to declare teh array

//console.log(myArr2);
//console.log(myArr[0]); //find out the value using index in the bracket

// Array methods

myArr.push(6);  // this method simply push the 6 into the array of the MyArr and the value will be [1, 2, 3, 4, 5, 6]
// console.log(myArr)

myArr.pop() // it is used just to remove the last element of the Array we don't have to put any value

// myArr.unshift(9);
 // it insert the given number at the start of the array
// myArr.shift()  // used for removal of the element fromt the start without giving any value 
// console.log(myArr);

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(1))

const newArr = myArr.join() //.join has bound and converted it to string but the value is same

// console.log(myArr);
// console.log(newArr);

// slice & splice

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3); // splice manupulate the main array
console.log("c ", myArr);
console.log(myn2);

//++++++++++++++++++++++++++++++++++++++++ Array part-2 class-15 +++++++++++++++++++++++++++++++++++++++++++++++++

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(marvel_heros)
console.log("marvel_heros");








