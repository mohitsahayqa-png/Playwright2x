# Array Methods in JavaScript

## 📌 What are Array Methods?

Array methods are built-in functions that help us manipulate, search, transform, and iterate over arrays.

---

# 1. Add & Remove Elements

## push()

Adds element(s) to the end of the array.

### Syntax

```javascript
arr.push(item1, item2);
```

### Example

```javascript
let fruits = ["Apple", "Orange"];

fruits.push("Mango");

console.log(fruits);
```

**Output**

```
["Apple", "Orange", "Mango"]
```

---

## pop()

Removes the last element.

### Syntax

```javascript
arr.pop();
```

### Example

```javascript
let fruits = ["Apple", "Orange", "Mango"];

let removed = fruits.pop();

console.log(removed);
console.log(fruits);
```

**Output**

```
Mango
["Apple","Orange"]
```

---

## shift()

Removes the first element.

```javascript
let fruits = ["Apple","Orange","Mango"];

fruits.shift();

console.log(fruits);
```

**Output**

```
["Orange","Mango"]
```

---

## unshift()

Adds element(s) to the beginning.

```javascript
let fruits = ["Orange","Mango"];

fruits.unshift("Apple");

console.log(fruits);
```

**Output**

```
["Apple","Orange","Mango"]
```

---

# 2. splice()

Swiss Army Knife of arrays.

Used to

- Remove elements
- Insert elements
- Replace elements

### Syntax

```javascript
arr.splice(start, deleteCount, item1, item2...);
```

---

## Remove

```javascript
let arr = ["I","love","JavaScript"];

arr.splice(1,1);

console.log(arr);
```

Output

```
["I","JavaScript"]
```

---

## Replace

```javascript
let arr = ["I","love","JavaScript"];

arr.splice(1,2,"like","Python");

console.log(arr);
```

Output

```
["I","like","Python"]
```

---

## Insert

```javascript
let arr = ["I","JavaScript"];

arr.splice(1,0,"love");

console.log(arr);
```

Output

```
["I","love","JavaScript"]
```

---

## Returns Removed Elements

```javascript
let arr = ["A","B","C"];

let removed = arr.splice(1,1);

console.log(removed);
```

Output

```
["B"]
```

---

## Negative Index

```javascript
let arr = [1,2,5];

arr.splice(-1,0,3,4);

console.log(arr);
```

Output

```
[1,2,3,4,5]
```

---

# 3. slice()

Returns a copy of part of an array.

Original array remains unchanged.

### Syntax

```javascript
arr.slice(start,end);
```

---

### Example

```javascript
let arr = ["A","B","C","D"];

console.log(arr.slice(1,3));
```

Output

```
["B","C"]
```

---

### Copy Array

```javascript
let copy = arr.slice();
```

Creates a shallow copy.

---

# 4. concat()

Combines arrays.

Returns a new array.

### Syntax

```javascript
arr.concat(array1,array2,...);
```

### Example

```javascript
let arr1 = [1,2];

let arr2 = [3,4];

console.log(arr1.concat(arr2));
```

Output

```
[1,2,3,4]
```

---

# 5. forEach()

Runs a function for every element.

Does **NOT** return a new array.

### Syntax

```javascript
arr.forEach(function(item,index,array){});
```

### Example

```javascript
let fruits = ["Apple","Orange","Mango"];

fruits.forEach((fruit,index)=>{
    console.log(index,fruit);
});
```

Output

```
0 Apple
1 Orange
2 Mango
```

---

# 6. Searching Methods

## indexOf()

Returns first matching index.

```javascript
let arr = ["Apple","Orange","Apple"];

console.log(arr.indexOf("Apple"));
```

Output

```
0
```

---

## lastIndexOf()

Searches from right.

```javascript
console.log(arr.lastIndexOf("Apple"));
```

Output

```
2
```

---

## includes()

Returns true/false.

```javascript
console.log(arr.includes("Orange"));
```

Output

```
true
```

✅ Can correctly detect **NaN**

```javascript
let arr = [NaN];

console.log(arr.includes(NaN));
```

Output

```
true
```

---

# 7. find()

Returns first matching element.

### Syntax

```javascript
arr.find(callback);
```

### Example

```javascript
let users = [
    {id:1,name:"John"},
    {id:2,name:"Peter"}
];

let user = users.find(u => u.id===2);

console.log(user);
```

Output

```
{id:2,name:"Peter"}
```

---

# 8. findIndex()

Returns index of first matching element.

```javascript
let index = users.findIndex(u=>u.id===2);

console.log(index);
```

Output

```
1
```

---

# 9. findLastIndex()

Returns last matching index.

```javascript
let users = [
    {name:"John"},
    {name:"Peter"},
    {name:"John"}
];

console.log(users.findLastIndex(u=>u.name==="John"));
```

Output

```
2
```

---

# 10. filter()

