// <!-- Rafaela Omena de Souza ID 76122 --> 
//console.log("Hello from external JavaScript file.");

// Declaring variables and then assigning values to them
let userName; // Declare a variable
userName = "Sheila Murphy"; // Assign value to the variable
console.log(userName); // Outputs: Sheila Murphy

let userCountry; // Declare a variable
userCountry = "Ireland"; // Assign value to the variable
console.log(userCountry); // Outputs: Ireland

// Mixing literals and variables
const customerFirstName = "Marie";
const accBalance = 10;
		
// Using template literals
console.log(`Hi ${customerFirstName}. Your balance is €${accBalance}.`); 
// Outputs: Hi Marie. Your balance is €10.

console.log(`Hello ${customerFirstName} from ${accBalance}!`);

// Checking the data type of a variable
let someVar = ""; // declare empty variable 

someVar = "12"; // assign string to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: string 

someVar = 12;  // assign number to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: number 

someVar = "12"; // assign string to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: string - again!

someVar = true; // assign boolean to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: boolean

someVar = null; // assign null to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: object (an error in JavaScript)

someVar = 24; // assign number to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: number - again!

// ======== CONCATENATING STRINGS ========

// Joining strings with template literals
let txtFirstName = "John";
let txtLastName = "Lennon";
let txtFullName = `${txtFirstName} ${txtLastName}`; 
console.log(`Full name: ${txtFullName}`);  // John Lennon

// Joining strings with the + operator
txtFullName = txtFirstName+ " " +txtLastName; 
console.log(`Full name: ${txtFullName}`);  // John Lennon

const firstName = "Nicolas";
const lastName = "Gonzalez";
const color = "blue";

// Uso de Template Literal para la salida
console.log(`Hi! My name is ${firstName} ${lastName} and my favorite color is ${color}.`);

const message = "JavaScript is fun!";

// 1. Output su longitud total (.length)
console.log("Longitud total:", message.length); 

// 2. Output el primer carácter (índice 0)
console.log("Primer carácter:", message[0]); 

// 3. Output el último carácter
// Usamos .length - 1 para obtener siempre el último índice dinámicamente
console.log("Último carácter:", message[message.length - 1]); 

// 4. Output la posición de inicio de la palabra "fun"
// Nota: Para encontrar la POSICIÓN usamos .indexOf(). 
// El uso de [] es para acceder a un carácter si ya conoces el número.
const posicionFun = message.indexOf("fun");
console.log("La palabra 'fun' comienza en el índice:", posicionFun);

// Si quieres verificarlo usando la notación [] como pide el ejercicio:
console.log("Carácter en la posición de inicio de 'fun':", message[14]);

// === Compound assignment operator += with numbers ===
let count = 5;
console.log(count); // 5
count += 3;   // count is now 8
count += 2;   // count is now 10

// Keeping score in a computer game
let playerScore = 100;
playerScore += 50;   // Player hits target
playerScore += 25;   // Player collects coin
playerScore += 75;   // Player completes level
console.log(playerScore);  // 250

// Calculating compound interest
let balance = 1000;
let interest = balance * 0.05;  // 5% interest
balance += interest;
console.log(balance);  // 1050