// while loop
 
let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`)
    index = index + 2
}
// result is as expected 

// while loop for array

let myArray = ["flash", "batman", "superman"]

let arr = 0 
while (arr < myArray.length){
    console.log(`value is ${myArray[arr]}`)
    arr = arr + 1 
}


// do while  "this is little interesting"


// points on do while (1) it run the code and print before checking the condition 
                    //(2) the while is check the condition first and then only run 
                    //Ex- if we do the above score 11 which is out of condition means score is not less than 10 so the codition false yet it will run because it check the codition later and and rusult will be score is 11 then stop but in the case of while it will not run

    
let score = 11
do {
    console.log(`score is ${score}`)
    score++
} while (score < 10);    // out put is  score is 11              