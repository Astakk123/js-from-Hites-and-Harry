//++++++++++++++++++++++ Filter map and reduce +++++++++++++++++++++++++++++++++

//+++++++++++++++++++++foreach
//const coding = ["js", "ruby", "java", "python", "cpp"] 

// const values = coding.forEach((item) =>{
// console.log(item);
// return item  
// //console.log(values) // if we do it here then it says can't access 'values' before initialization because it is inside the scope and we are trying to access the value which is a variable key 

// })

//console.log(values) // here it prints undefined it print like this because we access the values and we do it outside the scope and not written the (return item ), and then after writting the return item we did the same but it shows the same undefined 

// the reason of undefined is foreach doesn't return value we tried to write the value mannualy yet it didn't return 


//+++++++++++++++++++++++++++ filter +++++++++++++++++++++++++++++++++++

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const filteredNums = myNums.filter((num) => num > 4)
//  console.log(filteredNums);

 // this gives the perfect result 

//lets make some changes in the syntax, when we use curly bracecs instead of the parenthesis as above then it doesn't return value untill we have written the return in the code  see how ?

//  const filteredNums = myNums.filter( (num) => {
//     num > 4
//  })
//  console.log(filteredNums);

 //here the result is empty array means [] because we haven't written the return as we have used the curly braces 


//  const filteredNums = myNums.filter( (num) => {
//     return num > 4
//  })
 //console.log(filteredNums);

 //here it prints the desired answer as the first one gives but the first one is wrtten in different format the this is different 

 //++++++++++++ (every thing above is done using filter the same thing can be done using for each see how ?)+++++++++++++++++

//  const newNums = []
//  myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
//  })
// console.log(newNums)  //result is [ 5, 6, 7, 8, 9. 10] which is same as we die in the above 
  
 //+++++++++++++++++ practice with little big data ++++++++++++++++++++++++++++
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History') // this is used to match the book of history 

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History" // this is used when we open bolckscope and here two match is being done using and which is && 
})
  //console.log(userBooks);

  //+++++++++++++++++++++++++++++++++++++++++ map +++++++++++++++++++++++++++++++++++++++++++++++++++++

  const myNumbers = [1, 3, 3, 4, 2, 5, 6, 7, 7, 4, 10]

  const newNumber = myNumbers.map( (num) => num + 10 )

//   console.log(newNumber)

  // the curly braces means the block scope opening is same for this 

  //++++++++++++++++++++++++++++++++++ Chaining +++++++++++++++++++++++++++++++++++++++++++++

// the above example myNumber is being used here 
//  const resultNum = myNumbers.map().map() //look at the use of this line how 

const resultNum = myNumbers
                        .map((num) => num * 10)
                        .map((num) => num + 1)
                        .filter((item) => item > 40)
                        .map((item) => item - 2)

//console.log(resultNum)



// +++++++++++++++++++++++++++++++++++ reduce +++++++++++++++++++++++++++++++++++++++++++++++++++++

const yourNums = [1, 2, 3, 4]
// const myTotal = yourNums.reduce(function (acc, currval) {
    // console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)
//here the zero is the initial value given like this 

// console.log(myTotal)


// now let's write the same thing using arrow function lets use the same yourNums array and write that 

const myTotal = yourNums.reduce((acc, currval) => acc + currval, 0)
// console.log(`acc: ${acc} and currval: ${currval}`) this doesn't work here have to see what is wrong with it later on 

// console.log(myTotal)

const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

 console.log(priceToPay);



