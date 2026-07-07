/*Practice (before challenges)

Write these in 08-objects.js:

Practice (before challenges)

Write these in 08-objects.js:

Create a student object with name, age, and marks.
Print the student's name.
Print the student's marks.
Update the marks.
Add a city property.
Delete the age property.
Print the entire object.
Create an employee object with 5 properties.
Print each property individually.
Use a for...in loop to print all keys and values.
Print the student's name.
Print the student's marks.
Update the marks.
Add a city property.
Delete the age property.
Print the entire object.
Create an employee object with 5 properties.
Print each property individually.
Use a for...in loop to print all keys and values. */

//Create a student object with name, age, and marks.

let student={
    name:'Mohit',
    age:18,
    marks:17,
    city:'Faridabad',
    pinCode:''
}

//Print the student's name.
console.log(student.name);

//Print the student's marks.
console.log(student.marks);

//Update the marks.
student.marks=87;
console.log(student.marks);

//Add a city property.
student.cityNew='Delhi';
console.log(student.cityNew);
console.log(student.city);

//Delete the age property.
delete student.age;
console.log(student.age);

//Validate the exitence using 'in'

console.log('name' in student);
console.log('pinCode' in student);

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2024
};

for(let key in car){
    console.log(key, car[key]);
}
