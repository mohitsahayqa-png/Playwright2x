/*Map Challenge 1 — Double Prices

Given:

let prices = [500, 1000, 1500, 2000];

Create:

doublePrices(prices)

Using map(), return a new array where every price is doubled.

Expected:

[1000, 2000, 3000, 4000]

Important: The function should return the new array, not directly print it. */

let prices = [500, 1000, 1500, 2000];

const doublePrices= (prices)=> prices.map(price=>{return price*2})

//console.log(doublePrice);
console.log(doublePrices(prices));

/*Map Challenge 2 — Extract User Names

Given:

let users = [
    { name: "Mohit", role: "QA" },
    { name: "Rahul", role: "Admin" },
    { name: "Amit", role: "Developer" },
    { name: "Rohit", role: "Support" }
];

Create:

getUserNames(users)

Using map(), return only the names.

Expected:

["Mohit", "Rahul", "Amit", "Rohit"] */

let users = [
    { name: "Mohit", role: "QA" },
    { name: "Rahul", role: "Admin" },
    { name: "Amit", role: "Developer" },
    { name: "Rohit", role: "Support" }
];

const getUserNames=(users)=>{return users.map((user=>{
    return user.name
}))}

console.log(getUserNames(users));

/*Map Challenge 3 — Create User Display Names

Given:

let users = [
    { firstName: "Mohit", lastName: "Sahay" },
    { firstName: "Rahul", lastName: "Sharma" },
    { firstName: "Amit", lastName: "Kumar" }
];

Create:

createDisplayNames(users)

Using map(), return:

[
    "Mohit Sahay",
    "Rahul Sharma",
    "Amit Kumar"
]
Hint

You need to transform:

firstName + lastName

into:

"firstName lastName"

Template literals will be useful here. */

let users1 = [
    { firstName: "Mohit", lastName: "Sahay" },
    { firstName: "Rahul", lastName: "Sharma" },
    { firstName: "Amit", lastName: "Kumar" }
];

const createDisplayNames=(users1)=>{return users1.map(user1=>{
    return (`${user1.firstName} ${user1.lastName}`)
})}
console.log(createDisplayNames(users1))

/*Map Challenge 4 — Transform Employee Data

Given:

let employees = [
    { name: "Mohit", salary: 50000, department: "QA" },
    { name: "Rahul", salary: 60000, department: "Development" },
    { name: "Amit", salary: 45000, department: "Support" }
];

Create:

prepareEmployeeData(employees)

Using map(), return a new array of objects containing:

name
department
monthlySalary
annualSalary

Where:

annualSalary = salary × 12

Expected:

[
    {
        name: "Mohit",
        department: "QA",
        monthlySalary: 50000,
        annualSalary: 600000
    },
    {
        name: "Rahul",
        department: "Development",
        monthlySalary: 60000,
        annualSalary: 720000
    },
    {
        name: "Amit",
        department: "Support",
        monthlySalary: 45000,
        annualSalary: 540000
    }
]

This is very similar to what you just practiced, but now you're putting the whole thing inside a function that returns the array. */

let employees2 = [
    { name: "Mohit", salary: 50000, department: "QA" },
    { name: "Rahul", salary: 60000, department: "Development" },
    { name: "Amit", salary: 45000, department: "Support" }
];

const prepareEmployeeData=(employees2)=>{return employees2.map(employee2=>{
    return{
        name: employee2.name,
        department: employee2.department,
        monthlySalary: employee2.salary,
        annualSalary: employee2.salary*12
    }
})
}

console.log(prepareEmployeeData(employees2));

/*Map Challenge 5 — Playwright-Style

This is the most important one.

Imagine Playwright has collected information about buttons:

let buttons = [
    { name: "Login", text: "Login", visible: true },
    { name: "Search", text: "Search", visible: true },
    { name: "Reports", text: "Reports", visible: false },
    { name: "Logout", text: "Logout", visible: true }
];

Create:

getVisibleButtonNames(buttons)

Using map():

Step 1

Return only the name of each button.

Step 2

But the final array should contain display strings:

[
    "Button: Login",
    "Button: Search",
    "Button: Reports",
    "Button: Logout"
]

Use a template literal.

Expected:
Button: Login
Button: Search
Button: Reports
Button: Logout

Don't worry about visible yet — we'll learn filtering separately with filter(). */

let buttons1 = [
    { name: "Login", text: "Login", visible: true },
    { name: "Search", text: "Search", visible: true },
    { name: "Reports", text: "Reports", visible: false },
    { name: "Logout", text: "Logout", visible: true }
];

const getVisibleButtonNames=(buttons1)=>{return buttons1.map((button1)=>{
    return `Button: ${button1.name}`;
});
};

console.log(getVisibleButtonNames(buttons1));