//+++++++++++++++++++++++++++++ Object part- 3 Object de-structure and Json Api into +++++++++++++++++++++++++

//de-structuring  //used sto easy to access the object not compulsory but people use it 

const course = {
    coursene: "Ennglish learn", 
    price: 999,
    courseInstructor: "Asta"
}

// console.log(course)
console.log(course.courseInstructor) // this is a lengthy process we can make this short this is called de-structure

const {courseInstructor} = course   //after doing this wecan do the above course.courseInstructor as courseInstructor only see
console.log(courseInstructor)       //found the same answer as course.courseInstructor did with the help of courseInstructor after doing the destructure  cost {courseInstructor} = course

// we can make changes in the courseInstructor and get the same answer by doing this given below

const {courseInstructor: instructor} = course
console.log(instructor)             // We get the same answer here also as we got after printing courseInstructor


// Same thing happen in the react also that is there is bydefault a props so to stop this repeatation they use a curly braces and destructure it and write the only one 

// What is APIs?

//this is how a json is look like 
{
    "name": "Asta",
    "coursename": "English course",
    "price": "free"


}
//the above looks like Object but remember there is no name where in object always a name so it is Json they may seen like Array
[
    {}, 
    {}, 
    {}, 
]




