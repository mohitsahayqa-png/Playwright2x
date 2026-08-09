/*Challenge 1 — Print All Fruits

Create an array:

let fruits = ["Apple", "Banana", "Mango", "Orange"]; */

let fruits = ["Apple", "Banana", "Mango", "Orange"];

for(let allfruits of fruits){
    console.log(allfruits);
}


/*Challenge 2 — Print Even Numbers

Create:

let numbers = [12, 7, 18, 25, 40, 9];

Using for...of, print only even numbers. */

let numbers = [12, 7, 18, 25, 40, 9];

for(evenNumbers of numbers){
    if(evenNumbers%2===0){
        console.log(evenNumbers);
    }
}

/*Challenge 3 — Print User Names

Create:

let users = [
    { name: "Mohit", role: "QA" },
    { name: "Rahul", role: "Admin" },
    { name: "Amit", role: "Developer" }
];

Using for...of, print only the names. */

let users = [
    { name: "Mohit", role: "QA" },
    { name: "Rahul", role: "Admin" },
    { name: "Amit", role: "Developer" }
];

for(let userName of users){
    console.log(userName.name);
}

/*Challenge 4 — Print Active Users

Create:

let users = [
    { name: "Mohit", active: true },
    { name: "Rahul", active: false },
    { name: "Rohit", active: true }
];

Using for...of, print only the names of active users. */

let users2 = [
    { name: "Mohit", active: true },
    { name: "Rahul", active: false },
    { name: "Rohit", active: true }
];

for (activeUsers of users2){
    if(activeUsers.active===true){
        console.log(activeUsers.name);
    }
}

/*Challenge 5 — Calculate Total

Create:

let marks = [80, 90, 75, 95]; */

let marks = [80, 90, 75, 95];

let num=0;
for(total of marks){
    num=num+total;
}



console.log(num);