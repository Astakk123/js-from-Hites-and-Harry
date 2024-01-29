// about date an time 

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// let myCreatedDate = new Date( 2023, 0, 23,); //we can put a fix date here 
// let myCreatedDate = new Date( 2023, 0, 23, 5, 2); //we can put a fix date here 
let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime());  //getTime provide the current time in milli second
console.log(Date.now()/1000); //this is the way to convert milli second to second but we get decimal number 
console.log(Math.floor(Date.now()/1000)); //this is the way to vonvert milli second to second without decimal we can use roundof in floor

let newDate = new Date()

console.log(newDate)
console.log(newDate.getMonth());
console.log(newDate.getDay());

// using string interpollation people write the time and date
// (`${toLocaleString()} and the time is `)

// the below given is the way we can customize the date and time 

newDate.toLocaleDateString('default',{
    weekday: "long", 

})