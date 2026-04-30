// ============================================
// VARIABLES & DATA TYPES
// ============================================

let name = "Wachira";
let age = 19;
const birthYear = 2006;

// typeof operator
console.log(typeof name);    
console.log(typeof age);     
console.log(typeof true);    

// let vs const
let score = 100;
score = 150;
console.log("Score:", score);

const PI = 3.14159;
console.log("PI:", PI);

// ============================================
// VARIABLE PRACTICE
// ============================================

let myName = "Emmanuel Wachira";
console.log("My name is:", myName);

let myAge = 19;
console.log("My age is:", myAge);

let isStudent = true;
console.log("Am I a student?:", isStudent);

let favoriteColors = ["blue", "green", "purple"];
console.log("My favorite colors are:", favoriteColors);

let todayDate = new Date();
console.log("Today's date is:", todayDate);

// ============================================
// NUMBER OPERATIONS
// ============================================

console.log("\n--- NUMBER OPERATIONS ---");

let a = 10;
let b = 3;

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

// Increment/Decrement
let count = 0;
console.log("Initial count:", count);

count++;
console.log("After count++:", count);

count--;
console.log("After count--:", count);

// ============================================
// STRING OPERATIONS
// ============================================

console.log("\n--- STRING OPERATIONS ---");

let firstName = "Emmanuel";
let lastName = "Wachira";

let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log(greeting);
console.log(message);

console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First character:", firstName.charAt(0));
console.log('Contains "Emmanuel"?', fullName.includes("Emmanuel"));

// ============================================
// COMPARISON & LOGICAL OPERATORS
// ============================================

console.log("\n--- COMPARISON OPERATORS ---");

console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);
console.log("5 === 5:", 5 === 5);
console.log('5 == "5":', 5 == "5");
console.log("5 !== 3:", 5 !== 3);

console.log("\n--- LOGICAL OPERATORS ---");

console.log("true && true:", true && true);
console.log("true && false:", true && false);
console.log("true || false:", true || false);
console.log("false || false:", false || false);
console.log("!true:", !true);

// ============================================
// AGE CALCULATION
// ============================================

console.log("\n--- AGE CALCULATION ---");

let myActualAge = 19;
let ageInDays = myActualAge * 365;
let ageInHours = ageInDays * 24;

let currentYear = new Date().getFullYear();
let yearTurn100 = currentYear + (100 - myActualAge);

console.log(`My age: ${myActualAge} years`);
console.log(`Age in days: ${ageInDays}`);
console.log(`Age in hours: ${ageInHours}`);
console.log(`Year I turn 100: ${yearTurn100}`);

// ============================================
// FUNCTIONS
// ============================================

console.log("\n--- FUNCTIONS ---");

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow functions
const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
};

// Testing
console.log(greet("Emmanuel"));
console.log("add:", add(5, 3));
console.log("multiply:", multiply(4, 7));
console.log("divide:", divide(10, 2));
console.log("divide by zero:", divide(10, 0));

// ============================================
// FUNCTION EXERCISES
// ============================================

// Rectangle area
function calculateArea(width, height) {
    return width * height;
}

// Temperature converter
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Even check
function isEven(number) {
    return number % 2 === 0;
}

// Initials
function getInitials(fullName) {
    let parts = fullName.split(" ");
    return (parts[0][0] + parts[1][0]).toUpperCase();
}

// Reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Test functions
console.log("Area:", calculateArea(5, 3));
console.log("25°C:", celsiusToFahrenheit(25));
console.log("Is 10 even?", isEven(10));
console.log("Initials:", getInitials("Emmanuel Wachira"));
console.log("Reverse:", reverseString("hello"));

// ============================================
// DEFAULT PARAMETERS
// ============================================

function greetWithDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetWithDefault());
console.log(greetWithDefault("Alice"));
console.log(greetWithDefault("Emmanuel", "Hi"));

// Tip calculator
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log("Tip:", calculateTip(50));
console.log("Tip:", calculateTip(75.5, 20));

// ============================================
// CONTROL FLOW
// ============================================

// Grade function
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

console.log(getGrade(95));
console.log(getGrade(45));

// Day function
function getDayName(day) {
    switch(day) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid";
    }
}

console.log(getDayName(3));

// ============================================
// LOOPS
// ============================================

console.log("\n--- FOR LOOP ---");
for (let i = 0; i < 5; i++) console.log(i);

console.log("\n--- WHILE LOOP ---");
let num = 0;
while (num < 5) {
    console.log(num);
    num++;
}

console.log("\n--- FOR...OF LOOP ---");
const colors = ["red", "green", "blue"];
for (const color of colors) console.log(color);

// ============================================
// MINI PROGRAMS
// ============================================

// Even numbers
console.log("\n--- Even numbers 1-50 ---");
for (let i = 2; i <= 50; i += 2) console.log(i);

// FizzBuzz
console.log("\n--- FizzBuzz ---");
for (let i = 1; i <= 50; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// ============================================
// ARRAY METHODS
// ============================================

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// Names
const names = students.map(s => s.name);
console.log("Names:", names);

// CS students
const csStudents = students.filter(s => s.major === "CS");
console.log("CS Students:", csStudents);

// Average grade
const avgGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
console.log("Average Grade:", avgGrade);