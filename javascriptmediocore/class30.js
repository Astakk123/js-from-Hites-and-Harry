//++++++++++++++++++++++ Filter map and reduce +++++++++++++++++++++++++++++++++

//+++++++++++++++++++++foreach
//const coding = ["js", "ruby", "java", "python", "cpp"] 

// const values = coding.forEach((item) =>{
// console.log(item);
// return item  
// //console.log(values) // if we do it here then it says can't access 'values' before initialization

// })

//console.log(values) // here it prints undefined 

// foreach don't return value we tried to write the value mannualy yet it didn't return 


//+++++++++++++++++++++++++++ filter +++++++++++++++++++++++++++++++++++

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const filteredNums = myNums.filter((num) => num >4)
 console.log(filteredNums);