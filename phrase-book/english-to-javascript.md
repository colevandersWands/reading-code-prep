# English to JavaScript

---

## Variables

Declare `x` as a variable and assign the string "e".

<details>
<summary>a variable that can never be reassigned</summary>

```js
const x = 'e';
```

</details>
<details>
<summary>a variable that can be reassigned</summary>

```js
let x = 'e';
```

</details>
<details>
<summary>in two steps: declare, assign</summary>

```js
let x;
x = 'e';
```

</details>
<details>
<summary>the old ES5 way to do it</summary>

```js
var x = 'e';
```

</details>
<details>
<summary>(bad) creating global  variable</summary>

```js
x = 'e';
```

</details>
<br>

---

## Iteration

loop through a string

<details>
<summary>for of</summary>

```js
const string = 'toad';
for (const character of string) {
  console.log(character);
}
```

</details>
<details>
<summary>with a normal for loop</summary>

```js
const string = 'toad';
for (let i = 0; i < string.length; i++) {
  const character = string[i];
  console.log(character);
}
```

</details>
<details>
<summary>with the forEach string method</summary>

```js
const string = 'toad';
string.forEach(character => {
  console.log(character);
});
```

</details>
<details>
<summary>with a while loop</summary>

```js
const string = 'toad';
let i = 0;
while (i < string.length) {
  console.log(string[i]);
  i++;
}
```

</details>

---

### counting down

```js
const max = 5;

for (let i = max; i !== 0; i--) {
  console.log(i);
}

let i = max;
while (i !== 0) {
  console.log(i);
  i--;
}
```

---

## Toggling a boolean variable

---

## Map, Filter, Reduce

```js
// ...
```
