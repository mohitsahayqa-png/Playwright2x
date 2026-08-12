/*Practice 1

Convert:

[1, 2, 3, 4, 5]

into:

[2, 4, 6, 8, 10] */

let oldArray=[1, 2, 3, 4, 5];

let newArray=oldArray.map((item)=>{ return item*2});

console.log(newArray);

/*Practice 3

Convert:

["mohit", "rahul", "amit"]

into uppercase names.

Expected:

["MOHIT", "RAHUL", "AMIT"] */

let smallCases= ["mohit", "rahul", "amit"];

let capsCase= smallCases.map((smallCase=>{return smallCase.toUpperCase()}))

console.log(capsCase)

/*Practice 5 ⭐

Given:

let products = [
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 900 },
    { name: "Keyboard", price: 1800 }
];

Create a new array containing only the prices.

Expected:

[55000, 900, 1800] */

let products = [
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 900 },
    { name: "Keyboard", price: 1800 }
];

let productsNew= products.map((product=>{return product.price}));
console.log(productsNew);

/*map() — Practice 6
Transform numbers

Given:

let numbers = [5, 10, 15, 20];

Using map(), create a new array where 10 is added to every number.

Expected:

[15, 20, 25, 30] */

let numbers = [5, 10, 15, 20];
let numbersNew= numbers.map((number=>{return (number+10)}))
console.log(numbersNew);

/*Increase salaries

Given:

let salaries = [30000, 40000, 50000, 60000];

Using map(), create a new array where every salary gets a ₹5,000 increment.

Expected:

[35000, 45000, 55000, 65000] */

let salaries = [30000, 40000, 50000, 60000];
let newSalaries= salaries.map((salary=>{return (salary+5000)}));
console.log(newSalaries);

/*Practice 8 ⭐
Transform objects

Given:

let employees = [
    { name: "Mohit", salary: 50000 },
    { name: "Rahul", salary: 60000 },
    { name: "Amit", salary: 70000 }
];

Using map(), create a new array containing objects with the employee's name and their salary after a ₹5,000 increment.

Expected:

[
    { name: "Mohit", salary: 55000 },
    { name: "Rahul", salary: 65000 },
    { name: "Amit", salary: 75000 }
] */

    let employeesOld = [
    { name: "Mohit", salary: 50000 },
    { name: "Rahul", salary: 60000 },
    { name: "Amit", salary: 70000 }
];

let employeesNew= employeesOld.map((employeeNew =>{ return {
    name: employeeNew.name,
    salary: employeeNew.salary + 5000
}}));
console.log(employeesNew);

/*let users = [
    { name: "Mohit", age: 27 },
    { name: "Rahul", age: 25 },
    { name: "Amit", age: 30 }
];

Using map(), create a new array of objects containing:

name
age
status

The status should always be "Active".

Expected:

[
    { name: "Mohit", age: 27, status: "Active" },
    { name: "Rahul", age: 25, status: "Active" },
    { name: "Amit", age: 30, status: "Active" }
] */

    let usersOld = [
    { name: "Mohit", age: 27 },
    { name: "Rahul", age: 25 },
    { name: "Amit", age: 30 }
];

let usersNew= usersOld.map((userNew=>{
    return {
        name: userNew.name,
        age: userNew.age,
        status: "Active"
    }
}))

console.log(usersNew);

/*Practice 10 ⭐⭐ — Transform Employee Data

Given:

let employees = [
    { name: "Mohit", salary: 50000, department: "QA" },
    { name: "Rahul", salary: 60000, department: "Development" },
    { name: "Amit", salary: 45000, department: "Support" }
];

Using map(), create a new array where each employee object contains:

name
department
annualSalary

Calculate annualSalary as:

salary × 12

Expected:

[
    { name: "Mohit", department: "QA", annualSalary: 600000 },
    { name: "Rahul", department: "Development", annualSalary: 720000 },
    { name: "Amit", department: "Support", annualSalary: 540000 } */

    let employees1 = [
    { name: "Mohit", salary: 50000, department: "QA" },
    { name: "Rahul", salary: 60000, department: "Development" },
    { name: "Amit", salary: 45000, department: "Support" }
];

let employees2= employees1.map((employee1=> {return{
    name: employee1.name,
    department: employee1.department,
    annualSalary: employee1.salary*12
}}))

console.log(employees2);