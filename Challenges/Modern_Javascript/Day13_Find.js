/*Challenge 1 — Find a Product by Name
let products = [
    { name: "Laptop", price: 55000, inStock: true },
    { name: "Mouse", price: 900, inStock: false },
    { name: "Keyboard", price: 1800, inStock: true },
    { name: "Monitor", price: 15000, inStock: true }
];

Create:

const findProduct = (products, productName) => {
    // your code
};

Call:

console.log(findProduct(products, "Keyboard"));

Expected result:

{ name: "Keyboard", price: 1800, inStock: true } */

let products = [
    { name: "Laptop", price: 55000, inStock: true },
    { name: "Mouse", price: 900, inStock: false },
    { name: "Keyboard", price: 1800, inStock: true },
    { name: "Monitor", price: 15000, inStock: true }
];
const findProduct = (products, productName) => {
    return products.find((product)=>{
        return product.name===productName
    })
};

console.log(findProduct(products, "Keyboard"));

/*Challenge 2 — Find the First High-Paid QA Employee ⭐
let employees = [
    { name: "Mohit", department: "QA", salary: 50000 },
    { name: "Rahul", department: "Development", salary: 80000 },
    { name: "Amit", department: "QA", salary: 70000 },
    { name: "Rohit", department: "QA", salary: 65000 }
];

Create:

const findHighPaidQA = (employees) => {
    // your code
};

Find the first employee where:

department === "QA"
AND
salary >= 60000

Expected:

{ name: "Amit", department: "QA", salary: 70000 }

Notice: even though Rohit also matches, find() stops at Amit. */

let employees = [
    { name: "Mohit", department: "QA", salary: 50000 },
    { name: "Rahul", department: "Development", salary: 80000 },
    { name: "Amit", department: "QA", salary: 70000 },
    { name: "Rohit", department: "QA", salary: 65000 }
];

const findHighPaidQA=(employees)=>{
    return employees.find((employee)=>{
        return employee.department==='QA' && employee.salary>=60000
    })
}

console.log(findHighPaidQA(employees));

/*Challenge 3 — Find User and Return Only Their Name ⭐
let users = [
    { id: 101, name: "Mohit", active: true },
    { id: 102, name: "Rahul", active: false },
    { id: 103, name: "Amit", active: true }
];

Create:

const getUserName = (users, userId) => {
    // your code
};

Call:

console.log(getUserName(users, 103));

Expected:

Amit

Hint: First use find(), then access .name.

Think in two steps:

users
  ↓ find()
user object
  ↓ .name
"Amit" */

let users = [
    { id: 101, name: "Mohit", active: true },
    { id: 102, name: "Rahul", active: false },
    { id: 103, name: "Amit", active: true }
];

const getUserName = (users, userId) => {
    let user= users.find((user)=>{
    return user.id===userId
    })   
    return user.name
};

console.log(getUserName(users, 103))


/*Challenge 4 — Handle a User That Does Not Exist ⭐⭐

Use the same users array.

Create:

const findUser = (users, userId) => {
    // your code
};

Rules:

If the user exists, return their name.
If the user does not exist, return "User Not Found".

Examples:

console.log(findUser(users, 102));

Output:

Rahul

And:

console.log(findUser(users, 999));

Output:

User Not Found

Hint: Remember what find() returns when there is no match:

undefined */

const findUser = (users, userId) => {
     return users.find((user)=>{
          return user.id===userId
         
    })
};

let resultUser=findUser(users, 1033)

if(resultUser){
    console.log(resultUser.name)
}
else{
    console.log('User Not Found')

}
/*Challenge 5 ⭐⭐⭐ — Playwright-Style Button Search
let buttons = [
    { name: "Login", visible: true, enabled: true },
    { name: "Search", visible: true, enabled: false },
    { name: "Reports", visible: false, enabled: true },
    { name: "Logout", visible: true, enabled: true }
];

Create:

const findReadyButton = (buttons) => {
    // your code
};

Find the first button where:

visible === true
AND
enabled === true

Then return:

Login is ready

If no ready button exists, return:

No ready button found */

let buttons = [
    { name: "Login", visible: true, enabled: true },
    { name: "Search", visible: true, enabled: false },
    { name: "Reports", visible: false, enabled: true },
    { name: "Logout", visible: true, enabled: true }
];

const findReadyButton = (buttons) => {
    let button= buttons.find((button)=>{
        return button.visible===true && button.enabled===true

    }
    )
};

if(findReadyButton){
    console.log('Login is ready')
}else{
    console.log('No ready button found')
}

