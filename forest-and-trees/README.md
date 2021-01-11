<!--
plann
- introduce a "standard" way to comment a file
- work this into 'studying-javascript'
  then it can then have /exercises

behavior (forest): block comment up top
  from the user's perspective, what does the program do
  do not mention any lines of code or javascript syntax
implementation (trees): what part of what/why comments
  what code is in this line
strategy (forest & trees): why part of what/why comments
  how does this line contribute to the program's behavior
  how does this line relate to other lines?
-->

# Forest & Trees

When studying code to understand a new program, thinking of forests and trees might help.

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

const userInput = prompt('enter the word "yes", upper or lower case');

if (userInput.toLowerCase() === 'yes') {
  alert(userInput + '!');
} else {
  alert('baaaaad: ' + userInput);
}
```

[TOP](#code-reading-questions)

---

## Trees

Understanding what each line of code does and how it works, without taking a step back to understand the whole program.

- what language features are used in this line?
- what other language features could be used instead?
- what does the variable name(s) tell you about the code?
- ...

> if a line is important you can use `!`
>
> if a line confuses you you can use `?`

```js
/*
  this program asks a user to input "yes", with upper or lower case letters
  these are some example correct inputs:
  - YeS, yes, YEs, YES, ...

  if the user inputs a valid string, they'll be congratulated.
  otherwise they are not :(
*/

/* prompt the user for input and assign it to `userInput`

*/
const userInput = prompt('enter the word "yes", upper or lower case');

/* ! convert the `userInput` to lower case and compare it to the string "yes"

*/
if (userInput.toLowerCase() === 'yes') {
  /* alert the user input concatenated with an exclamation mark

  */
  alert(userInput + '!');
} else {
  /* alert the user input concatenated with an exclamation mark

  */
  alert('baaaaad: ' + userInput);
}
```

[TOP](#code-reading-questions)

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

/* prompt the user for input and assign it to `userInput`
  this line explains to the user what they need to input
  the `userInput` variable is used later on to check if the user input a valid string
*/
const userInput = prompt('enter the word "yes", upper or lower case');

/* ! convert the `userInput` to lower case and compare it to the string "yes"
  checking the user input to make sure they put in a valid string
  this line uses .toLowerCase so that it doesn't matter what letter were upper or lower case
*/
if (userInput.toLowerCase() === 'yes') {
  /* alert the user input concatenated with an exclamation mark
    this is the path for valid user inputs
    the user will be congratulated for following instructions
  */
  alert(userInput + '!');
} else {
  /* alert the user input concatenated with an exclamation mark
    this is the path for invalid user inputs (things that aren't some form of "yes")
    it will tell users that they messed up baaaaadly
  */
  alert('baaaaad: ' + userInput);
}
```

[TOP](#code-reading-questions)
