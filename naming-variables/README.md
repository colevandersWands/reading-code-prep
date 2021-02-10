tips for naming variables.

- examples: simple working programs with well-named variables & comments explaining why they're good names. multiple times the same script with different examples of good variable names
  - /frogger-1.js
  - /frogger-2.js
  - /frogger-3.js
  - /...
- exercises: simple working programs with arbitrary variables names (ie. `a`, `b`,`c` used in order). students need to analyze the program (forest & trees) then give the variables better names

---

> no need for this, there will be enough in their future

- negative examples: simple working programs with poorly-named variables & comments explaining why they're bad

---

naming conventions

- camel case vs. others
- isSomething for booleans
- lit review prep
  - lengths of variable names
  - helpful and unhelpful variable names

---

roles of variables

<details>
<summary>🐣 boolean flags</summary>

```js
console.log('-- boolean flags --');

let input = '';

let isEmpty = true;
while (isEmpty) {
  input = prompt('please enter something');
  console.log('input:', input);

  if (input === null) {
    alert('you are a canceler');
  } else if (input === '') {
    alert('come on, type something');
  } else {
    isEmpty = false;
  }
  console.log('isEmpty:', isEmpty);
}

alert('"' + input + '" is something');
```

</details>

<details>
<summary>🐥 while with stepper</summary>

```js
console.log('-- while with stepper --');

let input = '';

let isEmpty = true;
while (isEmpty) {
  input = prompt('please enter something');
  console.log('input:', input);

  if (input === null) {
    alert('you are a canceler');
  } else if (input === '') {
    alert('come on, type something');
  } else {
    isEmpty = false;
  }
  console.log('isEmpty:', isEmpty);
}

alert('here are the character in: "' + input + '":');

// index is a "stepper" variable
//  it steps from 0 to a maximum value
let index = 0;
while (index < input.length) {
  console.log('index:', index);

  let character = input[index];
  console.log('character:', character);

  alert(character);

  input = input + 1;
}
```

</details>