Returns **all** matching elements.

```javascript
let numbers = [10,20,30,40];

let result = numbers.filter(num => num>20);

console.log(result);
```

Output

```
[30,40]
```

---

# 11. map()

Transforms every element.

Returns a new array.

```javascript
let nums = [1,2,3];

let square = nums.map(num => num*num);

console.log(square);
```

Output

```
[1,4,9]
```

---

# 12. sort()

Sorts array **in place**.

Default sorting is alphabetical.

```javascript
let arr = [1,2,15];

arr.sort();

console.log(arr);
```

Output

```
[1,15,2]
```

---

## Numeric Sort

```javascript
arr.sort((a,b)=>a-b);
```

Ascending

```javascript
[1,2,15]
```

Descending

```javascript
arr.sort((a,b)=>b-a);
```

---

## String Sort

```javascript
countries.sort((a,b)=>a.localeCompare(b));
```

---

# 13. reverse()

Reverses the array.

```javascript
let arr = [1,2,3];

arr.reverse();

console.log(arr);
```

Output

```
[3,2,1]
```

---

# 14. split()

String → Array

```javascript
let names = "John,Peter,Mary";

let arr = names.split(",");

console.log(arr);
```

Output

```
["John","Peter","Mary"]
```

---

## Split into Characters

```javascript
let word = "Hello";

console.log(word.split(""));
```

Output

```
["H","e","l","l","o"]
```

---

# 15. join()

Array → String

```javascript
let arr = ["John","Peter","Mary"];

console.log(arr.join(", "));
```

Output

```
John, Peter, Mary
```

---

# 16. reduce()

Reduces an array to a single value.

### Syntax

```javascript
arr.reduce((accumulator,current)=>{},initialValue);
```

### Example

```javascript
let nums = [1,2,3,4];

let sum = nums.reduce((total,num)=>total+num,0);

console.log(sum);
```

Output

```
10
```

---

## How reduce Works

|Iteration|Accumulator|Current|Return|
|----------|-----------|-------|------|
|1|0|1|1|
|2|1|2|3|
|3|3|3|6|
|4|6|4|10|

---

## reduceRight()

Same as reduce()

But starts from the end.

---

# 17. Array.isArray()

Checks if a value is an array.

```javascript
console.log(Array.isArray([]));
```

Output

```
true
```

```javascript
console.log(Array.isArray({}));
```

Output

```
false
```

---

# 18. thisArg

Some methods like

- map()
- filter()
- find()

accept an optional **thisArg**.

```javascript
arr.filter(callback,thisArg);
```

Mostly replaced nowadays with arrow functions.

---

# Quick Revision Table

| Method | Purpose | Returns | Modifies Original? |
|---------|----------|----------|-------------------|
| push() | Add at end | New Length | ✅ Yes |
| pop() | Remove last | Removed Item | ✅ Yes |
| shift() | Remove first | Removed Item | ✅ Yes |
| unshift() | Add at beginning | New Length | ✅ Yes |
| splice() | Insert/Delete/Replace | Removed Items | ✅ Yes |
| slice() | Copy portion | New Array | ❌ No |
| concat() | Merge arrays | New Array | ❌ No |
| forEach() | Iterate | Undefined | ❌ No |
| indexOf() | Find index | Index/-1 | ❌ No |
| lastIndexOf() | Find last index | Index/-1 | ❌ No |
| includes() | Exists? | Boolean | ❌ No |
| find() | Find first item | Element | ❌ No |
| findIndex() | Find first index | Index | ❌ No |
| findLastIndex() | Find last index | Index | ❌ No |
| filter() | Filter items | New Array | ❌ No |
| map() | Transform items | New Array | ❌ No |
| sort() | Sort array | Same Array | ✅ Yes |
| reverse() | Reverse array | Same Array | ✅ Yes |
| split() | String → Array | Array | ❌ No |
| join() | Array → String | String | ❌ No |
| reduce() | Single value | Any Value | ❌ No |
| reduceRight() | Right → Left reduce | Any Value | ❌ No |
| Array.isArray() | Check array | Boolean | ❌ No |

---

# ⭐ Interview Tips

### Use `map()` when

- You want to transform every element.
- Always returns a new array.

### Use `filter()` when

- You need multiple matching elements.

### Use `find()` when

- You only need the first matching element.

### Use `forEach()` when

- You just want to loop.
- Doesn't return anything.

### Use `reduce()` when

- Calculating sum
- Product
- Average
- Grouping data
- Counting occurrences

### Use `slice()`

- To copy arrays.
- Does not modify the original.

### Use `splice()`

- To insert, delete or replace elements.
- Modifies the original array.

### Remember

- `sort()` sorts strings by default.
- Use `(a, b) => a - b` for numeric sorting.
- `includes()` works correctly with `NaN`.
- Always provide an initial value to `reduce()` to avoid errors on empty arrays.