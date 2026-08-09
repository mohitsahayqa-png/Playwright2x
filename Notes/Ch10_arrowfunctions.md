# 📘 JavaScript Arrow Functions

## 📖 What are Arrow Functions?

Arrow Functions are a **shorter and cleaner way** to write functions in JavaScript.

They are mainly used for:
- Simple one-line functions
- Callbacks
- Array methods (`forEach`, `map`, `filter`, etc.)

They use the **arrow (`=>`) syntax**.

---

# 📝 Basic Syntax

### Regular Function

```js
function add(a, b) {
    return a + b;
}
```

### Arrow Function

```js
let add = (a, b) => a + b;
```

Both produce the same result.

---

# 📌 Arrow Function Syntax

### Two or More Parameters

```js
let add = (a, b) => a + b;
```

---

### One Parameter

If there is only **one parameter**, parentheses are optional.

```js
let square = n => n * n;
```

Same as

```js
let square = (n) => n * n;
```

Both are valid.

---

### No Parameters

Parentheses are required.

```js
let greet = () => "Hello";
```

Example

```js
console.log(greet());
```

Output

```
Hello
```

---

# 🔁 Implicit Return

If the function contains **only one expression**, JavaScript automatically returns it.

```js
let multiply = (a, b) => a * b;
```

Equivalent to

```js
function multiply(a, b) {
    return a * b;
}
```

No need to write `return`.

---

# 📝 Multiline Arrow Functions

If the function body contains **multiple statements**, use curly braces `{}`.

```js
let add = (a, b) => {
    let result = a + b;
    return result;
};
```

✅ When using `{}`, you **must write `return`** if you want to return a value.

---

# ⚠️ When is `return` Required?

### Without Curly Braces

```js
let add = (a, b) => a + b;
```

`return` is automatic.

---

### With Curly Braces

```js
let add = (a, b) => {
    return a + b;
};
```

`return` is mandatory.

---

### Wrong

```js
let add = (a, b) => {
    a + b;
};
```

Output

```
undefined
```

Because nothing is returned.

---

# 📌 Arrow Function Examples

### Example 1

```js
let greet = () => "Hello";

console.log(greet());
```

Output

```
Hello
```

---

### Example 2

```js
let double = n => n * 2;

console.log(double(5));
```

Output

```
10
```

---

### Example 3

```js
let isAdult = age => age >= 18;

console.log(isAdult(20));
```

Output

```
true
```

---

### Example 4

```js
let max = (a, b) => a > b ? a : b;

console.log(max(10, 20));
```

Output

```
20
```

---

# 🆚 Regular Function vs Arrow Function

### Regular Function

```js
function add(a, b) {
    return a + b;
}
```

---

### Arrow Function

```js
let add = (a, b) => a + b;
```

Arrow functions are shorter and easier to read.

---

# 🎯 Using Arrow Functions with Ternary Operator

Arrow functions are often used with conditional operators.

```js
let age = 20;

let welcome = age >= 18
    ? () => "Welcome"
    : () => "Access Denied";

console.log(welcome());
```

Output

```
Welcome
```

---

# ⚠️ Common Mistakes

### ❌ Forgetting `return` in multiline functions

Wrong

```js
let add = (a, b) => {
    a + b;
};
```

Returns

```
undefined
```

Correct

```js
let add = (a, b) => {
    return a + b;
};
```

---

### ❌ Forgetting parentheses for zero parameters

Wrong

```js
let greet = => "Hello";
```

Correct

```js
let greet = () => "Hello";
```

---

### ❌ Writing unnecessary parentheses for one parameter

Both are valid

```js
let square = n => n * n;
```

```js
let square = (n) => n * n;
```

The first is shorter and commonly used.

---

# 💡 Best Practices

- Use arrow functions for **small and simple functions**.
- Use arrow functions for **callbacks**.
- Use **implicit return** for one-line functions.
- Use curly braces only when multiple statements are needed.
- Always remember to write `return` inside `{}`.

---

# 🧠 Interview Tips

Know these syntax variations:

### No Parameters

```js
() => {}
```

### One Parameter

```js
x => {}
```

### Multiple Parameters

```js
(a, b) => {}
```

### Implicit Return

```js
(a, b) => a + b
```

### Explicit Return

```js
(a, b) => {
    return a + b;
}
```

A very common interview question:

```js
let add = (a, b) => {
    a + b;
};

console.log(add(2, 3));
```

Answer

```
undefined
```

because `return` is missing.

---

# 🚀 Quick Recap

- Arrow functions are a **shorter syntax** for writing functions.
- Syntax:

```js
(parameters) => expression
```

- One parameter → parentheses are optional.
- Zero parameters → `()` is required.
- Multiple parameters → parentheses are required.
- One-line functions automatically return the expression.
- Multiline functions require `{}` and an explicit `return`.
- Arrow functions are commonly used in callbacks and array methods.
```