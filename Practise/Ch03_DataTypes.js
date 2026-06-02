let message=123;
message="one two three";
console.log(message); // Output: one two three 

//Number data type
let num1=10;
let num2=20.5;
console.log(num1); // Output: 10
console.log(num2); // Output: 20.5

//Special numeric values
let num3=23;
let num4=0;
console.log(num3/0); // Output: Infinity
console.log(num4/0); // Output: NaN

//Bigint data type
let bigInt1=1234567890123456789012345678901234567890n;
console.log(bigInt1); // Output: 1234567890123456789012345678901234567890n
bigInt2=1234567890123456789012345678901234567890n;
console.log(bigInt2); // Output: 1234567890123456789012345678901234567890n

//String data type
let str1="Hello, World!";
let str2='JavaScript is fun!';
console.log(str1); // Output: Hello, World!
console.log(str2); // Output: JavaScript is fun!

//String using backticks
let name="Alice";
let greeting=`Hello, ${name}!`;
let morningGreeting=`Good evening ${greeting}`;
console.log(greeting); // Output: Hello, Alice!
console.log(morningGreeting); // Output: Good evening Hello, Alice!

//Boolean data type
console.log(5>2); // Output: true
console.log(5<2); // Output: false

//Null data type
let nullValue=null;
console.log(nullValue); // Output: null

//Undefined data type
let undefinedValue;
console.log(undefinedValue); // Output: undefined

//Symbol data type
let sym1=Symbol("unique");
let sym2=Symbol("unique");
console.log(sym1); // Output: Symbol(unique)
console.log(sym2); // Output: Symbol(unique)
console.log(sym1===sym2); // Output: false

//Object data type
let person={
    name:"John",
    age:30,
    isStudent:false
};
console.log(person); // Output: { name: 'John', age: 30, isStudent: false }

//Typeof operator
console.log(typeof message);
console.log(typeof sym1); // Output: symbol 
console.log(typeof person); // Output: object