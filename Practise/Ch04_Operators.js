/*1. Arithmetic Operators

What will this code output?

let a = 10;
let b = 3;

console.log(a % b);
console.log(a / b);
console.log(a ** b);
Explain what % and ** do. */

let a = 10;
let b = 3;

console.log(a % b);//1
console.log(a / b);//3.3333
console.log(a ** b);//1000

/*Comparison Operators

What are the results of these comparisons?

console.log(5 == "5");
console.log(5 === "5");
console.log(null == undefined);
console.log(null === undefined);
Why are some results different? */

console.log(5 == "5");//true
console.log(5 === "5");//false
console.log(null == undefined);//true
console.log(null === undefined);//false

/*3. Logical Operators

Predict the output:

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isAdmin);
Explain how &&, ||, and ! work. */

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin);//false
console.log(isLoggedIn || isAdmin);//true
console.log(!isAdmin);//true

/*4. Assignment Operators

What will the final value of x be?

let x = 8;

x += 2;
x *= 3;
x -= 4;

console.log(x);
Rewrite the shorthand operators in long form. */

let x = 8;

x += 2;
x *= 3;
x -= 4;

console.log(x);//26

/*5. Mixed Operators Challenge

What does this output?

let score = 75;

let result = score >= 50 && score < 80
  ? "Pass"
  : "Fail";

console.log(result);
What operator is being used here?
What happens if score = 45? */
let score = 75;

let result = score >= 50 && score < 80
  ? "Pass"
  : "Fail";

console.log(result);//true

