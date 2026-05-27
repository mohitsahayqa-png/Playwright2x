# JavaScript Data Types

## JavaScript is Dynamically Typed

* Variables can store any type of value.
* Type can change later.

```js
let message = "hello";
message = 123;
```

---

# 8 Basic Data Types in JavaScript

## Primitive Types (7)

1. Number
2. BigInt
3. String
4. Boolean
5. Null
6. Undefined
7. Symbol

## Non-Primitive Type (1)

8. Object

---

# 1. Number

Used for:

* Integers
* Floating point numbers

```js
let n = 123;
let x = 12.34;
```

## Special Numeric Values

### Infinity

```js
console.log(1 / 0); // Infinity
```

### NaN (Not a Number)

```js
console.log("abc" / 2); // NaN
```

* NaN spreads in calculations

```js
console.log(NaN + 1); // NaN
```

---

# Important

JavaScript math operations are safe:

* No fatal crash
* Invalid math usually returns `NaN`

---

# 2. BigInt

Used for very large integers.

Create using `n` at end.

```js
const bigInt = 12345678901234567890n;
```

---

# 3. String

Strings use:

* Double quotes `" "`
* Single quotes `' '`
* Backticks `` ` ` ``

```js
let name = "John";
```

## Template Literals (Backticks)

```js
let name = "John";

console.log(`Hello ${name}`);
console.log(`2 + 2 = ${2 + 2}`);
```

* `${}` works only in backticks

---

# No Character Type

JavaScript has no separate `char` type.

Single character is also a string.

```js
let ch = "A";
```

---

# 4. Boolean

Only 2 values:

* `true`
* `false`

```js
let isLoggedIn = true;
```

Comparison returns boolean:

```js
console.log(5 > 2); // true
```

---

# 5. Null

Represents:

* Empty value
* Unknown value

```js
let age = null;
```

* `null` is its own type

---

# 6. Undefined

Means:

* Value not assigned

```js
let data;

console.log(data); // undefined
```

Avoid assigning `undefined` manually.

Use `null` instead for empty values.

---

# 7. Symbol

Used for unique identifiers.

```js
let id = Symbol("id");
```

---

# 8. Object

Used for:

* Collections
* Complex data

```js
let user = {
  name: "John",
  age: 25
};
```

---

# typeof Operator

Used to check data type.

```js
typeof 123; // "number"
typeof "Hi"; // "string"
typeof true; // "boolean"
```

## Examples

```js
typeof undefined // "undefined"
typeof 10n // "bigint"
typeof Symbol("id") // "symbol"
typeof null // "object"
```

---

# Important typeof Notes

## Weird JavaScript Behavior

```js
typeof null // "object"
```

This is a known JavaScript bug.

`null` is NOT actually an object.

---

# typeof Syntax

Both are valid:

```js
typeof x
typeof(x)
```

---

# Quick Summary Table

| Type      | Example     |
| --------- | ----------- |
| number    | `123`       |
| bigint    | `123n`      |
| string    | `"Hello"`   |
| boolean   | `true`      |
| null      | `null`      |
| undefined | `undefined` |
| symbol    | `Symbol()`  |
| object    | `{}`        |

---

# Most Important Interview Points

* JavaScript is dynamically typed
* `NaN` means invalid math
* `Infinity` is a special number
* BigInt uses `n`
* Template literals use backticks
* No `char` type in JavaScript
* `null` vs `undefined`
* `typeof null` returns `"object"` (bug)
* Objects are non-primitive
