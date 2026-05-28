/*1. Positive or Negative

Write a program that checks whether a number is positive. */

let num1=5;

if(num1>=0){
    console.log("Number is Positive");
}

/*2. Even or Odd

Check whether a number is even or odd using if. */

let num2=9;

if(num2%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}

/*3. Eligible to Vote

Check if a person can vote.

Condition:

age >= 18 → "Eligible"
otherwise → "Not Eligible" */

let age=19;
if(age>=18) {
    console.log('Eligible');
}
else{
    console.log('Not Eligible');
}

/*4. Pass or Fail

Check exam result.

Condition:

marks >= 40 → "Pass" */

let marks=43;
if(marks>=43){
    console.log('Pass');
}
else{
    console.log('Fail');
}

/*5. Check Password
let password = "admin123";

If password equals "admin123":

Access Granted

otherwise:

Wrong Password */

let password='admin123';
if(password==='admin1234'){
    console.log('Access Granted');
}
else{
    console.log('Not Granted');
}

/*6. Greater Number

Compare two numbers and print the greater one.

Example:

let a = 10;
let b = 20;

Output:

20 is greater */

let a = 10;
let b = 20;

if(a>b){
    console.log(a+"is greater");
}
else{
    console.log(b+" is greater");
}

/*7. Divisible by 5

Check if a number is divisible by 5.*/

let num4= 30;

if(num4%5==0){
    console.log('Divisible by 5');
}
else{
    console.log('Not Divisible by 5');
}

/*9. Username Validation

Check if username is empty.

Example:

let username = "";

If empty:

Username required */

let username='';

if(username==''){
    console.log('Empty UserName');
}
else{
    console.log('Valid UserName');
}