// all about strings   ===================================================== class 11 ==========
  
const name = "Asta"
const repoCount = 33

//console.log(name + repoCount + " value")  this is little outdated so people don't use this syntax 

// we use backticks and we write this way this syntax is more readable and usefull called string interpolletion it make placehoder
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Astakk") //another way to declare string

console.log(gameName)

console.log(gameName[0]) // giving keyvalue pair we can see the result is "A"
console.log(gameName.__proto__);
console.log(gameName.length) 
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf("t"));

const newString = gameName.substring(1, 4) // -ve values are not obeyed
console.log(newString);

const anotherString = gameName.slice(-5, 4) // we can use -ve and +ve value in slice
console.log(anotherString)

const newStringOne = "  Asta  "
console.log(newStringOne)
console.log(newStringOne.trim()) //this is how we trim and there are left trim right trim

const url = "https://Asta.com/howtobe%23coder" //this is an url but i want to remove the %23 form this and want to replace it with dash then we will do the following
console.log(url.replace("%23", "-"));
console.log(url.includes("Asta"))
// split can be done based on space and dash and . these are called separator and done using .split 