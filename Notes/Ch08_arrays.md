# 📚 JavaScript Arrays

## What is an Array?

An **array** is a special object used to store an **ordered collection** of values.

Unlike objects (which use keys), arrays use **numeric indexes** starting from **0**.

```javascript
let fruits = ["Apple", "Orange", "Mango"];
```

```
Index:   0        1        2
Value: Apple   Orange   Mango
```

---

# Creating Arrays

### Array Literal (Recommended)

```javascript
let arr = [];
let fruits = ["Apple", "Orange", "Mango"];
```

### Using Constructor (Rarely Used)

```javascript
let arr = new Array();
let fruits = new Array("Apple", "Orange");
```

> Prefer `[]` because it's shorter and avoids confusion.

---

# Accessing Elements

```javascript
let fruits = ["Apple", "Orange", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Mango
```

---

# Updating Elements

```javascript
let fruits = ["Apple", "Orange"];

fruits[1] = "Banana";

console.log(fruits);
// ["Apple", "Banana"]
```

---

# Adding Elements

```javascript
let fruits = ["Apple"];

fruits[1] = "Orange";

console.log(fruits);
// ["Apple", "Orange"]
```

---

# Array Length

`length` returns the total number of elements.

```javascript
let fruits = ["Apple", "Orange", "Mango"];

console.log(fruits.length); // 3
```

---

# Last Element

### Traditional Way

```javascript
let fruits = ["Apple", "Orange", "Mango"];

console.log(fruits[fruits.length - 1]);
// Mango
```

### Modern Way (`at()`)

```javascript
console.log(fruits.at(-1));
// Mango
```

`at(-1)` means **last element**.

---

# Arrays Can Store Any Data Type

```javascript
let arr = [
    "Apple",
    10,
    true,
    {name: "John"},
    function () {
        console.log("Hello");
    }
];

console.log(arr[3].name); // John

arr[4](); // Hello
```

---

# Important Array Methods

## push()

Adds element(s) to the **end**.

```javascript
let arr = [1,2];

arr.push(3);

console.log(arr);
// [1,2,3]
```

Multiple values

```javascript
arr.push(4,5,6);
```

---

## pop()

Removes the **last** element.

```javascript
let arr = [1,2,3];

let value = arr.pop();

console.log(value); // 3
console.log(arr);   // [1,2]
```

---

## unshift()

Adds element(s) to the **beginning**.

```javascript
let arr = [2,3];

arr.unshift(1);

console.log(arr);
// [1,2,3]
```

---

## shift()

Removes the **first** element.

```javascript
let arr = [1,2,3];

let value = arr.shift();

console.log(value); // 1
console.log(arr);   // [2,3]
```

---

# Queue vs Stack

## Queue (FIFO)

**First In First Out**

Operations:

- push()
- shift()

```
Add → End
Remove ← Start
```

Example:

```
1 2 3

push(4)

1 2 3 4

shift()

2 3 4
```

---

## Stack (LIFO)

**Last In First Out**

Operations:

- push()
- pop()

```
Add → End
Remove ← End
```

Example:

```
1 2 3

push(4)

1 2 3 4

pop()

1 2 3
```

---

# Looping Through Arrays

## 1. for Loop

```javascript
let fruits = ["Apple","Orange","Mango"];

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
```

Use when you need the **index**.

---

## 2. for...of (Recommended)

```javascript
let fruits = ["Apple","Orange","Mango"];

for(let fruit of fruits){
    console.log(fruit);
}
```

Use when you only need the **values**.

---

## 3. for...in ❌

```javascript
for(let index in fruits){
    console.log(fruits[index]);
}
```

Avoid using this for arrays.

Reasons:

- Slower
- Loops over extra properties
- Meant for objects

---

# Copying Arrays

Arrays are copied **by reference**, not by value.

```javascript
let arr1 = ["Apple"];

let arr2 = arr1;

arr2.push("Orange");

console.log(arr1);
// ["Apple","Orange"]
```

Both variables point to the same array.

---

# Performance

## Fast Operations ✅

```javascript
push()

pop()
```

Reason:

No elements need to move.

---

## Slow Operations ❌

```javascript
shift()

unshift()
```

Reason:

All elements must be re-indexed.

---

# Array length Property

```javascript
let arr = [1,2,3];

console.log(arr.length);
// 3
```

You can even change it.

```javascript
arr.length = 2;

console.log(arr);
// [1,2]
```

Setting

```javascript
arr.length = 0;
```

clears the array.

---

# Multidimensional Arrays

Arrays can contain other arrays.

```javascript
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matrix[0][1]);
// 2
```

---

# new Array() Pitfall

```javascript
let arr = new Array(5);

console.log(arr.length);
// 5

console.log(arr[0]);
// undefined
```

It creates an empty array with length 5.

It **does NOT** create:

```javascript
[5]
```

Prefer using

```javascript
[]
```

---

# Arrays and ==

Never compare arrays using `==` or `===`.

```javascript
[] == []
// false

[1] == [1]
// false
```

Why?

Because arrays are **objects**, and objects are compared by **reference**, not by contents.

---

# Common Mistakes

### ❌

```javascript
arr[-1]
```

Use

```javascript
arr.at(-1)
```

---

### ❌

```javascript
for...in
```

Use

```javascript
for...of
```

or

```javascript
for
```

---

### ❌

```javascript
let arr2 = arr1;
```

This does **not** copy the array.

Both variables reference the same array.

---

# Quick Revision

## Create

```javascript
let arr = [];
```

## Access

```javascript
arr[0]
```

## Last Element

```javascript
arr.at(-1)
```

## Length

```javascript
arr.length
```

## Add End

```javascript
push()
```

## Remove End

```javascript
pop()
```

## Add Beginning

```javascript
unshift()
```

## Remove Beginning

```javascript
shift()
```

## Loop

```javascript
for
```

```javascript
for...of
```

## Clear Array

```javascript
arr.length = 0;
```

---

# Best Practices

✅ Prefer `[]` over `new Array()`

✅ Use `push()` and `pop()` whenever possible

✅ Use `for...of` to iterate values

✅ Use `arr.at(-1)` to get the last element

✅ Don't compare arrays using `==` or `===`

✅ Remember arrays are copied by **reference**

---

# Interview Questions

### Q1. Difference between `push()` and `unshift()`?

- `push()` → adds to end
- `unshift()` → adds to beginning

---

### Q2. Difference between `pop()` and `shift()`?

- `pop()` removes last element
- `shift()` removes first element

---

### Q3. Why is `shift()` slower than `pop()`?

Because every remaining element must be moved one position to the left.

---

### Q4. Why does `[] == []` return false?

Because arrays are objects, and objects are compared by reference.

---

### Q5. Which loop should you use for arrays?

✅ `for`

✅ `for...of`

❌ `for...in`