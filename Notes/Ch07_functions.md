# JavaScript Functions

Functions are reusable blocks of code that perform a specific task.

They help:
- Avoid code duplication
- Improve readability
- Organize code into smaller pieces
- Make code easier to test and maintain

---

# Why Functions?

Without functions:

```js
console.log("Hello");
console.log("Hello");
console.log("Hello");
```

With functions:

```js
function sayHello() {
  console.log("Hello");
}

sayHello();
sayHello();
sayHello();
```

---

# Function Declaration

### Syntax

```js
function functionName(parameters) {
  // code
}
```

### Example

```js
function showMessage() {
  console.log("Hello World");
}

showMessage();
```

### Output

```text
Hello World
```

---

# Calling a Function

A function runs only when it is called.

```js
function greet() {
  console.log("Hi");
}

greet();
```

### Function Call

```js
greet();
```

---

# Function Execution Flow

```text
Call Function
      ↓
Enter Function
      ↓
Execute Code
      ↓
Exit Function
```

---

# Local Variables

Variables declared inside a function exist only inside that function.

```js
function showMessage() {
  let message = "Hello";
  console.log(message);
}

showMessage();

console.log(message);
```

❌ Error

Because `message` is local to the function.

---

# Outer Variables

Functions can access variables declared outside them.

```js
let userName = "John";

function greet() {
  console.log(userName);
}

greet();
```

Output:

```text
John
```

---

# Modifying Outer Variables

Functions can change outer variables.

```js
let userName = "John";

function changeName() {
  userName = "Bob";
}

changeName();

console.log(userName);
```

Output:

```text
Bob
```

⚠️ Avoid modifying global variables when possible.

---

# Variable Shadowing

Local variables override outer variables with the same name.

```js
let userName = "John";

function greet() {
  let userName = "Bob";

  console.log(userName);
}

greet();

console.log(userName);
```

Output:

```text
Bob
John
```

The local variable is used inside the function.

---

# Global Variables

Variables declared outside all functions are global.

```js
let appName = "My App";
```

Global variables can be accessed from anywhere.

### Best Practice

Use as few global variables as possible.

Prefer:
- Parameters
- Local variables

---

# Parameters

Parameters allow functions to receive data.

### Syntax

```js
function greet(name) {
  console.log(name);
}
```

### Example

```js
function greet(name) {
  console.log("Hello " + name);
}

greet("John");
```

Output:

```text
Hello John
```

---

# Multiple Parameters

```js
function showMessage(from, text) {
  console.log(from + ": " + text);
}

showMessage("Ann", "Hello");
```

Output:

```text
Ann: Hello
```

---

# Parameters vs Arguments

### Parameters

Variables listed in function declaration.

```js
function greet(name)
```

`name` is a parameter.

---

### Arguments

Values passed when calling the function.

```js
greet("John");
```

`"John"` is an argument.

---

# Default Parameters

Used when an argument is not provided.

### Syntax

```js
function greet(name = "Guest") {
  console.log(name);
}
```

### Example

```js
greet();
```

Output:

```text
Guest
```

---

### Explicit undefined

Default values also work with `undefined`.

```js
function greet(name = "Guest") {
  console.log(name);
}

greet(undefined);
```

Output:

```text
Guest
```

---

# Return Statement

Functions can return a value.

### Syntax

```js
return value;
```

### Example

```js
function sum(a, b) {
  return a + b;
}

let result = sum(2, 3);

console.log(result);
```

Output:

```text
5
```

---

# Why Return?

Without return:

```js
function sum(a, b) {
  a + b;
}

let result = sum(2, 3);

console.log(result);
```

Output:

```text
undefined
```

Because nothing was returned.

---

# return Stops Execution

```js
function checkAge(age) {
  if (age >= 18) {
    return true;
  }

  return false;
}
```

Once `return` executes, the function ends immediately.

---

# Early Return Pattern

```js
function showMovie(age) {
  if (age < 18) {
    return;
  }

  console.log("Showing movie");
}
```

This avoids unnecessary nesting.

---

# Functions Return undefined by Default

### No return

```js
function doNothing() {}

console.log(doNothing());
```

Output:

```text
undefined
```

---

### Empty return

```js
function doNothing() {
  return;
}
```

Also returns:

```text
undefined
```

---

# Important Return Rule

❌ Wrong

```js
return
a + b;
```

JavaScript treats it as:

```js
return;
```

---

✅ Correct

```js
return a + b;
```

or

```js
return (
  a + b
);
```

---

# Function Naming

Functions represent actions.

Use verb-based names.

### Good Examples

```js
showMessage()
getAge()
calcTotal()
createUser()
checkPermission()
```

---

# Common Function Prefixes

| Prefix | Purpose |
|----------|----------|
| get... | Return a value |
| calc... | Calculate something |
| create... | Create something |
| show... | Display something |
| check... | Return true/false |

---

# One Function = One Responsibility

A function should do one thing only.

### Good

```js
function calculateTotal() {
}
```

Only calculates.

---

### Bad

```js
function calculateTotal() {
  // calculate
  // save to database
  // send email
}
```

Multiple responsibilities.

---

# Functions Improve Readability

Bad:

```js
for (let i = 2; i < n; i++) {
  let prime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      prime = false;
    }
  }

  if (prime) {
    console.log(i);
  }
}
```

---

Better:

```js
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
```

```js
if (isPrime(number)) {
  console.log(number);
}
```

The function name acts like documentation.

---

# Function Best Practices

✅ Use descriptive names

```js
getUser()
checkAge()
createOrder()
```

---

✅ Keep functions small

---

✅ Use parameters instead of globals

---

✅ Return values instead of modifying outer variables

---

✅ One function = one job

---

# Quick Revision

## Function Declaration

```js
function greet(name) {
  console.log(name);
}
```

---

## Function Call

```js
greet("John");
```

---

## Parameter

```js
function greet(name)
```

`name`

---

## Argument

```js
greet("John");
```

`"John"`

---

## Return

```js
return value;
```

---

## Default Parameter

```js
function greet(name = "Guest")
```

---

# Key Takeaways

- Functions are reusable blocks of code.
- Functions run only when called.
- Parameters receive data.
- Arguments pass data.
- Local variables exist only inside functions.
- Functions can access outer variables.
- `return` sends a value back.
- Missing return = `undefined`.
- Use descriptive function names.
- One function should perform one task.
- Prefer local variables and parameters over globals.