# javascript and classes

## OOP (Object Oriented Programming)? କଣ ଜାଭାସ୍କ୍ରିପ୍ଟ ଗୋଟିଏ oop 

## Object
- what is object?  
    - Ans :- collection of properties and methods
- example of a method :- toLowerCase  this method is associated with string

# why use OOP ?

## parts of OOP
### Object literal 
- literally an object 


    - Constructor function
        - A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword.

        look at an example:-
        ```javascript 
         function Person(name, age) {
            this.name = name;
            this.age = age;
         }
            const person1 = new Person("John", 30);
            const person2 = new Person("Jane", 25);
            console.log(person1.name); // "John"
            console.log(person2.age); // 25 
         ```
        - In this example, the Person function is a constructor function. It takes two parameters, name and age, and uses them to initialize the properties of the new object. The new keyword is used to create a new instance of the Person object.

            ### When the new keyword is used, the following steps happen: 
        1. A new empty object is created.
        2. The constructor function is called with the new object as the this context.
        3. The constructor function initializes the properties of the new object.
        4. The new object is returned from the constructor function.
         -  In the example above, the Person constructor function initializes the name and age properties of the new object. The new keyword then returns the new object, which is assigned to the person1 and person2 variables.
    Constructor functions are a powerful way to create objects in JavaScript. They allow you to initialize the properties of an object in a single place, and they make it easy to create multiple objects of the same type.

    - Prototypes
    - Classes
    - Instances (new, this)


## 4 pillars
Abstraction
Encapsulation
Inheritance
Polymorphism