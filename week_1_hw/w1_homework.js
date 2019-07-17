// Section 1
// Terms
// Define Control Flow in your own terms. 
// Since a computer cannot think for itself, the programer must set precise rules and directions for the computer program to follow. 

// What is the difference between const and let and var? Please limit your answer to no more than three short sentences
// Const is used to declare variables that will never change.  let is used to declare variables that may or may not change. var was used in older versions of javascript to declare variables, and had the ability to change. 

// Section 2
// Boolean expressions
// ... and variable assignment

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

if (a < b) {
    console.log("1 correct");
}
if (c > d) {
    console.log("2 correct");
}
if ('Name' === 'Name') {
    console.log("3 correct"); 
}
if (a + b === c) {
    console.log("4 correct");
}
if (a * a === d) {
    console.log("5 correct");
}
if (e === 'Kevin') {
    console.log("6 correct");
}
if (48 !== '48') {
    console.log("7 correct");
}

// Section 3
// For loops
// Define a For Loop in your own terms. A for loop is a shortcut of code that programmers use that allows for the program to perform a task repeatedly.
// For loop 1
// Write a for loop that will console.log the numbers 0 to 999.

for (let i=0; i <= 999; i++) {
    console.log(i);
}

// For loop control panel

// The first part of the control panel is: initial condition
// The second part of the control panel is: while condition
// The third part of the control panel is: repeating expression

// For loop 2
// For loop in reverse

for (let i=999; i >= 0; i--) {
    console.log(i);
}

// For loop 3
// Write a for loop that uses concatenation to send a message to the console as well as the current value of i.

for (let i=0; i <= 10; i++) {
    console.log("The value of i is: " + i + " of 10");
}

// For loop 4
// Write a for loop that prints the numbers 1 - 5

for (let i=1; i <= 5; i++) {
    console.log(i);
}

// For loop 5
// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for (let i=0; i <= 10; i++) {
    console.log(i * 9);
}

// For loop 6
// Print out the odd numbers that are within the range of 1 - 100.

// Adjust your code to add a message next to the odd number that says: "is an odd number".

for (let i=1; i <= 100; i+=2) {
    console.log(i + " is an odd number");
}

// For loop 7
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five. Example Output:

// I found a 5. High five! I found a 10. High five!
for (let i=0; i <= 100; i+=2) {
    if (i % 5 === 0) {
        console.log(" I found a " + i + ". High five!");
    } else {
        console.log(" I found a " + i);
    }
}

// Part 5
// Control Flow 1
// Declare a variable flavor and assign it the value to "chocolate".

// Declare a variable numberScoops and assign it the value 3.

// Declare a variable outsideTemperature and assign it the value 75.

// Declare a variable price and assign it the value 3.5.

// Log each variable to the console and hit "Run" in the "Console" // panel to make sure everything is set up correctly. // Example: console.log(flavor); (then hit run)
var flavor = 'chocolate';
var numberScoops = 3;
var outsideTemperature = 75;
var price = 3.5;

console.log(flavor, numberScoops, outsideTemperature, price);

price = 4.4;
price = 5;

if (price <= 3.5 || outsideTemperature > 90) {
    console.log("Buy that ice cream cone!!");
} else if (price < 4.5 && outsideTemperature >= 70 && flavor === 'chocolate' && numberScoops > 1) {
    console.log("Ice cream does sound nice right now.");
} else {
    console.log("No ice cream today.");
}

// Control Flow 2
// The Farm Write code that will print out "mooooo" if the variable animal is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."

var animal = 'cow';
animal = 'sheep';

if (animal === 'cow') {
    console.log("mooooo");
} else {
    console.log("Hey! You're not a cow.");
}


// Driver's Ed Write a variable that will hold a person's age.
// Write code that will print out "Here are the keys", if the age is 16 years or older.

// Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."

var age = 21;
age = 15;
if (age >= 16) {
    console.log("Here are the keys");
} else {
    console.log("Sorry, you're too young.");
}