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
/*

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3); // splice manupulate the main array
console.log("c ", myArr);
console.log(myn2);

*/

//++++++++++++++++++++++++++++++++++++++++ Array part-2 class-15 +++++++++++++++++++++++++++++++++++++++++++++++++

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros); // here the dc_heroes will be merged as an element in the marvel_heros element the whole will actt like an element only


// console.log(marvel_heros);
// console.log(marvel_heros[3][0]); // this is how we acces the element in a array if that is also an element  of another array 

// marvel_heros.concat(dc_heros); // here after doing concat we prited but fail to give the desired result because the old marvel_heros is being printed so we should change the const keyword

// const allHeros = marvel_heros.concat(dc_heros) 
// console.log(allHeros)
//now we got the desired result menas if we use concat then we get a new array with the modification and all element in the array are in a sequence 

const all_new_heros = [...marvel_heros, ...dc_heros] // this is spread operator using ... we do this 
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // in the place of infinity we write the depth of the the array 
console.log(real_another_array)

console.log(Array.isArray("Asta"));
console.log(Array.from("Asta"))
console.log(Array.from({name: "Asta"})) // interesting has to study

let score1 = 100
let score2 = 10
let score3 = 55

console.log(Array.of(score1, score2, score3));








