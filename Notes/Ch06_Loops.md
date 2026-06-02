# JavaScript Loops

Loops allow us to execute a block of code repeatedly until a condition is met.

---

# Why Loops?

Without loops:

```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

With loops:

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

# Types of Loops

## 1. while Loop

### Syntax

```js
while (condition) {
  // code
}
```

### Example

```js
let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}
```

### Output

```text
0
1
2
```

### Flow

1. Check condition
2. If true → run body
3. Repeat

### Important

Always update the loop variable.

```js
let i = 0;

while (i < 3) {
  console.log(i);
}
```

❌ Infinite loop

---

## 2. do...while Loop

### Syntax

```js
do {
  // code
} while (condition);
```

### Example

```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 3);
```

### Output

```text
0
1
2
```

### Key Difference

`do...while` executes at least once.

```js
let i = 10;

do {
  console.log("Runs once");
} while (i < 5);
```

Output:

```text
Runs once
```

---

## 3. for Loop

Most commonly used loop.

### Syntax

```js
for (initialization; condition; step) {
  // code
}
```

### Example

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

### Output

```text
0
1
2
```

---

## Understanding for Loop

```js
for (let i = 0; i < 3; i++)
```

### Initialization

Runs once.

```js
let i = 0;
```

### Condition

Checked before every iteration.

```js
i < 3
```

### Step

Runs after each iteration.

```js
i++
```

---

## Loop Execution Flow

```text
Initialization
    ↓
Condition
    ↓
Body
    ↓
Step
    ↓
Condition
    ↓
Body
    ↓
...
```

---

# Variable Scope in Loops

### Inside Loop

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);
```

❌ Error

Because `i` only exists inside the loop.

---

### Outside Loop

```js
let i;

for (i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);
```

Output:

```text
3
```

---

# Skipping Parts of for Loop

### Skip Initialization

```js
let i = 0;

for (; i < 3; i++) {
  console.log(i);
}
```

---

### Skip Step

```js
let i = 0;

for (; i < 3;) {
  console.log(i);
  i++;
}
```

Equivalent to:

```js
while (i < 3)
```

---

### Infinite Loop

```js
for (;;) {
  console.log("Forever");
}
```

---

# break

Stops the loop immediately.

### Example

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
```

Output:

```text
1
2
3
4
```

---

# continue

Skips current iteration.

### Example

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

Output:

```text
1
2
4
5
```

---

# break vs continue

## break

Stops entire loop.

```js
break;
```

## continue

Skips current iteration.

```js
continue;
```

---

# Common Pattern: Odd Numbers

```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}
```

Output:

```text
1 3 5 7 9
```

---

# Infinite Loops

### while

```js
while (true) {
  // forever
}
```

### for

```js
for (;;) {
  // forever
}
```

Use `break` to exit.

---

# Labels (Advanced)

Used with nested loops.

### Example

```js
outer:
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    if (i === 1 && j === 1) {
      break outer;
    }

    console.log(i, j);
  }
}
```

Breaks out of both loops.

### Note

Rarely used in real-world code.

---

# Loop Selection Guide

### Use while when

You don't know how many times the loop will run.

```js
while (userInput !== "exit") {
}
```

---

### Use do...while when

The loop must run at least once.

```js
do {
} while (condition);
```

---

### Use for when

You know the number of iterations.

```js
for (let i = 0; i < 10; i++) {
}
```

Most common choice.

---

# Quick Revision

| Loop | Condition Check |
|--------|--------|
| while | Before iteration |
| do...while | After iteration |
| for | Before iteration |

---

| Keyword | Purpose |
|----------|----------|
| break | Exit loop |
| continue | Skip iteration |

---

# Key Takeaways

- Loops repeat code.
- `while` checks condition before execution.
- `do...while` runs at least once.
- `for` is the most commonly used loop.
- `break` exits a loop.
- `continue` skips current iteration.
- Missing updates can create infinite loops.
- Prefer `for` when iteration count is known.