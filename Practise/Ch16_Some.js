/*Question 1 of 5 — some() + arrow functions
Imagine you're testing a login page. You need to check whether at least one user account is active.
const users = [
    { name: "Mohit", active: false },
    { name: "Rahul", active: false },
    { name: "Amit", active: true }
];

const hasActiveUser = users.some((user) => {
    return user.active === true;
});

console.log(hasActiveUser);


Your tasks:
1. What will be printed: true or false?
2. Explain in your own words what some() is checking here.
3. What does return user.active === true do? */


const users = [
    { name: "Mohit", active: false },
    { name: "Rahul", active: false },
    { name: "Amit", active: true }
];

const hasActiveUser = users.some((user) => {
    return user.active === true;
});

console.log(hasActiveUser)

/*1. What will be printed: true or false?
Ans-true
2. Explain in your own words what some() is checking here.
Ans. Here some is checking weather in an object there any user present who is active if the condition is true then return
true otherwise return false
3. What does return user.active === true do? 
Ans This is strictly check if in the memory box if the exact same values are present if this 
condition is true then true is printed otherwise false
*/


//Question 2: You need to check whether at least one QA engineer earns ₹60,000 or more

const employees = [
    { name: "Aman", role: "QA", salary: 55000 },
    { name: "Neha", role: "Developer", salary: 80000 },
    { name: "Raj", role: "QA", salary: 70000 }
];

function isEmployeeEaringMoreThan60(employeelist) { return employeelist.some((employee)=>{
    return employee.role==='QA' && employee.salary>=60000
})}

const result= isEmployeeEaringMoreThan60(employees)
console.log(result)
