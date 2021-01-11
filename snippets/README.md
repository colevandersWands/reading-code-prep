# Phrase Book

some starting points and JS "idioms".

from here a motivated student could explore [VSCode snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

---

## Iteration

### an array in order

```js
const array = ['a', 'b', 'c'];

// with a for loop
for (const entry of array) {
  console.log(entry);
}

// with a normal for loop
for (let i = 0; i < array.length; i++) {
  const entry = array[i];
  console.log(entry);
}

// with the forEach array method
array.forEach(entry => {
  console.log(entry);
});
```

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

## Map, Filter, Reduce

```js
// ...
```
