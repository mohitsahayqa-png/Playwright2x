//Example 1 

const greetings=()=>{console.log('Hello')}

greetings();

//Example 2 — One Parameter

const greet=(name)=>{console.log(`Hello ${name}`)}

greet('Mohit');

//Example 3 — Multiple Parameters

const add=(a,b)=>{console.log(a+b)}
add(5,10);

//Example 4 — Returning a Value

const multiply=(a,b)=>{return a*b}
console.log(multiply(8,8));

/*Practice 1 — Basic Arrow Function

Create an arrow function that prints:

Hello JavaScript

Call it once. */

const meet=()=>{console.log('Hello JavaScript')}
meet();

/*Practice 2 — Greeting

Create an arrow function:

greet(name)

Print:

Hello Mohit

Call it with:

Mohit
Rahul
Amit */

const greetNew=(nameNew)=>{console.log(nameNew)}
greetNew('Mohit')
greetNew('Rahul')
greetNew('Amit')

/*Practice 3 — Addition

Create:

add(a, b)

Print the sum.

Example:

10 + 20 = 30 */

const addNew=(x,y)=>{console.log(x+y)}
addNew(10,20);

/*Practice 4 — Multiplication

Create:

multiply(a, b)

Return the multiplication result.

Store it in a variable and print it. */

const multiplyNew=(u,v)=>{return u*v}
let result=multiplyNew(12,10);
console.log(result);

/*Practice 5 — Square

Create:

square(number)

Return the square using the short arrow function syntax (no {} and no return).

Example:

square(6)

Output:

36 */

const square=(number)=>number*number;
console.log(square(6));

/*Practice 6 — Even or Odd

Create:

isEven(number)

Return:

true

or

false

Use the short arrow syntax.

Example:

isEven(12)

Output:

true */

const isEven=(numberNew)=>{if(numberNew%2===0){return true}else{return false}};

console.log(isEven(7));

/*Practice 8 — Largest Number

Create:

largest(a, b)

Return the larger number.

Print the result. */

const largest=(a,b)=>{if(a>b){return a}else{return b}}
console.log(largest(111,16));
