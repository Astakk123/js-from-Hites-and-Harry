//comparison of data

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

/*  this is the result of the above 
true
true
false
false
true
*/ 

console.log("2" > 1);  //true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true

console.log(undefined == 0); //false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

console.log("2" == 2); //true because the string convert to number in double equality 
console.log("2" === 2); // false because one is strong and one is number so how they can be same

