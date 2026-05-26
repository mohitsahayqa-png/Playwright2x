# JavaScript Basic Operators & Maths

## Terms to Know

### Operand

Values on which operators work.

```js
5 * 2
```

* `5` and `2` are operands.

---

## Unary Operator

Works with one operand.

```js
let x = 1;

x = -x;
console.log(x); // -1
```

---

## Binary Operator

Works with two operands.

```js
let x = 1;
let y = 3;

console.log(y - x); // 2
```

---

# Basic Math Operators

| Operator | Meaning        |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `%`      | Remainder      |
| `**`     | Exponentiation |

---

# Remainder Operator `%`

Returns remainder after division.

```js
console.log(5 % 2); // 1
console.log(8 % 3); // 2
console.log(8 % 4); // 0
```

---

# Exponentiation `**`

Used for powers.

```js
console.log(2 ** 2); // 4
console.log(2 ** 3); // 8
console.log(2 ** 4); // 16
```

## Square Root

```js
console.log(4 ** (1/2)); // 2
```

## Cube Root

```js
console.log(8 ** (1/3)); // 2
```

---

# String Concatenation with `+`

`+` joins strings.

```js
let s = "Hello" + " World";

console.log(s); // Hello World
```

---

# Number + String

If one operand is a string, JavaScript converts others to string.

```js
console.log('1' + 2); // "12"
console.log(2 + '1'); // "21"
```

---

# Important Examples

```js
console.log(2 + 2 + '1'); // "41"
```

Explanation:

* `2 + 2 = 4`
* `4 + '1' = "41"`

---

```js
console.log('1' + 2 + 2); // "122"
```

Explanation:

* `'1' + 2 = "12"`
* `"12" + 2 = "122"`

---

# Other Operators Convert to Number

```js
console.log(6 - '2'); // 4
console.log('6' / '2'); // 3
```

* `-`, `*`, `/` convert strings to numbers.

---

# Unary Plus `+`

Unary plus converts values to numbers.

```js
console.log(+true); // 1
console.log(+""); // 0
```

---

# Convert String to Number

```js
let apples = "2";
let oranges = "3";

console.log(+apples + +oranges); // 5
```

Equivalent to:

```js
console.log(Number(apples) + Number(oranges));
```

---

# Operator Precedence

Defines execution order.

```js
console.log(1 + 2 * 2); // 5
```

* `*` runs before `+`

---

# Parentheses Override Priority

```js
console.log((1 + 2) * 2); // 6
```

---

# Important Precedence Table

| Priority | Operator       |
| -------- | -------------- |
| 14       | Unary `+`, `-` |
| 13       | `**`           |
| 12       | `*`, `/`       |
| 11       | `+`, `-`       |
| 2        | `=`            |

---

# Important Point

Unary operators have higher precedence than binary operators.

Example:

```js
+apples + +oranges
```

* Unary `+` converts strings to numbers first.
* Then binary `+` adds them.

---

# Most Important Interview Points

* Unary operator → one operand
* Binary operator → two operands
* `%` gives remainder
* `**` used for power
* `+` concatenates strings
* If one operand is string → result becomes string
* `-`, `*`, `/` convert strings to numbers
* Unary `+` converts to number
* Operator precedence matters
* Parentheses change execution order
