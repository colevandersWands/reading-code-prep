# Forest and Trees

> Code Comments: “What questions would be asked by someone looking at this code for the first time?”
>
> - [Scottford](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/)

When studying code to understand a new program, thinking of forests and trees might help. This set of examples and exercises will help you learn a structured approach to studying and commenting working code.

```js
/*
  describe what the program does from the user's perspective
*/

/* -- chunk (an important step in the program) -- */

// what code is written in line of the program?
//  why is this line of code here?
//  what variables does it use?
//  how does it relate to other lines?
//  ... anything else you notice?
let line = 'of code';

/* -- chunk (an important step in the program) -- */

// what code is written in line of the program?
//  why is this line of code here?
//  what variables does it use?
//  how does it relate to other lines?
//  ... anything else you notice?
alert(line);
```

1. [Forest](#forest)
2. [Trees](#trees)
3. [Forest & Trees](#forest--trees)
4. [Chunks](#chunks)

---

## Forest

Understanding what the entire program does, without looking at any single line of code.

- what data is at the beginning of the program?
- what data is at the end of the program?
- can a user interact with the program?
  - when do they interact? (beginning, middle, end, ...)
  - how does the user's input influence the program?
- ...

```js
/*
  this program asks a user to input "yes", with upper or lower case letters
  these are some example correct inputs:
  - YeS, yes, YEs, YES, ...

  if the user inputs a valid string, they'll be congratulated.
  otherwise they are not :(
*/

let userInput = prompt('enter the word "yes", upper or lower case');

if (userInput.toLowerCase() === 'yes') {
  alert(userInput + '!');
} else {
  alert('baaaaad: ' + userInput);
}
```

[TOP](#forest-and-trees)

---

## Trees

Understanding what each line of code does and how it works, without taking a step back to understand the whole program.

- what language features are used in this line?
- what other language features could be used instead?
- what does the variable name(s) tell you about the code?
- ...

> if a line is important you can use `!`
>
> if a line is challenging you you can use `?`

```js
/*
  this program asks a user to input "yes", with upper or lower case letters
  these are some example correct inputs:
  - YeS, yes, YEs, YES, ...

  if the user inputs a valid string, they'll be congratulated.
  otherwise they are not :(
*/

// ! prompt the user for input and assign it to `userInput`
let userInput = prompt('enter the word "yes", upper or lower case');

// convert the `userInput` to lower case and compare it to the string "yes"

// !compare the input to null
if (userInput === null) {
  // alert a sad face
  alert(':(');
}
// ? convert the input to lower case and compare it to 'yes'
else if (userInput.toLowerCase() === 'yes') {
  // alert the user input concatenated with an exclamation mark
  alert(userInput + '!');
}
// the input is not null, and is not 'yes'
else {
  // alert the user input concatenated with an exclamation mark
  alert('baaaaad: ' + userInput);
}
```

[TOP](#forest-and-trees)

---

## Forest & Trees

Put together what you learned about the forest and the trees.

- How does each line of code contribute to the program's overall behavior?
- Which lines of code are related?
- which line(s) of code seem the most important?
- where is the entry point?
- what's the best strategy for reading this code?
  - callstack?
  - top to bottom?
  - ...?
- ...

```js
/*
  this program asks a user to input "yes", with upper or lower case letters
  these are some example correct inputs:
  - YeS, yes, YEs, YES, ...

  if the user inputs a valid string, they'll be congratulated.
  otherwise they are not :(
*/

// ! prompt the user for input and assign it to `userInput`
//   this line explains to the user what they need to input
//   the `userInput` variable is used later on to check if the user input a valid string
let userInput = prompt('enter the word "yes", upper or lower case');

// compare the input to null
//  this is to check if they canceled the input
if (userInput === null) {
  // alert a sad face
  //  let the user know how much they have disappointed you
  alert(':(');
}
// ? convert the input to lower case and compare it to 'yes'
//   checking the user input to make sure they put in a valid string
//   this line uses .toLowerCase so that it doesn't matter what letter were upper or lower case
else if (userInput.toLowerCase() === 'yes') {
  // alert the user input concatenated with an exclamation mark
  //   this is the path for valid user inputs
  //   the user will be congratulated for following instructions
  alert(userInput + '!');
}
// the input is not null, and is not 'yes'
//  they did input something, but it was not correct
else {
  // alert the user input concatenated with an exclamation mark
  //   this is the path for invalid user inputs (things that aren't some form of "yes")
  //   it will tell users that they messed up baaaaadly
  alert('baaaaad: ' + userInput);
}
```

[TOP](#forest-and-trees)

---

## Chunks

So you see the forest and the trees? Time to see the chunks!

A "chunk" of code is a group of lines that work together to achieve one main step in the program. One way to decide which lines belong to the same chunk is to look at your forest & tree comments. If you see a group of lines who's forest & tree comment server the same purpose, or who all seem to be necessary for the other, you may be looking at a chunk

You can label these with commented line dividers and a short title.

```js
/*
  this program asks a user to input "yes", with upper or lower case letters
  these are some example correct inputs:
  - YeS, yes, YEs, YES, ...

  if the user inputs a valid string, they'll be congratulated.
  otherwise they are not :(
*/

/* --- gather user input --- */

// ! prompt the user for input and assign it to `userInput`
//   this line explains to the user what they need to input
//   the `userInput` variable is used later on to check if the user input a valid string
let userInput = prompt('enter the word "yes", upper or lower case');

/* --- communicate the results --- */

// compare the input to null
//  this is to check if they canceled the input
if (userInput === null) {
  // alert a sad face
  //  let the user know how much they have disappointed you
  alert(':(');
}
// ? convert the input to lower case and compare it to 'yes'
//   checking the user input to make sure they put in a valid string
//   this line uses .toLowerCase so that it doesn't matter what letter were upper or lower case
else if (userInput.toLowerCase() === 'yes') {
  // alert the user input concatenated with an exclamation mark
  //   this is the path for valid user inputs
  //   the user will be congratulated for following instructions
  alert(userInput + '!');
}
// the input is not null, and is not 'yes'
//  they did input something, but it was not correct
else {
  // alert the user input concatenated with an exclamation mark
  //   this is the path for invalid user inputs (things that aren't some form of "yes")
  //   it will tell users that they messed up baaaaadly
  alert('baaaaad: ' + userInput);
}
```

---

## Resources

- [better-programming](https://medium.com/better-programming/javascript-clean-code-comments-c926d5aae2cb)
- [elegantthemes](https://www.elegantthemes.com/blog/wordpress/how-to-comment-your-code-like-a-pro-best-practices-and-good-habits)
