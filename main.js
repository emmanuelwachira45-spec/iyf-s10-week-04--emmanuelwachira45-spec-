<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Practice</title>
</head>
<body>
    <h1>JavaScript Practice</h1>
    <p>Open the console (F12) to see the output!</p>
    
    <!-- Link to your JavaScript file -->
    <script src="main.js"></script>
</body>
</html>
// Variable declarations
let name = "Your Name"; wachira
let age = 19;
const birthYear = 2006;

// typeof operator
console.log(typeof name);    // string
console.log(typeof age);     // number
console.log(typeof true);    // boolean

// let vs const
let score = 100;
score = 150;  // Works!
console.log("Score:", score); // Score: 150

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned
console.log("PI:", PI); // PI: 3.14159

// Exercise: Variable Practice
// Declare variables for the following:

// Your name (string)
let myName = "John Doe";
console.log("My name is:", Emmanuel );

// Your age (number)
let myAge = 19;
console.log("My age is:", 19);

// Whether you're a student (boolean)
let isStudent = true;
console.log("Am I a student?:", true);

// Your favorite colors (array - we'll learn more next lesson)
let favoriteColors = ["blue", "green", "purple"];
console.log("My favorite colors are:", favoriteColors);

// Today's date (use new Date())
let todayDate = new Date(3/12/2026);
console.log("Today's date is:", todayDate);

// ============================================
// TASK 7.2: Data Types & Operators
// ============================================

// Exercise 1: Number Operations
console.log("\n--- NUMBER OPERATIONS ---");
let a = 10;
let b = 3;

console.log("a + b =", a + b);   // Addition
console.log("a - b =", a - b);   // Subtraction
console.log("a * b =", a * b);   // Multiplication
console.log("a % b =", a % b);   // Modulus (remainder)
console.log("a ** b =", a ** b);  // Exponentiation

// Increment/Decrement
let count = 0;
console.log("Initial count:", count);
count++;  // count is now 1
console.log("After count++:", count);
count--;  // count is now 0
console.log("After count--:", count);

// Exercise 2: String Operations
console.log("\n--- STRING OPERATIONS ---");
let firstName = "Emmanuel";
let lastName = "Wachira";

// Concatenation
    let fullName = firstName + " " + lastName;
console.log("Full name (concatenation):", fullName);

// Template literals (preferred)
let greeting = `Hello, ${first }!`;
let message = `Your name has ${firstName.length} characters.`;
console.log(greeting);
console.log(message);

// String methods
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First character of firstName:", firstName.charAt(0));
console.log('Contains "Emmanuel"?', fullName.includes("Emmanuel"));

// Exercise 3: Comparison & Logical Operators
console.log("\n--- COMPARISON OPERATORS ---");
console.log("5 > 3:", 5 > 3);    // true
console.log("5 < 3:", 5 < 3);    // false
console.log("5 === 5:", 5 === 5);  // true (strict equality)
console.log('5 == "5":', 5 == "5"); // true (loose equality - avoid!)
console.log("5 !== 3:", 5 !== 3);  // true

console.log("\n--- LOGICAL OPERATORS ---");
console.log("true && true:", true && true);   // AND
console.log("true && false:", true && false); // AND
console.log("true || false:", true || false);  // OR
console.log("false || false:", false || false); // OR
console.log("!true:", !true);          // NOT

// Challenge: Calculate and display
console.log("\n--- AGE CALCULATION CHALLENGE ---");
let myActualAge = 19; // Replace with your actual age
let ageInDays = myActualAge * 365; // approximately
let ageInHours = ageInDays * 24;
let currentYear = new Date().getFullYear(2026);
let yearTurn100 = currentYear + (100 - myActualAge);

console.log(`My age: ${19} years`);
console.log(`My age in days (approx): ${ageInDays} days`);
console.log(`My age in hours (approx): ${ageInHours} hours`);
console.log(`The year I'll turn 100: ${yearTurn100}`);

// ============================================
// TASK 7.3: Functions
// ============================================

console.log("\n--- FUNCTIONS ---");

// Exercise 1: Function Declarations

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// Testing the functions
console.log("greet('Emmanuel'):", greet("Alice"));
console.log("add(5, 3):", add(5, 3));
console.log("multiply(4, 7):", multiply(4, 7));
console.log("divide(10, 2):", divide(10, 2));
console.log("divide(10, 0):", divide(10, 0));

// Exercise 2: Build These Functions

// 1. calculateArea(width, height) - returns area of rectangle
function calculateArea(width, height) {
    return width * height;
}
console.log("Area of 5 x 3 rectangle:", calculateArea(5, 3));

// 2. celsiusToFahrenheit(celsius) - converts temperature
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log("25°C in Fahrenheit:", celsiusToFahrenheit(25));

