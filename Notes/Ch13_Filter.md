# JavaScript `filter()`

## 1. What is `filter()`?

`filter()` is used to select elements from an array based on a condition.

It creates a **new array** containing only the elements for which the condition returns `true`.

### Basic Syntax

```javascript
let result = array.filter((item) => {
    return condition;
});
```

---

## 2. Basic Example

```javascript
let numbers = [10, 15, 20, 25, 30];

let evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers);
```

Output:

```text
[10, 20, 30]
```

### How it works

```text
10 → even → true  → KEEP
15 → odd  → false → REMOVE
20 → even → true  → KEEP
25 → odd  → false → REMOVE
30 → even → true  → KEEP
```

---

## 3. Important Rule

The condition inside `filter()` should return:

```text
true  → Keep the item
false → Remove the item
```

Example:

```javascript
let numbers = [5, 10, 15, 20];

let result = numbers.filter((number) => {
    return number > 10;
});

console.log(result);
```

Output:

```text
[15, 20]
```

---

## 4. `filter()` Does Not Modify the Original Array

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.filter((number) => {
    return number > 20;
});

console.log(result);
console.log(numbers);
```

Output:

```text
[30, 40]
[10, 20, 30, 40]
```

The original array remains unchanged.

---

# 5. `filter()` vs `map()`

This is very important.

## `map()`

`map()` transforms every item.

```javascript
let numbers = [1, 2, 3];

let result = numbers.map((number) => {
    return number * 2;
});

console.log(result);
```

Output:

```text
[2, 4, 6]
```

Think:

```text
MAP = Transform
```

---

## `filter()`

`filter()` selects items based on a condition.

```javascript
let numbers = [1, 2, 3];

let result = numbers.filter((number) => {
    return number > 1;
});

console.log(result);
```

Output:

```text
[2, 3]
```

Think:

```text
FILTER = Select
```

---

# 6. `map()` vs `filter()` Quick Comparison

Given:

```javascript
let numbers = [1, 2, 3, 4];
```

### `map()`

```javascript
let result = numbers.map((number) => {
    return number * 2;
});
```

Result:

```text
[2, 4, 6, 8]
```

Every item is transformed.

---

### `filter()`

```javascript
let result = numbers.filter((number) => {
    return number > 2;
});
```

Result:

```text
[3, 4]
```

Only matching items are selected.

---

# 7. Filtering Strings

```javascript
let names = ["Mohit", "Rahul", "Amit", "Rohit"];

let result = names.filter((name) => {
    return name.length > 4;
});

console.log(result);
```

Output:

```text
["Mohit", "Rahul", "Rohit"]
```

The condition checks the length of each name.

---

# 8. Filtering Objects

`filter()` is very useful when working with arrays of objects.

```javascript
let users = [
    { name: "Mohit", active: true },
    { name: "Rahul", active: false },
    { name: "Amit", active: true }
];

let activeUsers = users.filter((user) => {
    return user.active === true;
});

console.log(activeUsers);
```

Output:

```text
[
    { name: "Mohit", active: true },
    { name: "Amit", active: true }
]
```

### Important

`filter()` returns the complete object.

It does not return only the matching property.

---

# 9. Filtering Objects Using Multiple Conditions

We can use logical operators such as `&&`.

```javascript
let employees = [
    { name: "Mohit", department: "QA", active: true },
    { name: "Rahul", department: "QA", active: false },
    { name: "Amit", department: "Development", active: true }
];

let result = employees.filter((employee) => {
    return employee.department === "QA" && employee.active === true;
});

console.log(result);
```

Output:

```text
[
    { name: "Mohit", department: "QA", active: true }
]
```

Both conditions must be true.

---

# 10. `filter()` with OR

We can also use `||`.

```javascript
let employees = [
    { name: "Mohit", department: "QA" },
    { name: "Rahul", department: "Admin" },
    { name: "Amit", department: "Development" }
];

let result = employees.filter((employee) => {
    return employee.department === "QA" ||
           employee.department === "Admin";
});

console.log(result);
```

Output:

```text
[
    { name: "Mohit", department: "QA" },
    { name: "Rahul", department: "Admin" }
]
```

---

# 11. Arrow Function Short Syntax

Normal syntax:

```javascript
let evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});
```

Short syntax:

```javascript
let evenNumbers = numbers.filter(number => number % 2 === 0);
```

Both do the same thing.

---

# 12. `filter()` Mental Model

Think of `filter()` like a gate.

```text
Array
  ↓
Item
  ↓
Condition
  ↓
 ┌──────────────┐
 │              │
true          false
 │              │
KEEP          REMOVE
 │
 ↓
New Array
```

Example:

```javascript
let numbers = [10, 15, 20, 25];

let result = numbers.filter(number => number % 2 === 0);
```

```text
10 → true  → KEEP
15 → false → REMOVE
20 → true  → KEEP
25 → false → REMOVE
```

Result:

```text
[10, 20]
```

---

# 13. `forEach()` vs `map()` vs `filter()`

| Method | Purpose | Returns New Array? |
|---|---|---|
| `forEach()` | Perform an action | No |
| `map()` | Transform every item | Yes |
| `filter()` | Select matching items | Yes |

### Easy way to remember

```text
forEach() → DO something
map()     → CHANGE something
filter()  → SELECT something
```

---

# 14. Playwright Relevance ⭐

`filter()` is useful in automation when working with collections of elements or data.

For example, imagine we have information about buttons:

```javascript
let buttons = [
    { name: "Login", visible: true },
    { name: "Search", visible: false },
    { name: "Logout", visible: true }
];

let visibleButtons = buttons.filter(button => button.visible === true);

console.log(visibleButtons);
```

Result:

```text
[
    { name: "Login", visible: true },
    { name: "Logout", visible: true }
]
```

This is similar to the type of filtering and selection you'll perform when working with UI elements and test data in Playwright.

---

# 15. Key Points to Remember

1. `filter()` creates a new array.
2. It does not modify the original array.
3. `true` means KEEP.
4. `false` means REMOVE.
5. It is mainly used for selecting items.
6. It works with numbers, strings, and objects.
7. Conditions can use `&&`, `||`, comparison operators, etc.
8. `filter()` normally returns an array.
9. `map()` transforms; `filter()` selects.
10. `filter()` is useful when working with collections of UI/test data in Playwright.

## One-line memory trick

```text
map()      → Transform
filter()   → Select
forEach()  → Perform an action
```
