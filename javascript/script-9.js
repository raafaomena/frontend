// Rafaela Omena de Souza ID 76122 --> 
// ======== ANONYMOUS FUNCTIONS ========

// Anonymous function	
const showGreeting = function () {
	console.log('Hello from anonymous function');
};

showGreeting(); // Hello from anonymous function

// ======== ARITHMETIC ANONYMOUS FUNCTIONS ========
const addTwoNums =  (num1, num2) => num1 + num2;
const subtractTwoNums = (num1, num2) => num1 - num2;
const multiplyTwoNums = (num1, num2) => num1 * num2;
const divideTwoNums = (num1, num2) => num1 / num2;

// Call the functions with sample arguments and log results
let resultAdd = addTwoNums(8,2);
console.log(`Addition result: ${resultAdd}`);

let resultSubtract = subtractTwoNums(8,2);
console.log(`Subtraction result: ${resultSubtract}`);

let resultMultiply = multiplyTwoNums(8,2);
console.log(`Multiplication result: ${resultMultiply}`);

let resultDivide = divideTwoNums(8,2);
console.log(`Division result: ${resultDivide}`);

/* Calculator function that accepts function expression
as an argument */

function doCalculation(num1, num2, operation) {
    return operation(num1, num2);
}

let resultCalcAdd = doCalculation(10, 5, addTwoNums); 
console.log(`Calculator addition result: ${resultCalcAdd}`);// 15
let resultCalcSubtract = doCalculation(10, 5, subtractTwoNums); 
console.log(`Calculator subtraction result: ${resultCalcSubtract}`);// 5
let resultCalcMultiply = doCalculation(10, 5, multiplyTwoNums); 
console.log(`Calculator multiplication result: ${resultCalcMultiply}`);// 50
let resultCalcDivide = doCalculation(10, 5, divideTwoNums); 
console.log(`Calculator division result: ${resultCalcDivide}`);// 2

// ======== ARROW FUNCTIONS ========

// Arrow function
const helloFromArrow = () => {
    console.log('Hello from arrow function');
};

// Call the arrow function using the variable name
helloFromArrow();

// Arrow function without parentheses around single parameter
const greetNoParen = name => {
    return `Hello, ${name}!`;
};

const greetingNoParen = greetNoParen("Mary");
console.log(greetingNoParen); // Hello, Mary!


//Convert these anonymous functions to arrow functions:

// Simple greeting
const sayHelloUser = () => "Hello!";

// Square a number
const squareNum = x =>  x * x;

// Check if string is empty
const isEmptyStr = str => str.length === 0;

console.log(sayHelloUser);
console.log(squareNum);
console.log(isEmptyStr);

//Create an anonymous function that takes three numbers as parameters and outputs their average. Store the output it in a variable called calculateAverage.

const calculateAverage = function (x,y,z){
    return (x + y + z ) / 3;
};

console.log(calculateAverage(4,5,6));

//Create an immediately-invoked anonymous function that calculates and displays the area of a rectangle with width of 10 and height of 5.

// Immediately-invoked anonymous function
(function(){
    console.log("Hello from immediately-invoked anonymous function")
})();

// Immediately invoked arrow functions
(() => {
    console.log("Hello from arrow function");
})();

// With parameters
((name, age) => {
    console.log(`Processing ${name}, age ${age}`);
    return `Processed ${name}`;
})('John', 30);

/*Create these arrow functions that work with multiple parameters:
- Create combineWords that takes two strings and joins them with a space
- Create calculateArea that computes the area of a rectangle (width × height)
- Create calculateVolume that computes the volume of a box (width × height × depth)*/

const calcArea = (width, height) => width + height;

// === CALLBACK FUNCTIONS AS DATA RECEIVERS ===

/* The 'main function accepts a parameter named 'callback' 
But it already **has** the data (userName) for the callback to work with */
function fetchUserAndGreet(callback) {
    let userName = "Alice";
    callback(userName);
}

// Two callback functions that will receive data (name) from the 'main' function
const sayHello = userName => console.log(`Hello: ${userName}`);
const sayGoodbye = userName => console.log(`Goodbye: ${userName}`);

// Calling the 'main' function
fetchUserAndGreet(sayHello);    // Outputs: "Hello, Alice"
fetchUserAndGreet(sayGoodbye);  // Outputs: "Goodbye, Alice"

// === INLINE CALLBACK FUNCTIONS ===

// Higher-order function that accepts a callback as an argument
function showUserGreeting(callback) {
    // Data supplied to callback
    let userName = "Alice";
    callback(userName); 
}

/* Call the main function with the callback function 
written inside the () in anonymous function syntax */
showUserGreeting(userName => {  console.log(`Hello: ${userName}`);});

// Creating an array with objects
const arrUsers = [
    { firstName: "Maria", age: 25, city: "New York" },
    { firstName: "Bob", age: 30, city: "Los Angeles" },
    { firstName: "Charlie", age: 35, city: "Chicago" }
];

/* Create anonymous function expression to use as callback */    
const displayUserAnon = function(user) {
    console.log(`Name: ${user.firstName}, Age: ${user.age}, City: ${user.city}`);
}
/* .forEach() is a built-in array method that accepts 
a callback function as an argument */
arrUsers.forEach(displayUserAnon);

/* Create arrow function expression to use as callback */    
const displayUserArrow = user => console.log(`Name: ${user.firstName}, Age: ${user.age}, City: ${user.city}`);

arrUsers.forEach(displayUserArrow);


/*Given this array of numbers: [1, 2, 3, 4, 5].

Create a main function called transformArray that loops through the array and doubles each number in the loop.*/

const arrNumbers = [1,2,3,4,5];

const transformArray = (arr) => { arr.forEach(num => {
    console.log(num * 2);
});
};

transformArray(arrNumbers);

/* the .forEach() loop on the array of numbers: [10, 20, 30]. Write an inline arrow function inside the parentheses that outputs each number multiplied by 5. Try to write it on a single line.*/

[10, 20, 30].forEach(n => console.log(n * 5));



