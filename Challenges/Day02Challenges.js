/*Challenge 1 — Identify Data Types

Create variables with:

string
number
boolean
undefined */

let name='Rahul';
let num=1213;
let isNight= false;
let system;
console.log(typeof name);
console.log(typeof num);
console.log(typeof isNight);
console.log(typeof system);

/*Challenge 2 — Calculator

Create:

let a = 20;
let b = 5;

Perform:

addition
subtraction
multiplication
division */

let a = 20;
let b = 5;

//addition
let c=a+b;
console.log(c);

//Subtraction
let d=a-b;
console.log(d);

//Mutliplication
let e= a*b;
console.log(e);

//Division
let f= a/b;
console.log(f);

/*Challenge 3 — Even or Odd

Check whether:

10

is even or odd using %. */

let numnew=10;
let g=numnew%2;
if(g===0){
  console.log("Even");
}
else{
console.log("Odd");
}

/*Challenge 4 — Age Eligibility

Create:

let age = 18;

Print:

true

if age is greater than or equal to 18.
 */

let age = 18;
console.log(age>=18);

/*Challenge 5 — String Combination

Combine:

firstName
lastName

Print full name. */

let firstName='Mohit';
let lastName='Sahay'
let fullName=firstName + " " + lastName;
console.log(fullName);

/*Challenge 6 — Marks Percentage

Store marks of 3 subjects.

Calculate:

total
average */


let marks = {

    maths : 88,
    chemistry : 76,
    physics: 66


};
//Total
marks.total= marks.maths + marks.chemistry + marks.physics;
console.log(marks.total)

//Average
averageMarks= (marks.total/3) + '%';
console.log(averageMarks);

let x=5;
x+=3;
console.log(x);


