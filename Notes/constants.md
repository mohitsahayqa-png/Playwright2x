# Constants

To declare a constant (unchanging) variable, use `const` instead of `let`:

```js
const myBirthday = '18.04.1982';
```

Variables declared using `const` are called **constants**. They cannot be reassigned. An attempt to do so would cause an error:

```js
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!
```

When a programmer is sure that a variable will never change, they can declare it with `const` to guarantee and communicate that fact to everyone.

---

# Uppercase Constants

There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.

Such constants are named using **capital letters** and **underscores**.

For instance, let’s make constants for colors in so-called **web (hexadecimal) format**:

```js
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;

alert(color); // #FF7F00
```

## Benefits

- `COLOR_ORANGE` is much easier to remember than `"#FF7F00"`.
- It is much easier to mistype `"#FF7F00"` than `COLOR_ORANGE`.
- When reading the code, `COLOR_ORANGE` is much more meaningful than `#FF7F00`.

---

# When Should We Use Capital Letters?

Being a **constant** just means that a variable’s value never changes.

But some constants are:

- Known before execution
- Calculated during runtime but never changed afterward

For example:

```js
const pageLoadTime = /* time taken by a webpage to load */;
```

The value of `pageLoadTime` is not known before the page loads, so it is named normally.

However, it is still a constant because it does not change after assignment.

---

# Summary

- Use `const` for variables that should never change.
- Use **UPPERCASE_NAMES** for hard-coded values known before execution.
- Use normal camelCase names for runtime constants.