// 3. isEven(number) - returns true if even, false if odd
function isEven(number) {
    return number % 2 === 0;
}
console.log("Is 7 even?", isEven(7));
console.log("Is 10 even?", isEven(10));

// 4. getInitials(fullName) - returns initials (e.g., "emmanuel wachira" → "JD")
function getInitials(Emmanuel ) {
    let nameParts = fullName.split(" ");
    let initials = nameParts[0].charAt(0) + nameParts[1].charAt(0);
    return initials.toUpperCase();
}
console.log("Initials of 'Emmanuel wachira':", getInitials("John Doe"));
console.log("Initials of 'Emmanuel wachira':", getInitials("jane smith"));

// 5. reverseString(str) - reverses a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reverse of 'hello':", reverseString("hello"));

// Exercise 3: Default Parameters
console.log("\n--- DEFAULT PARAMETERS ---");

function greetWithDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log("greetWithDefault():", greetWithDefault());              // Hello, Guest!
console.log("greetWithDefault('Alice'):", greetWithDefault("Alice"));       // Hello, Alice!
console.log("greetWithDefault('Emmanuel', 'Hi'):", greetWithDefault("EMMANUEL", "Hi"));   // Hi, Bob!

// Build: A function calculateTip(bill, tipPercent = 15) that returns the tip amount.
function calculateTip(bill, tipPercent = 15) {
    let tipAmount = (bill * tipPercent) / 100;
    return tipAmount;
}

console.log("Tip on $50 (15% default): $", calculateTip(50));
console.log("Tip on $75.50 (20%): $", calculateTip(75.50, 20));
console.log("Tip on $32.25 (18%): $", calculateTip(32.25, 18));
// ============================================
// TASK 7.4: CONTROL FLOW
// ============================================

// Exercise 1: If/Else Statements
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Test getGrade
console.log("Grade for 95:", getGrade(95)); // A
console.log("Grade for 82:", getGrade(82)); // B
console.log("Grade for 45:", getGrade(45)); // F

// Exercise 2: Switch Statements
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

// Test getDayName
console.log("Day 0:", getDayName(0)); // Sunday
console.log("Day 3:", getDayName(3)); // Wednesday
console.log("Day 7:", getDayName(7)); // Invalid day

// Exercise 3: Loops
console.log("\n--- For Loop ---");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("\n--- While Loop ---");
let number = 0;
while (count < 5) {
    console.log(count);
    count++;
}

console.log("\n--- For...of Loop ---");
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

// Build these programs:

// 1. Print numbers 1-100
console.log("\n--- Numbers 1-100 ---");
for (let i = 1; i <= 100; i++) {
    if (i % 20 === 0) console.log(i); // Print every 20th to avoid console spam
}

// 2. Print only even numbers 1-50
console.log("\n--- Even numbers 1-50 ---");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// 3. FizzBuzz
console.log("\n--- FizzBuzz 1-100 ---");
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 10 === 0) {
        console.log(i); // Print every 10th to avoid spam
    }
}

// 4. Print a triangle of stars
console.log("\n--- Triangle of Stars ---");
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// Your tasks - use array methods:
// 1. Get all student names
const names = students.map(student => student.name);
console.log("Student names:", names);

// 2. Get all CS majors
const csMajors = students.filter(student => student.major === "CS");
console.log("CS majors:", csMajors);

// 3. Get the average grade of all students
const averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log("Average grade:", averageGrade);    
// ============================================
// TASK 7.1: VARIABLES
// ============================================
const myName = "Your Name";
let myAge = 25;
const isStudent = true;
const favoriteColors = ["blue", "green", "black"];
const today = new Date();

console.log("My name is:", myName);
console.log("I am", myAge, "years old");
// ... rest of Task 7.1

// ============================================
// TASK 7.2: DATA TYPES & OPERATORS
// ============================================
let a = 10;
let b = 3;
console.log("Addition:", a + b);
// ... rest of Task 7.2

// ============================================
// TASK 7.3: FUNCTIONS
// ============================================
function calculateArea(width, height) {
    return width * height;
}
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
// ... rest of Task 7.3

// ============================================
// TASK 7.4: CONTROL FLOW
// ============================================
function getGrade(score) {
    if (score >= 90) return "A";
    // ... rest
}
// ... rest of Task 7.4

// ============================================
// MINI-PROJECT: CALCULATOR
// ============================================
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}// ============================================
// MINI-PROJECT: STUDENT GRADE TRACKER
// ============================================

console.log("\n📚 STUDENT GRADE TRACKER SYSTEM");
console.log("=".repeat(50));

