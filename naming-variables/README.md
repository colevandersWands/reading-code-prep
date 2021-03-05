# Naming Variables

Naming things: very hard, very important.

- [Variable Analysis](#variable-analysis)
- [Variable Roles](#variable-roles)
- [Naming Conventions](#naming-conventions)

---

## Variable Analysis

The first step to coming up with a good variable name is to understand how it's used. This doesn't need to be a complicated task, there's a few simple questions you can ask to start understanding the variables in a program. To answer the first three questions all you need to do is read the code.

This exercise is what's called _static analysis_. You can answer all of these questions _without_ running or tracing the code! (of course you can run it, you just don't need to)

The first things to notice are the simplest, just carefully read the code to notice these details:

- **Declaration:** Where in the source code is the variable declared? Is it initialized with a value or not? (`let x;` is not initialized. `let x = 1;` is initialized).
- **Reads:** How many times in the source code is this variable read? Careful! This is not the same as how many times it is read in the program's trace. In the example below there is only one line that writes to the `input` variable, even though you may execute that line of code many times when running the program.
- **Writes:** How many times in the source code is this variable's value changed after it was initialized? Careful! Like with reads, this should be the number of times the variable is read _in the source code_. There are only two lines that read from `input`, even if those lines are executed many times when you run the program.
- _hint: use the `?variables` lens_

Taking a closer look at each time a variable is used you can describe them further:

- **Typing**: What types are assigned to this variable? Is there only one type, or does it store different types at different times?
- **Scoping**: In which scope is this variable declared? In which scopes is it used? Does it store a value that was created in a different scope?
- **Tests**: Is this variable used in control flow tests? What types of control flow? How often?

Finally you're ready for the big one ...

- **Description:** How is each variable used in the code, what's it's role? Try to write a short and simple description of why this variable needs to be in the program.

In the Naming Variables examples & exercises you will learn a structured approach to analyzing and naming your variables. The first step is to analyze the code with comments like these:

```js
/*
  input: used to store the user's input (description)
    declaration:
      init: yes
      typing: object (null)
      scoping: global
    reads: 2
      scoping: global, while test
      tests: while I/O
    writes: 1
      typing: string, object (null)
      scoping: while I/O
*/

// input: init, null
let input = null;
// input: read
while (input === null) {
  // input: write, string or null
  input = prompt('enter something');
}

// input: read
alert(input);
```

---

## Variable Roles

- http://saja.kapsi.fi/var_roles/stud_vers/stud_Python3_eng.html
- https://en.wikibooks.org/wiki/A-level_Computing/AQA/Problem_Solving,_Programming,_Data_Representation_and_Practical_Exercise/Fundamentals_of_Programming/The_Role_of_Variables
- https://stackoverflow.com/questions/12983063/what-is-the-difference-between-a-counter-and-an-accumulator

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

---

## Naming Conventions

There are no real rules to naming variables but there are some conventions, some good and some bad practices. Each company or project may also have it's own rules. Here's some resources to get you started:

- [do's and don'ts](https://www.freecodecamp.org/news/javascript-naming-conventions-dos-and-don-ts-99c0e2fdd78a/)
- [Best Practices (plainenglish)](https://javascript.plainenglish.io/javascript-naming-convention-best-practices-b2065694b7d)
- [The Ultimate Guide](https://javascript.plainenglish.io/the-ultimate-guide-to-javascript-naming-conventions-f3e371efb0d1)
- [nexTRIE](https://www.youtube.com/watch?v=O5WlRR-lEDE)
- [Best Practices (swlh)](https://medium.com/swlh/javascript-best-practices-variable-naming-conventions-ea121ca389c5)
- [Chidre's Tech Tutorials](https://www.youtube.com/watch?v=CZ9iNTLYhfw)

---
