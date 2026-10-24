/*find() — Practice 1

Find the first number greater than 50.

let numbers = [10, 25, 45, 60, 75, 90];

let result = numbers.find((number) => {
    // your code
});

console.log(result); */

let numbers = [10, 25, 45, 60, 75, 90];
let findNumber= numbers.find((number)=>{
    return number===60
})
console.log(findNumber);

//Practise 2

let users=[{name:'Mohit', age:27},
    {name:'Rahul', age:19},
    {name:'Amit',age:20},
    {name:'Kartik', age:21}
]

let findUser= users.find((user)=>{
    return user.name==='Amit'
})

console.log(findUser)

//Practise 3

let numbers1 = [11, 15, 21, 24, 30, 42];
let result= numbers1.find((number1)=>{
    return number1%2===0
})
console.log(result)

//Practise 4

let employees = [
    { name: "Mohit", department: "QA", active: false },
    { name: "Rahul", department: "Development", active: true },
    { name: "Amit", department: "QA", active: true },
    { name: "Rohit", department: "QA", active: true }
];

let activeEmployees= employees.find((employee)=>{
    return employee.active===true && employee.department==='QA';
})
 console.log(activeEmployees);

 //Practise 5
 let products=[

    {id:101,name:"Laptop",price:5500},
    {id:102,name:"Mouse",price:2000},
    {id:103,name:"Keyboard",price:3000},
    {id:104,name:"Monitor",price:10000}

 ]

 let filteredProduct= products.find((product)=>{
    return product.id===103
 })

 console.log(filteredProduct)