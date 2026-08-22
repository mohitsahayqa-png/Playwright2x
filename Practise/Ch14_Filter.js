/*filter() — 5 Practice Questions
Practice 1 — Filter Even Numbers */

let numbers=[10, 15, 20, 25, 30, 35];

let evenNumbers= numbers.filter((number)=>{
    return number%2===0
})

console.log(evenNumbers)

/*Practice 2 — Filter Passing Marks

Create:

let marks = [45, 72, 88, 35, 91, 60];

Using filter(), create a new array containing marks 60 or above. */

let marks = [45, 72, 88, 35, 91, 60];
let passingMarks= marks.filter((mark)=>{
    return mark>=60
})

console.log(passingMarks);

/*Practice 3 — Filter Long Names

Create:

let names = ["Mohit", "Rahul", "Amit", "Alexander", "Rohit"];

Using filter(), create a new array containing names with more than 5 characters. */

let names = ["Mohit", "Rahul", "Amit", "Alexander", "Rohit"];
let largeNames= names.filter((name)=>{
    return name.length>5
})

console.log(largeNames);

/*Practice 4 — Filter Active Users ⭐

Create:

let users = [
    { name: "Mohit", active: true },
    { name: "Rahul", active: false },
    { name: "Amit", active: true },
    { name: "Rohit", active: false }
];

Using filter(), create a new array containing only active users. */

let users = [
    { name: "Mohit", active: true },
    { name: "Rahul", active: false },
    { name: "Amit", active: true },
    { name: "Rohit", active: false }
];

let activeUsers= users.filter((user)=>{
    return user.active===true;
})
console.log(activeUsers);

/*Practice 5 ⭐ — Filter QA Employees

Create:

let employees = [
    { name: "Mohit", department: "QA", active: true },
    { name: "Rahul", department: "Development", active: true },
    { name: "Amit", department: "QA", active: false },
    { name: "Rohit", department: "QA", active: true }
];

Using filter(), create a new array containing employees who are:

department === "QA"
AND active === true */

let employees = [
    { name: "Mohit", department: "QA", active: true },
    { name: "Rahul", department: "Development", active: true },
    { name: "Amit", department: "QA", active: false },
    { name: "Rohit", department: "QA", active: true }
];

let qaEmployees= employees.filter((employee)=>{
    return employee.department==='QA' && employee.active===true
})

console.log(qaEmployees);