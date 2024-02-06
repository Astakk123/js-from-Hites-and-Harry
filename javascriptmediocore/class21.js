// +++++++++++++++++++++++++++++++++++ Scope +++++++++++++++++++++++++++++++++++++++

let a = 19
const b = 34
var c = 23



// the above is ok and it works good nothing to worry it give the satisfied result 
// but see here we have tried to use the same in a function menas in a block
 
if(true){
    let a = 23
    const b = 44
    var c = 22
console.log("Inside a", a);
console.log("Inside b", b);
console.log("Inside c", c);
}

console.log(a);
console.log(b);
console.log(c);

//when we do the above inside the block console gives the result of inside value of the concerned key they are not affected by what is out side the block they are different but in the var it is not applicable so we don't use var and var is not a block scope but let and const is block scope and var is a global scope only outside the block is called goblal scope



// another important point if we have not given a same variable inside the block and print the same variable which is present globally inside the block then it will print the same variable globally present but the block variables are not found outside the block even if we print the same key or value outside the block 