/*array.forEach((item) => {
    // code
}); */

/*Practice 1 — Print Fruits

Create:

let fruits = ["Apple", "Banana", "Mango"];

Using forEach(), print:

Apple
Banana
Mango */

let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach((item)=>{console.log(item)})

/*Practice 2 — Greeting Users

Create:

let users = ["Mohit", "Rahul", "Amit"];

Using forEach(), print:

Hello Mohit
Hello Rahul
Hello Amit

Use template literals. */
let users = ["Mohit", "Rahul", "Amit"];
users.forEach((user)=>{console.log(`Hello ${user}`)})

/*Practice 3 — Total Marks

Create:

let marks = [80, 90, 75, 95];

Using forEach(), calculate the total marks.

Output:

Total = 340 */

let marks = [80, 90, 75, 95];
let sum=0;
marks.forEach((mark)=>{sum=sum+mark
})
console.log(`Total=${sum}`)

/*Practice 4 — Even Numbers

Create:

let numbers = [11, 22, 33, 44, 55, 66];

Using forEach(), print only:

22
44
66 */

let numbers = [11, 22, 33, 44, 55, 66];
numbers.forEach((number)=>{if(number%2===0){console.log(number)}})

/*Practice 5 — Print Employee Details

Create:

let employees = [
    {
        name: "Mohit",
        department: "QA"
    },
    {
        name: "Rahul",
        department: "Admin"
    },
    {
        name: "Amit",
        department: "Developer"
    }
];

Using forEach(), print:

Mohit works in QA
Rahul works in Admin
Amit works in Developer */

let employees = [
    {
        name: "Mohit",
        department: "QA"
    },
    {
        name: "Rahul",
        department: "Admin"
    },
    {
        name: "Amit",
        department: "Developer"
    }
];

employees.forEach((employee=>{console.log(`${employee.name} works in ${employee.department}`)}))

/*Practise 6 — Print Cities
let cities = ["Delhi", "Mumbai", "Pune", "Jaipur"];

Using forEach(), print:

City: Delhi
City: Mumbai
City: Pune
City: Jaipur

Use a template literal. */

let cities = ["Delhi", "Mumbai", "Pune", "Jaipur"];
cities.forEach((city=>{console.log(`City: ${city}`)}))

/*Practise 7 — Count Even Numbers
let numbers = [10, 15, 22, 31, 40, 55, 60];

Using forEach(), count how many numbers are even.

Expected:

Even numbers = 4 */

let numbersNew = [10, 15, 22, 31, 40, 55, 60];
let count=0;
numbersNew.forEach((number=>{if(number%2===0){count++}}))
    console.log(`Even numbers= ${count}`);

/*Practise 8 — Find Total Price
let prices = [500, 1200, 750, 300];

Using forEach(), calculate the total.

Expected:

Total Price = 2750 */

let prices = [500, 1200, 750, 300];
let totalPrice=0
prices.forEach((price=>{totalPrice=totalPrice+price}))
console.log(`Total Price = ${totalPrice}`)

/*Practise 9 — Find Largest Number
let numbers = [25, 80, 45, 100, 65];

Using forEach(), find the largest number.

Expected:

Largest = 100

Hint: Start with the first array element as your largest value. */

let numbers2 = [25, 80, 45, 100, 65];
let largestNum=numbers2[0]
numbers2.forEach((number2=>{if(number2>largestNum){
    largestNum=number2;
}}))
console.log(`Largest = ${largestNum}`)

/*Practise 10 — Print Passing Students
let students = [
    { name: "Mohit", marks: 85 },
    { name: "Rahul", marks: 62 },
    { name: "Amit", marks: 91 },
    { name: "Rohit", marks: 45 }
];

Using forEach(), print students who scored 60 or above.

Expected:

Mohit passed with 85
Rahul passed with 62
Amit passed with 91 */

let studentsNew = [
    { name: "Mohit", marks: 85 },
    { name: "Rahul", marks: 62 },
    { name: "Amit", marks: 91 },
    { name: "Rohit", marks: 45 }
];

studentsNew.forEach((studentNew=>{if(studentNew.marks>=60){
    console.log(`${studentNew.name} passed with ${studentNew.marks}`)
}}))

/*Challenge 11 — Find QA Employees
let employees = [
    { name: "Mohit", department: "QA" },
    { name: "Rahul", department: "Development" },
    { name: "Amit", department: "QA" },
    { name: "Rohit", department: "Support" }
];

Using forEach(), print only QA employees.

Expected:

Mohit
Amit */

let employeesNew = [
    { name: "Mohit", department: "QA" },
    { name: "Rahul", department: "Development" },
    { name: "Amit", department: "QA" },
    { name: "Rohit", department: "Support" }
];

employeesNew.forEach((employeeNew=>{if(employeeNew.department==='QA'){
    console.log(employeeNew.name)
}}))

/*Challenge 12 — Calculate Salary Total
let employees = [
    { name: "Mohit", salary: 50000 },
    { name: "Rahul", salary: 60000 },
    { name: "Amit", salary: 45000 }
];

Using forEach(), calculate the total salary.

Expected:

Total Salary = 155000 */

let employees2 = [
    { name: "Mohit", salary: 50000 },
    { name: "Rahul", salary: 60000 },
    { name: "Amit", salary: 45000 }
];
let totalSalary=0;
employees2.forEach((employee2=>{totalSalary=employee2.salary+totalSalary}))
console.log(`Total Salary = ${totalSalary}`);

/*Challenge 15 — Function + forEach()

Create:

function printUsers(users) {
    // your code
}

The function should accept an array of users:

printUsers(["Mohit", "Rahul", "Amit"]);

Using forEach(), output:

User: Mohit
User: Rahul
User: Amit */

function printusersNew(usersNew) {
    usersNew.forEach((userNew=>{console.log(`User: ${userNew}`)}))
}

printusersNew(["Mohit", "Rahul", "Amit"]);


/*Challenge 16 ⭐ Playwright Style

Imagine these are UI elements found on a webpage:

let buttons = [
    "Login",
    "Search",
    "Reports",
    "Settings",
    "Logout"
];

Create an arrow function:

const validateButtons = (buttons) => {
    // your code
};

Using forEach(), print:

Checking Login button
Checking Search button
Checking Reports button
Checking Settings button
Checking Logout button */

let buttonsNew = [
    "Login",
    "Search",
    "Reports",
    "Settings",
    "Logout"
];

const validateButtons = (buttonsNew) => {
    buttonsNew.forEach((buttonNew=>{console.log(`Checking ${buttonNew} button`)}))
};

validateButtons(buttonsNew);


