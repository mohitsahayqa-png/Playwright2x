# 📘 JavaScript Objects

## 📖 What are Objects?

An **object** is a collection of **key-value pairs** used to store related data.

Unlike arrays (which use numeric indexes), objects use **named keys (properties)**.

```js
let user = {
  name: "John",
  age: 25
};
```

Think of an object as a **real-world thing**.

Example:

```js
let car = {
  brand: "BMW",
  model: "M4",
  color: "Black"
};
```

---

# 📝 Creating Objects

### Object Literal (Most Common)

```js
let user = {};
```

### Object Constructor (Rare)

```js
let user = new Object();
```

✅ Prefer **object literal `{}`**.

---

# 📝 Object Syntax

```js
let user = {
  name: "John",
  age: 25,
  isAdmin: true
};
```

Each property consists of:

```
key : value
```

Example:

```
name  -> "John"
age   -> 25
```

---

# 📌 Accessing Properties

### Dot Notation

```js
console.log(user.name);
console.log(user.age);
```

Output

```
John
25
```

---

### Bracket Notation

```js
console.log(user["name"]);
```

Useful when:

- Property contains spaces
- Property name is stored in a variable
- Property is dynamic

Example

```js
let user = {
    "first name": "John"
};

console.log(user["first name"]);
```

---

# ➕ Adding Properties

```js
user.city = "Delhi";
```

or

```js
user["country"] = "India";
```

---

# ❌ Deleting Properties

```js
delete user.age;
```

---

# 🏷️ Multi-word Property Names

Must be written inside quotes.

```js
let user = {
    "first name": "John"
};
```

Access using brackets.

```js
console.log(user["first name"]);
```

❌

```js
user.first name
```

---

# 🧠 Dot vs Bracket Notation

### Dot Notation

Use when property name is known.

```js
user.name
```

---

### Bracket Notation

Use when property name is dynamic.

```js
let key = "name";

console.log(user[key]);
```

Output

```
John
```

❌

```js
user.key
```

Looks for property literally named `"key"`.

---

# 💻 Computed Properties

Property names can come from variables.

```js
let fruit = "apple";

let bag = {
    [fruit]: 5
};

console.log(bag.apple);
```

Output

```
5
```

Without computed property:

```js
let bag = {};

bag[fruit] = 5;
```

---

# ✨ Property Shorthand

Instead of

```js
let name = "John";
let age = 25;

let user = {
    name: name,
    age: age
};
```

Write

```js
let user = {
    name,
    age
};
```

Much cleaner.

---

# 🔑 Property Names

Object property names can be almost anything.

```js
let obj = {
    for: 1,
    let: 2,
    return: 3
};
```

Reserved keywords are allowed as object keys.

Numbers automatically become strings.

```js
let obj = {
    1: "One"
};

console.log(obj["1"]);
console.log(obj[1]);
```

Both work.

---

# 🔍 Checking Property Exists

### Method 1 (Common)

```js
if(user.age !== undefined){
    console.log("Exists");
}
```

---

### Method 2 (Recommended)

Using **in** operator.

```js
"name" in user
```

Example

```js
console.log("age" in user);
```

Output

```
true
```

---

### Why use `in`?

Because a property may exist but contain `undefined`.

```js
let obj = {
    test: undefined
};

console.log(obj.test);           // undefined
console.log("test" in obj);      // true
```

---

# 🔁 Looping Through Objects

Use **for...in**

```js
for(let key in user){
    console.log(key);
    console.log(user[key]);
}
```

Output

```
name
John

age
25
```

Notice

```
user[key]
```

NOT

```
user.key
```

because `key` is a variable.

---

# 📌 Object Order

Objects are mostly ordered, but there's one exception.

### Integer keys

They are automatically sorted.

```js
let codes = {
    49: "Germany",
    41: "Switzerland",
    1: "USA"
};
```

Loop

```
1
41
49
```

NOT insertion order.

---

### String keys

Follow insertion order.

```js
let user = {
    name: "John",
    age: 25,
    city: "Delhi"
};
```

Loop

```
name
age
city
```

---

# ⚠️ Common Mistakes

### ❌ Using dot notation for dynamic properties

Wrong

```js
let key = "name";

console.log(user.key);
```

Correct

```js
console.log(user[key]);
```

---

### ❌ Forgetting quotes for properties with spaces

Wrong

```js
user.first name
```

Correct

```js
user["first name"]
```

---

### ❌ Comparing against undefined to check existence

Works in most cases

```js
user.age !== undefined
```

Better

```js
"age" in user
```

---

# 💡 Best Practices

- Prefer object literal `{}`.
- Use **dot notation** whenever possible.
- Use **bracket notation** for dynamic or multi-word properties.
- Use **property shorthand** when variable and key names are the same.
- Use **for...in** to iterate over object properties.
- Use **in** operator to check property existence.

---

# 🧠 Interview Tips

Know the difference between:

- Dot notation
- Bracket notation
- Property shorthand
- Computed properties
- `in` operator
- `for...in`
- Object vs Array

Common interview question:

```js
let key = "name";

let user = {
    name: "John"
};

console.log(user.key);
console.log(user[key]);
```

Answer

```
undefined
John
```

---

# 🚀 Quick Recap

- Objects store **key-value pairs**.
- Create using `{}`.
- Access properties using **dot** or **brackets**.
- Add properties using assignment.
- Delete properties using `delete`.
- Use **bracket notation** for dynamic keys.
- Use **computed properties** for variable-based keys.
- Use **property shorthand** (`name` instead of `name: name`).
- Check property existence with **`in`**.
- Loop through objects using **`for...in`**.
- Integer keys are sorted; string keys follow insertion order.
- Objects are best for **named data**, arrays are best for **ordered data**.