const gradeTracker = {
    students: [],
    
    // Add a new student
    addStudent(name, grades) {
        const student = {
            name: name,
            grades: grades
        };
        this.students.push(student);
        console.log(`✅ Added: ${name} - Subjects: ${Object.keys(grades).join(", ")}`);
        return student;
    },
    
    // Get a student by name
    getStudent(name) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].name.toLowerCase() === name.toLowerCase()) {
                return this.students[i];
            }
        }
        return null;
    },
    
    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) {
            return `❌ Student "${name}" not found`;
        }
        
        const grades = Object.values(student.grades);
        if (grades.length === 0) return 0;
        
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {
            sum += grades[i];
        }
        
        const average = sum / grades.length;
        return Math.round(average * 100) / 100;
    },
    
    // Get class average for a subject
    getSubjectAverage(subject) {
        let total = 0;
        let count = 0;
        
        for (let i = 0; i < this.students.length; i++) {
            const student = this.students[i];
            if (student.grades.hasOwnProperty(subject)) {
                total += student.grades[subject];
                count++;
            }
        }
        
        if (count === 0) {
            return `❌ No grades found for "${subject}"`;
        }
        
        const average = total / count;
        return Math.round(average * 100) / 100;
    },
    
    // Get top performer (student with highest overall average)
    getTopStudent() {
        if (this.students.length === 0) return null;
        
        let topStudent = this.students[0];
        let topAverage = this.getStudentAverage(topStudent.name);
        
        for (let i = 1; i < this.students.length; i++) {
            const currentAverage = this.getStudentAverage(this.students[i].name);
            if (currentAverage > topAverage) {
                topStudent = this.students[i];
                topAverage = currentAverage;
            }
        }
        
        return {
            name: topStudent.name,
            average: topAverage,
            grades: topStudent.grades
        };
    },
    
    // Get students needing help (average < 70)
    getStrugglingStudents() {
        const struggling = [];
        
        for (let i = 0; i < this.students.length; i++) {
            const student = this.students[i];
            const average = this.getStudentAverage(student.name);
            
            if (average < 70 && typeof average === 'number') {
                struggling.push({
                    name: student.name,
                    average: average,
                    grades: student.grades
                });
            }
        }
        
        return struggling;
    },
    
    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) {
            return `❌ Student "${name}" not found`;
        }
        
        const average = this.getStudentAverage(name);
        const overallLetter = this.getLetterGrade(average);
        
        // Build the report card
        let report = "\n" + "=".repeat(50) + "\n";
        report += `           📋 REPORT CARD: ${student.name.toUpperCase()}\n`;
        report += "=".repeat(50) + "\n\n";
        
        report += "SUBJECT".padEnd(15) + "GRADE".padEnd(10) + "LETTER\n";
        report += "-".repeat(35) + "\n";
        
        // Get all subjects and sort alphabetically
        const subjects = Object.keys(student.grades).sort();
        
        for (let i = 0; i < subjects.length; i++) {
            const subject = subjects[i];
            const grade = student.grades[subject];
            const letter = this.getLetterGrade(grade);
            
            // Format subject name (capitalize first letter)
            const subjectFormatted = subject.charAt(0).toUpperCase() + subject.slice(1);
            report += subjectFormatted.padEnd(15) + grade.toString().padEnd(10) + letter + "\n";
        }
        
        report += "\n" + "-".repeat(35) + "\n";
        report += "OVERALL".padEnd(15) + average.toString().padEnd(10) + overallLetter + "\n";
        report += "=".repeat(50) + "\n";
        
        return report;
    },
    
    // Extra: Display class summary
    displayClassSummary() {
        console.log("\n📊 CLASS SUMMARY");
        console.log("-".repeat(40));
        console.log(`Total Students: ${this.students.length}`);
        
        // Get all unique subjects
        const allSubjects = new Set();
        for (let i = 0; i < this.students.length; i++) {
            const subjects = Object.keys(this.students[i].grades);
            for (let j = 0; j < subjects.length; j++) {
                allSubjects.add(subjects[j]);
            }
        }
        
        console.log("\nSubject Averages:");
        const subjectsList = Array.from(allSubjects).sort();
        for (let i = 0; i < subjectsList.length; i++) {
            const subject = subjectsList[i];
            const avg = this.getSubjectAverage(subject);
            console.log(`  ${subject}: ${avg}`);
        }
        
        const topStudent = this.getTopStudent();
        if (topStudent) {
            console.log(`\n🏆 Top Student: ${topStudent.name} (${topStudent.average})`);
        }
        
        const struggling = this.getStrugglingStudents();
        if (struggling.length > 0) {
            console.log(`\n⚠️ Struggling Students (<70):`);
            for (let i = 0; i < struggling.length; i++) {
                console.log(`  ${struggling[i].name} (${struggling[i].average})`);
            }
        }
    }
};

// ============================================
// TEST THE GRADE TRACKER
// ============================================

console.log("\n🧪 TESTING GRADE TRACKER");
console.log("-".repeat(40));

// Add students
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });
gradeTracker.addStudent("Diana", { math: 98, english: 94, science: 96, history: 90 });

