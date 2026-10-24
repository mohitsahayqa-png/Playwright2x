# JavaScript Destructuring Assignment — Study Notes

## 1. What is destructuring?

**Destructuring assignment** is syntax that lets you unpack values from arrays or properties from objects into separate variables.

It makes it easier to work with selected data without repeatedly accessing array indexes or object properties.

```javascript
const user = { name: "John", age: 30 };
const { name, age } = user;

console.log(name); // John
console.log(age);  // 30
```

Destructuring copies values into variables; it does **not** modify the original array or object.

---

## 2. Array destructuring

Array destructuring assigns values by **position**.

```javascript
const arr = ["John", "Smith"];
const [firstName, surname] = arr;

console.log(firstName); // John
console.log(surname);   // Smith
```

This is similar to writing:

```javascript
const firstName = arr[0];
const surname = arr[1];
```

### Destructure the result of another expression

```javascript
const [firstName, surname] = "John Smith".split(" ");

console.log(firstName); // John
console.log(surname);  // Smith
```

### Skip elements with commas

Use an extra comma to skip an element you do not need.

```javascript
const [firstName, , title] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic"
];

console.log(title); // Consul
```

The second item is skipped. The third item is assigned to `title`.

### Works with iterables

Array destructuring can work with other iterable values, not just arrays.

```javascript
const [a, b, c] = "abc";
console.log(a, b, c); // a b c

const [one, two, three] = new Set([1, 2, 3]);
console.log(one, two, three); // 1 2 3
```

### Assign to existing properties

The left side can contain assignable targets such as object properties.

```javascript
const user = {};
[user.name, user.surname] = "John Smith".split(" ");

console.log(user.name);    // John
console.log(user.surname); // Smith
```

### Loop through key-value pairs with destructuring

`Object.entries()` returns an iterable of key-value pairs.

```javascript
const user = {
  name: "John",
  age: 30
};

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// name: John
// age: 30
```

A `Map` is also iterable as key-value pairs:

```javascript
const user = new Map();
user.set("name", "John");
user.set("age", 30);

for (const [key, value] of user) {
  console.log(`${key}: ${value}`);
}
```

### Swap variables

Destructuring can swap values without a separate temporary variable.

```javascript
let guest = "Jane";
let admin = "Pete";

[guest, admin] = [admin, guest];

console.log(guest, admin); // Pete Jane
```

### The rest pattern (`...`)

Use `...rest` at the end to collect remaining array items into a new array.

```javascript
const [first, second, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic"
];

console.log(first);  // Julius
console.log(second); // Caesar
console.log(rest);   // ["Consul", "of the Roman Republic"]
```

Without `...rest`, extra items are ignored.

### Default values

If an array does not contain a value for a variable, that variable receives `undefined` unless a default is provided.

```javascript
const [firstName, surname] = [];

console.log(firstName); // undefined
console.log(surname);   // undefined
```

Provide a default using `=`:

```javascript
const [name = "Guest", surname = "Anonymous"] = ["Julius"];

console.log(name);    // Julius
console.log(surname); // Anonymous
```

A default value is used only when the corresponding value is `undefined`. Default expressions, including function calls, are evaluated only when needed.

---

## 3. Object destructuring

Object destructuring assigns values by **property name**, so the order does not matter.

```javascript
const options = {
  title: "Menu",
  width: 100,
  height: 200
};

const { title, width, height } = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
```

### Rename a variable

Use `propertyName: variableName` to store a property in a differently named variable.

```javascript
const options = {
  title: "Menu",
  width: 100,
  height: 200
};

const { width: w, height: h, title } = options;

console.log(w);     // 100
console.log(h);     // 200
console.log(title); // Menu
```

Remember: `width: w` means "take the `width` property and assign it to `w`."

### Default values

If a property is missing or its value is `undefined`, a default can be used.

```javascript
const options = { title: "Menu" };

const { width = 100, height = 200, title } = options;

console.log(title);  // Menu