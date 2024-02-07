// ++++++++++++++++++++++++++++++++ loop or iteration ++++++++++++++++++++++++++++++++++++++++++++++++

//for loop 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// in the loop the first step is called the variable then condition check 

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element)
    
// }
// result is 1 t0 9 

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5 );
    // console.log("5 is best number")
    // console.log(element)
}

//result is 1 t0 9 but after 4, 5 is best number will print and then 5 6 7 8 9 will print 
 
// now look at this step here we try to insert loop in loop 

for (let i = 0; i < 10; i++) {
   // console.log(`outer loop ${i}`)
    for (let j = 0; j < 10; j++) {
    //    console.log(`inner loop ${j}, outer loop ${i}`); 
    //   console.log(i + '*' + j + '= ' + i*j);
    }
    
    
}

// how to use the for loop in case of an array

let myArry = ["flash", "batman", "superman"]

//console.log(myArry.length); //this is used to know the length of the array

for (let index = 0; index < myArry.length; index++) {
    const element = myArry[index];
    //console.log(element);   
}

//+++++++++++++++++++++++++++++++++++ break and continue ++++++++++++++++++++++++++++++++++++++++++++++++++

// this is how we use the break

for (let index = 1; index <= 20; index++) {
    if ( index ==5){
        console.log(`Detected 5`);
        break
    }
    console.log(`value of index is ${index}`);
    
    
}
// the result of the above will stop after detecting  and printing the 5 because we have used break 

// this is how we use continue 
for (let index = 1; index <= 20; index++) {
    if ( index ==5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of index is ${index}`);
    
    
}
// the result of the above will run the code until it has met the condition of the loop menas upto the 20 it will print the detected 5 but not stop there continue untill it finished because of the continue 