console.log("\n📊 STUDENT AVERAGES:");
console.log("Alice's average:", gradeTracker.getStudentAverage("Alice"));      // 91.67
console.log("Bob's average:", gradeTracker.getStudentAverage("Bob"));          // 78.33
console.log("Charlie's average:", gradeTracker.getStudentAverage("Charlie"));  // 61.00
console.log("Diana's average:", gradeTracker.getStudentAverage("Diana"));      // 94.50

console.log("\n📚 SUBJECT AVERAGES:");
console.log("Math average:", gradeTracker.getSubjectAverage("math"));          // 81.25
console.log("English average:", gradeTracker.getSubjectAverage("english"));    // 83.00
console.log("Science average:", gradeTracker.getSubjectAverage("science"));    // 81.00
console.log("History average:", gradeTracker.getSubjectAverage("history"));    // 90.00

console.log("\n🏆 TOP PERFORMER:");
console.log(gradeTracker.getTopStudent());                 // Diana

console.log("\n⚠️ STRUGGLING STUDENTS:");
console.log(gradeTracker.getStrugglingStudents());         // [Charlie]

console.log("\n📋 REPORT CARDS:");
console.log(gradeTracker.generateReportCard("Alice"));
console.log(gradeTracker.generateReportCard("Charlie"));

// Display full class summary
gradeTracker.displayClassSummary();
// ============================================
// DAILY CHALLENGE: FIZZBUZZ
// ============================================

console.log("\n🎮 FIZZBUZZ CHALLENGE");
console.log("=".repeat(50));

function fizzBuzz() {
    console.log("\nFizzBuzz from 1 to 100:");
    console.log("-".repeat(30));
    
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log(`  ${i}: FizzBuzz`);
        } else if (i % 3 === 0) {
            console.log(`  ${i}: Fizz`);
        } else if (i % 5 === 0) {
            console.log(`  ${i}: Buzz`);
        } else {
            // Only show every 10th number to keep console clean
            if (i % 10 === 0 || i <= 20) {
                console.log(`  ${i}: ${i}`);
            }
        }
    }
}

// Run FizzBuzz
fizzBuzz();

// Alternative version that returns an array (more useful)
function fizzBuzzArray(limit = 100) {
    const result = [];
    for (let i = 1; i <= limit; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

// Test the array version
const fizzBuzzResults = fizzBuzzArray(30);
console.log("\n📊 FizzBuzz Array Results (first 30):");
console.log(fizzBuzzResults.join(", "));

// Advanced version with custom rules
function advancedFizzBuzz(limit = 100, rules = {
    3: "Fizz",
    5: "Buzz",
    7: "Bang"
}) {
    console.log("\n🎯 Advanced FizzBuzz with custom rules:");
    for (let i = 1; i <= limit; i++) {
        let output = "";
        for (const [divisor, word] of Object.entries(rules)) {
            if (i % divisor === 0) {
                output += word;
            }
        }
        console.log(output || i);
        
        // Limit output for readability
        if (i > 30) break;
    }
}

// Test advanced version
advancedFizzBuzz(100, {3: "Fizz", 5: "Buzz", 7: "Bang"});

console.log("\n✅ FizzBuzz Complete!");

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed";
    }
    return a / b;
}

function modulus(a, b) {
    if (b === 0) {
        return "Error: Modulus by zero is not allowed";
    }
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return modulus(num1, num2);
        case "**":
            return power(num1, num2);
        default:
            return "Invalid operator";
    }
}

// Test Calculator
console.log("\n--- CALCULATOR TESTS ---");
console.log("10 + 5 =", calculate(10, "+", 5));
console.log("10 - 5 =", calculate(10, "-", 5));
console.log("10 * 5 =", calculate(10, "*", 5));
console.log("10 / 5 =", calculate(10, "/", 5));
console.log("10 / 0 =", calculate(10, "/", 0));
console.log("10 % 3 =", calculate(10, "%", 3));
console.log("2 ** 3 =", calculate(2, "**", 3));

// ============================================
// TASK 8.1: ARRAYS
// ============================================
const fruits = ["apple", "banana", "orange"];
// ... rest of Task 8.1

// ============================================
// TASK 8.2: OBJECTS
// ============================================
const person = {
    firstName: "John",
    lastName: "Doe"
};
// ... rest of Task 8.2

// ============================================
// TASK 8.3: ARRAY OF OBJECTS
// ============================================
const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" }
    // ... rest
];

// ============================================
// MINI-PROJECT: GRADE TRACKER
// ============================================
const gradeTracker = {
    students: [],
    addStudent(name, grades) {
        // ... code
    }
    // ... rest of grade tracker
};

// Test Grade Tracker
console.log("\n--- GRADE TRACKER TESTS ---");
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
// ... rest of tests
