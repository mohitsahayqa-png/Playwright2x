/*Challenge 1

Create a student object with:

name
age
city
marks

Print all four properties individually. */

let student ={

    name: "Mohit",
    age: 21,
    city: "Faridabad",    
    marks: 98

}

console.log(student.name);
console.log(student.age);
console.log(student.city);
console.log(student.marks);

/*Challenge 2

Create an employee object with:

name
employeeId
department
salary
location

Print the complete object. */

let employee = {
    name: 'Mohit Sahay',
    employeeId: 'TS125',
    department:'QA',
    salary:10000,
    location:'Noida'

}

console.log(employee);

/*Challenge 3

Update:

salary

to a new value.

Print the object again. */

employee.salary=20000;

console.log(employee);

/*Challenge 4

Add a new property:

experience

Print the updated object. */

employee.experience='8 years'

console.log(employee);

/*Challenge 5

Delete:

location

Print the object. */

delete employee.location
console.log(employee);

/*Challenge 6

Using for...in, print only the keys of this object:

let browser = {
    name: "Chrome",
    version: "137",
    platform: "Windows"
};

Expected:

name
version
platform */

let browser = {
    name: "Chrome",
    version: "137",
    platform: "Windows"
};

for(let key in browser){
    console.log(key);
}

/*Challenge 7

Print only the values.

Expected:

Chrome
137
Windows */

for(let key in browser){
    console.log(browser[key]);
}

/*Challenge 8

Print both:

name : Chrome
version : 137
platform : Windows

(Hint: Use a template literal if you'd like to practice it.) */

for(let key in browser){
    console.log(`${key} : ${browser[key]}`);
}

/*Challenge 9

Count how many properties exist in the object.

Expected:

3

Hint: Create a counter and increment it inside the for...in loop. */

count=0;
for(let key in browser){
    count++
}

console.log(count);

/*Challenge 10

Check whether the object has a property called:

platform

Print:

Platform Found

or

Platform Not Found

Hint: Compare each key while looping. */

for(let key in browser){
    if(key=='platform'){
        console.log('Platform Found')
    }
}
