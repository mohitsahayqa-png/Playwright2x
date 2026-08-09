/*Challenge 1 — Print All Browsers
let browsers = ["Chrome", "Edge", "Firefox"];

Create an arrow function printBrowsers(browsers).

Using for...of, print:

Browser: Chrome
Browser: Edge
Browser: Firefox */

let browsers = ["Chrome", "Edge", "Firefox"];

const printBrowsers=()=>{for(browser of browsers){console.log(browser)}};
printBrowsers();

/*Challenge 2 — Greeting Users
let users = ["Mohit", "Rahul", "Amit"];

Create an arrow function greetUsers(users).

Using for...of, print:

Hello Mohit
Hello Rahul
Hello Amit

Use template literals. */

let users = ["Mohit", "Rahul", "Amit"];

const greetUsers=()=>{for(user of users){console.log(`Hello ${user}`)}}


greetUsers(users);

/*Challenge 3 — Active Employees
let employees = [
    { name: "Mohit", active: true },
    { name: "Rahul", active: false },
    { name: "Amit", active: true }
];

Create an arrow function:

showActiveEmployees(employees)

Print only:

Mohit is Active
Amit is Active */

let employees = [
    { name: "Mohit", active: true },
    { name: "Rahul", active: false },
    { name: "Amit", active: true }
];
 
const showActiveEmployees=()=>{for(employee of employees){
    if(employee.active===true){
        console.log(`${employee.name} is active`)
    }
}}
showActiveEmployees(employees)

/*Challenge 4 — Total Marks
let marks = [80, 75, 95, 88];

Create:

findTotal(marks)

Return the total.

Print:

Total Marks = 338 */

let marks = [80, 75, 95, 88];

let sum=0;
const findTotal=()=>{for(mark of marks){sum=sum+mark}console.log(`Total Marks = ${sum}`)}

findTotal(marks);

/*Challenge 5 — Highest Salary
let salaries = [25000, 50000, 42000, 70000];

Create:

findHighest(salaries)

Return the highest salary.

Print:

Highest Salary = 70000 */

let salaries = [25000, 50000, 42000, 70000];

console.log(salaries[0])


let maxSalary=salaries[0];
const findHighest=()=>{for(salary of salaries){
    if(salary>maxSalary){
        maxSalary=salary
    } 
}
console.log(`Highest Salary = ${maxSalary}`)
}

findHighest(salaries)

/*Challenge 6 — Product List
let products = [
    {
        name: "Laptop",
        price: 55000
    },
    {
        name: "Mouse",
        price: 900
    },
    {
        name: "Keyboard",
        price: 1800
    }
];

Create:

showProducts(products)

Output:

Laptop costs ₹55000
Mouse costs ₹900
Keyboard costs ₹1800

Use template literals. */

let products = [
    {
        name: "Laptop",
        price: 55000
    },
    {
        name: "Mouse",
        price: 900
    },
    {
        name: "Keyboard",
        price: 1800
    }
];

const showProducts=()=>{for(product of products){
    console.log(`${product.name} costs ₹${product.price}`)
}}

showProducts(products)

/*Challenge 7 — Even Numbers
let numbers = [12,15,18,21,24,27];

Create:

printEven(numbers)

Print only:

12
18
24 */

let numbers = [12,15,18,21,24,27];

const printEven=()=>{for(number of numbers){
    if(number%2===0){
        console.log(number);
    }
}}

printEven(numbers);

/*Challenge 9 ⭐ Playwright Style

Imagine Playwright found these buttons:

let buttons = [
    "Login",
    "Search",
    "Reports",
    "Logout"
];

Create:

validateButtons(buttons)

Output:

Checking Login button
Checking Search button
Checking Reports button
Checking Logout button

This is very similar to iterating through UI elements in Playwright. */

let buttons = [
    "Login",
    "Search",
    "Reports",
    "Logout"
];

const validateButtons=()=>{for(button of buttons){console.log(`Checking ${button} button`)}}

validateButtons(buttons);

