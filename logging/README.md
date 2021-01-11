some helpful tips and strategies for putting console.logs in existing code.

- examples: simple prompt/alert programs with logs
- exercises: practice logging working programs without logs

---

one tip: log the type & value

```js
const x = 'e';
console.log(typeof x + ':', x);
// and maybe even the variable name as well
//  then your logs clearly trace a variable's history
console.log('x:', typeof x + ',', x);
```
