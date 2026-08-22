/*Challenge 1 — Filter High-Paid QA Employees ⭐
let employees = [
    { name: "Mohit", department: "QA", salary: 50000 },
    { name: "Rahul", department: "Development", salary: 80000 },
    { name: "Amit", department: "QA", salary: 70000 },
    { name: "Rohit", department: "QA", salary: 45000 },
    { name: "Karan", department: "Support", salary: 65000 }
];

Create:

const findHighPaidQA = (employees) => {
    // your code
};

Using filter(), return employees who:

department === "QA"
AND
salary >= 60000

Expected:

[
    { name: "Amit", department: "QA", salary: 70000 }
] */


    let employees = [
    { name: "Mohit", department: "QA", salary: 50000 },
    { name: "Rahul", department: "Development", salary: 80000 },
    { name: "Amit", department: "QA", salary: 70000 },
    { name: "Rohit", department: "QA", salary: 45000 },
    { name: "Karan", department: "Support", salary: 65000 }
];


const findHighPaidQA = (employees) => {
    return employees.filter((employee)=>{
        return employee.department==='QA' && employee.salary >= 60000
    })
};

console.log(findHighPaidQA(employees));

/*Challenge 2 — Filter and Then Transform ⭐⭐

This one introduces filter() + map() together.

let users = [
    { name: "Mohit", age: 27, active: true },
    { name: "Rahul", age: 25, active: false },
    { name: "Amit", age: 30, active: true },
    { name: "Rohit", age: 22, active: false }
];

Create:

const getActiveUserNames = (users) => {
    // your code
};

First use filter() to select active users.

Then use map() to return only their names.

Expected:

["Mohit", "Amit"]
Think:
users
 ↓
filter active users
 ↓
map their names
 ↓
["Mohit", "Amit"]

This is very important JavaScript for automation. */

let users = [
    { name: "Mohit", age: 27, active: true },
    { name: "Rahul", age: 25, active: false },
    { name: "Amit", age: 30, active: true },
    { name: "Rohit", age: 22, active: false }
];

const getActiveUserNames = (users) => {
    return users.filter((user)=>{
        return user.active===true
        
    })
};

let activeUsers = getActiveUserNames(users);
let names= activeUsers.map((user)=>{
    return user.name
}) 

console.log(names);

/*Challenge 3 — Filter + Template Literal ⭐⭐
let products = [
    { name: "Laptop", price: 55000, inStock: true },
    { name: "Mouse", price: 900, inStock: false },
    { name: "Keyboard", price: 1800, inStock: true },
    { name: "Monitor", price: 15000, inStock: true }
];

Create:

const getAvailableProducts = (products) => {
    // your code
};

Filter products that are:

inStock === true
AND
price > 2000

Then print each matching product like:

Laptop costs ₹55000
Monitor costs ₹15000

Hint: You will need filter() + forEach() */

let products = [
    { name: "Laptop", price: 55000, inStock: true },
    { name: "Mouse", price: 900, inStock: false },
    { name: "Keyboard", price: 1800, inStock: true },
    { name: "Monitor", price: 15000, inStock: true }
];

const getAvailableProducts = (products) => {
    return products.filter((product)=>{
        return product.inStock===true && product.price>2000
    })
};

let finalProduct= getAvailableProducts(products);

let finalProductlist= finalProduct.forEach((product)=>{
    console.log(`${product.name} costs ${product.price}`)
})

/*Challenge 4 — Function + Filter + Multiple Conditions ⭐⭐⭐

Create:

let students = [
    { name: "Mohit", marks: 85, attendance: 90 },
    { name: "Rahul", marks: 72, attendance: 65 },
    { name: "Amit", marks: 91, attendance: 95 },
    { name: "Rohit", marks: 88, attendance: 70 },
    { name: "Karan", marks: 60, attendance: 92 }
];

Create:

function getEligibleStudents(students) {
    // your code
}

A student is eligible if:

marks >= 80
AND
attendance >= 75

Return the filtered array.

Expected:

[
    { name: "Mohit", marks: 85, attendance: 90 },
    { name: "Amit", marks: 91, attendance: 95 }
]

Then print the result. */

let students = [
    { name: "Mohit", marks: 85, attendance: 90 },
    { name: "Rahul", marks: 72, attendance: 65 },
    { name: "Amit", marks: 91, attendance: 95 },
    { name: "Rohit", marks: 88, attendance: 70 },
    { name: "Karan", marks: 60, attendance: 92 }
];

function getEligibleStudents(students) {
    return students.filter((student)=>{
        return student.marks >= 80 && student.attendance >= 75
    })
}

let eligibleStudent= getEligibleStudents(students);
console.log(eligibleStudent)

/*Challenge 5 ⭐⭐⭐⭐ — Playwright-Style Validation

This is the one I particularly want you to solve.

Imagine Playwright has collected information about UI elements:

let buttons = [
    { name: "Login", visible: true, enabled: true },
    { name: "Search", visible: true, enabled: false },
    { name: "Reports", visible: false, enabled: true },
    { name: "Settings", visible: true, enabled: true },
    { name: "Logout", visible: false, enabled: false }
];

Create:

const getReadyButtons = (buttons) => {
    // your code
};

A button is considered ready when:

visible === true
AND
enabled === true
Step 1

Use filter() to get only ready buttons.

Step 2

Use map() to return only their names.

Expected:

["Login", "Settings"]
Step 3

Print:

Ready button: Login
Ready button: Settings
Why I'm increasing the difficulty

Challenge 5 combines almost everything you've learned:

Arrow Function
      ↓
   filter()
      ↓
Objects + &&
      ↓
   map()
      ↓
Template Literal

And this is much closer to the kind of JavaScript thinking you'll need when you start Playwright.

Do Challenges 1–5. Don't look for solutions yet. Send me your code and I'll review each one. */


let buttons = [
    { name: "Login", visible: true, enabled: true },
    { name: "Search", visible: true, enabled: false },
    { name: "Reports", visible: false, enabled: true },
    { name: "Settings", visible: true, enabled: true },
    { name: "Logout", visible: false, enabled: false }
];

const getReadyButtons = (buttons) => {
    return buttons.filter((button)=>{
        return button.visible === true && button.enabled === true
    })
};

let readyButton= getReadyButtons(buttons);
let buttonNames=readyButton.map((button)=>{
    return button.name
})

buttonNames.forEach((buttonName)=>{
    console.log(`Ready button ${buttonName}`);
})