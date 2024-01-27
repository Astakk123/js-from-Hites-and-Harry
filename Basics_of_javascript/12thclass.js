//Numbers and Maths

const score = 400

const balance = new Number(100) //this is used to exclusively declare it as number
console.log(balance);
console.log(score);

console.log(balance.toString().length); 
//toString is used to convert it to string then additional features will be activated and we can use the .length to know the length

console.log(balance.toFixed(2)) //wen we do this tofixed 2 then we get result as the balance with two zero after decimal, 100.00  preveously the balance was oly 100

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));  //it will round up to 3 digit number means 123.8966 will become 124 if the value is 23.8966 it would be 23.9 like this 

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-In"));

// ++++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // result is 4 from -4
console.log(Math.round(4.6)); //result is 5 because the number after decimal is more than 5 but it can be changed by using ceil and floor see how 
console.log(Math.ceil(4.2)); //it should be 4 only but result is 5 
console.log(Math.floor(4.6)); // it should be 5 only but result is 4 
console.log(Math.min(2, 3, 4,)); // result is 2 
console.log(Math.max(2, 3, 4,));  // result is 4 the min and max give the output of the given set of number according to your order as min and max 

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);

// to get the roundof value we use this syntax
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max-min + 1)) +min); // if you want the roundof value minimum 10 then we should write like this