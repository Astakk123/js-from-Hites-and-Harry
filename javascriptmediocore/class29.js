// for of loop   (these are array specific loop)


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}
//another ex-

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

//Maps
/*
const map = new Map()
map.set('In', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
*/

//console.log(map);

// for of loop in map

// for (const key of map) {
//     console.log(key)
// }
// Result of the above 
/*
[ 'In', 'India' ]
[ 'USA', 'United States Of America' ]
[ 'Fr', 'France' ]
*/
// you can see here the key and value are mixed here to make it separate we can make a little change in the above code i.e called  destructure of array like 

// for (const [key, value] of map) {
//    console.log(key, ':-', value) 
// }

//now this is the result  you can see how much changes we have achieved
/*
In :- India
USA :- United States Of America
Fr :- France
*/

// let's see how to use forof loop in Object

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//    console.log(key, ':-', value)
// }

//the result is TypeError: myObject is not iterable means in object if we write it like this then it doesn't work in this way

//here again trying to use the loop in object for that we use forin loop
const theObject = {
    js: 'javascript', 
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in theObject) {
  //console.log(`${key} shortcut is for ${theObject[key]}`) 
}
 
//let's take an array and apply the forin loop

const programming = ['js', "ruby", "java", "python", "cpp"]

for (const key in programming) {
 //console.log(key) // this is used only for key which is 0, 1 ,2 or more 
 //console.log(programming[key]) // this gives the proper value
}

//here it gives the position number like 0, 1, 2, 3, 4 to get the value we change the console see above 

// let's use forin loop on map

const map = new Map()
map.set('In', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")

for (const key in map) {
console.log(key);
}

//it doesn't give any out put because it is not iterable there is differnt way to execute the same 


// +++++++++++++++++++ foreach loop ++++++++++++++++++++++++++++++++++++++++

// foreach loop in function 
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val) {
    //console.log(val)
})

// foreach loop in arrow funciton 

coding.forEach((item)=>{
    //console.log(item);
})
// it gives the same value like the above but this is written in little different style which is called as arrow function 

function printMe(item){
   // console.log(item)
}
// coding.forEach(printMe) // this is used if your function is written in different line then just give the reference as we have given here the printMe


coding.forEach((item, index, arr) => {
    //lconsole.log(item, index, arr)
})
// here it will print the item, idex and arr of the above given which is the value of the coding, here coding is the variable and all the name java, ruby and more  are value and these all are in an array 

//declaring Objects in array 
const myCoding =[
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "python"
    },
    {
        languageName: "cpp",
        languageFileName: "cpp"
    }
] 

myCoding.forEach((item) => {
    console.log(item.languageFileName);
})
