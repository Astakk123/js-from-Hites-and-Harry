
// scope level and mini hoisting 

//nested scope

function one(){
    const username = "Asta"

    function two(){
        const website = "mywebsite.com"
        console.log(username);
    }
    // console.log(website);
    two()

}
// one()

if (true){
    const username = "Astakk"
    if (username === "Astakk") {
        const website = " youtube"
        // console.log(username + website)
    }

    // console.log(website);

}

// console.log(username);

//++++++++++++++++++++++++++ Interesting concept +++++++++++++++++++++++++++++++++++++++++++++++++

addone(5) // here we can console and print it or see it what happened

function addone(num){
    return num + 1 
}

//the same can be done in this different way

const addTwo = function(num){
    return num + 2 
}
addTwo(6)

// in the above the two are functin but the second one looks diffrent here the addTwo are called express also it can hold array, function and more 

// second point the first function there we can call the function or execute it before the function and it will access the function because of the way we have declared the function support it 

// third point the second one is a function but declared in different format so here if we execute or call the functio before the function written means if we write the function i.e [addtwo(6)] before the function [const addtwo =function(num){return num + 2] you can see above will not execute because it can't access the functio while the in the first one it is opposite and these all are called hoisting, that what is execution content and how to store how to declare  