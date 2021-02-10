# Welcome to JS

[<< UX/UI Design](https://github.com/hackyourfuturebelgium/ux-ui-design) | [Home](https://home.hackyourfuture.be) | [Debugging >>](https://github.com/hackyourfuturebelgium/debugging)

---

> _JavaScript_: Don't judge me by my bad parts, learn the good stuff and stick with that!
>
> - [Eric Freeman](https://www.oreilly.com/library/view/head-first-javascript/9781449340124/ch01.html)

_introduction_

## Contents

- [Getting Started](#getting-started)
- [Study Tips](#study-tips)
- [Just Enough JavaScript](#just-enough-javascript)
    <!-- - [Learning Objectives](#learning-objectives) -->
- [Suggested Study](#suggested-study)
- Break-Down
  - [Week 1](#week-1)
  - [Week 2](#week-2)
- [Class Recordings](#class-recordings)
- [HYF Home](https://home.hackyourfuture.be/) (external)

---

## Getting Started

> You will need [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) on your computer to study this material
>
> Using a browser with good DevTools will make your life easier: [Chromium](http://www.chromium.org/getting-involved/download-chromium), [FireFox](https://www.mozilla.org/en-US/firefox/new/), [Edge](https://www.microsoft.com/edge), [Chrome](https://www.google.com/chrome/)

1. Install or update the `study-lenses` package globally
   - `$ npm install -g study-lenses` (if you do not have it already)
   - `$ npm update -g study-lenses` (if you already have it installed)
2. Clone this repository:
   - `$ git clone git@github.com:HackYourFutureBelgium/welcome-to-js.git` (SSH, recommended)
   - `$ git clone https://github.com/HackYourFutureBelgium/welcome-to-js.git` (HTTPS)
   - `$ gh repo clone HackYourFutureBelgium/welcome-to-js` (GH CLI)
3. Navigate to the module repository in terminal
   - `$ cd welcome-to-js`
4. Run the `study` command from your CLI
   - `$ study`
5. The material will open in your default browser, you're good to go!
   - you can read the `study-lenses` user guide from your browser by navigating to `localhost:xxxx?--help`

> If you have a windows computer and get this error:
>
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should take care of it ; )

[TOP](#welcome-to-js)

---

## Study Tips

- Don't rush, understand! Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass tests quickly and not understand why.
- Don't skip the examples! Understanding and experimenting with working code is a very effective way to learn programming.
- Practice Pair Programming: two people, one computer.
- Read the code out loud
- Take a look through the [HYF Study Tips](https://home.hackyourfuture.be/students/study-tips) for more inspiration

If you can't finish all the material in this repository, that's expected! Anything you don't finish now will always be waiting for you to review when you need it. These 3 emoji's will help you prioritize your study time and to measure your progress:

- 🥚 `:egg:` - Understanding this material is required, it covers the base skills you'll need for this module. You do not need to finish all of them but should feel comfortable that you could with enough time.
- 🐣 `:hatching_chick:` - Do your best to start this material. you don't need to master it or finish it but getting the main idea will be helpful for taking the next steps.
- 🐥 `:hatched_chick:` - Have you finished all the 🥚's and started all the 🐣's? push yourself with these challenges.

[TOP](#welcome-to-js)

---

## Just Enough JavaScript

JavaScript is a huge and powerful programming language, this makes it exciting but also challenging to learn.

In this module you will only learn a small part of what JavaScript has to offer. You will learn _just enough_ JavaScript to make small programs that process text and interact with users. Why just enough, and not a little more? Because reading and understanding program logic is more important than JavaScript, so why let the code get in the way?

Below is all the JavaScript you will find in this module's examples and exercises. Don't be mistaken, there's a lot you can do with only this!

<details open>
<summary>expand/collapse</summary>

### For Developers

Parts of JavaScript that exist to help you understand your programs.

Comments and logging will not change what your program does, just how easy it is to understand.

<details>
<summary>🥚 Comments</summary>

```js
console.log('-- comments --');

// comments are for people to read, not computers
// these are both one-line comments

/* this is a block comment

  block comments are useful for writing longer messages

  - and for
  - things like
  - lists

*/
```

</details>
<details>
<summary>🥚 Logging</summary>

```js
// print a message to the browser's console
console.log('-- logging --');

// you can log more than one thing at a time
console.log('a', 'message', 'from', 'beyond'); // 'a', 'message', 'from', 'beyond'
```

</details>

### Booleans

A primitive type with two values: `true` and `false`.

These are helpful for making decisions in your programs, it's like asking `yes` or `no`.

<details>
<summary>🥚 typeof</summary>

```js
console.log('-- typeof booleans --');

// there are only two boolean values:
console.log(true); // true
console.log(false); // false

// they both have the type "boolean"
console.log(typeof true); // 'boolean'
console.log(typeof false); // 'boolean'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
console.log('-- booleans: strict equality --');

// boolean values are only strictly equal to themselves
console.log(true === true); // true
console.log(false === false); // true

// they are not equal to each other
console.log(true === false); // false
console.log(false === true); // false

// booleans are not equal to any other type
console.log(true === 'true'); // false
console.log(false === ''); // false
console.log(true === 12); // false
console.log(false === undefined); // false
```

</details>
<details>
<summary>🥚 strict inequality</summary>

```js
console.log('-- booleans: strict inequality --');

// boolean values are strictly inequal to everything but themselves
console.log(true !== true); // false
console.log(false !== false); // false

// they are not equal to each other
console.log(true !== false); // true
console.log(false !== true); // true

// booleans are not equal to everything else
console.log(true !== 'true'); // true
console.log(false !== ''); // true
console.log(true !== 12); // true
console.log(false !== undefined); // true
```

</details>
<details>
<summary>🥚 not</summary>

```js
console.log('-- not --');

// you can use ! to reverse true and false
console.log(!true); // false
console.log(!false); // true
```

</details>
<details>
<summary>🐣 and</summary>

```js
console.log('-- and --');

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```

</details>
<details>
<summary>🐣 or</summary>

```js
console.log('-- or --');

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
```

</details>

### Strings

A primitive type used for saving and working with text.

A string is anything wrapped in quotes: `'something'` or `"something"`

<details>
<summary>🥚 typeof</summary>

```js
console.log('-- typeof strings --');

// strings are anything wrapped in quotations, ' or "
console.log('hello!'); // 'hello!'
console.log('you say "hello", i say "good bye"'); // 'you say "hello", i say "good bye"'
console.log("you say 'hello', i say 'good bye'"); // "you say 'hello', i say 'good bye'"

// this is the empty string. it is a string, but with no characters
console.log(''); // ''

// you can check if something is a string with typeof
console.log(typeof ''); // 'string'
console.log(typeof 'trees'); // 'string'
console.log(typeof 'apple "the green" fruit'); // 'string'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
console.log('-- strings: strict equality --');

// two strings are the same thing if they have exactly the same characters
console.log('' === ''); // true
console.log('asdf' === 'asdf'); // true
console.log('12D' === '12D'); // true

// two strings with different characters are not the same string
console.log('' === ' '); // false
console.log('asdf' === 'Asdf'); // false
console.log('cow' === 'horse'); // false

// strings are never the same as different types
console.log('' === true); // false
console.log('true' === true); // false
console.log('12' === 12); // false
console.log('null' === null); // false
console.log('hello' === 100); // false
```

</details>
<details>
<summary>🥚 strict inequality</summary>

```js
console.log('-- strings: strict inequality --');
// the opposite of strict equality

// two strings are not inequal if they have exactly the same characters
console.log('' !== ''); // false
console.log('asdf' !== 'asdf'); // false
console.log('12D' !== '12D'); // false

// two strings with different characters are inequal
console.log('' !== ' '); // true
console.log('asdf' !== 'Asdf'); // true
console.log('cow' !== 'horse'); // true

// strings are always inequal to different types
console.log('' !== true); // true
console.log('true' !== true); // true
console.log('12' !== 12); // true
console.log('null' !== null); // true
console.log('hello' !== 100); // true
```

</details>
<details>
<summary>🥚 string concatenation</summary>

```js
console.log('-- string concatenation --');

// you can combine strings using +
console.log('abc' + '123'); // 'abc123'
console.log('a' + 'bc1' + '23'); // 'abc123'
```

</details>
<details>
<summary>🥚 .replaceAll</summary>

```js
console.log('-- .replaceAll --');

// returns a new string with the first argument replaced by the second
console.log('abc'.replaceAll('b', '')); // 'ac'
console.log('computers'.replaceAll('z', '!')); // 'computers'
console.log('hi from me, hi to you'.replaceAll('hi', 'bye')); // 'bye from me, bye to you'
```

</details>
<details>
<summary>🥚 .toLowerCase and .toUpperCase</summary>

```js
console.log('-- .toLowerCase and .toUpperCase --');

// returns a new string with all lower case letters
console.log('HackYourFuture'.toLowerCase()); // 'hackyourfuture'

// returns a new string with all upper case letters
console.log('HackYourFuture'.toUpperCase()); // 'HACKYOURFUTURE'
```

</details>
<details>
<summary>🥚 .trim</summary>

```js
console.log('-- .trim --');

// returns a new string with all the white space removed from the ends
console.log('  hello  '.trim()); // 'hello'
console.log('  hello'.trim()); // 'hello'
console.log('hello  '.trim()); // 'hello'
```

</details>
<details>
<summary>🥚 .includes</summary>

```js
console.log('-- .includes --');

// returns true or false
//  true: if the string includes the argument
//  false: if it does not
// upper/lower case matters
console.log('Abc'.includes('Ab')); // true
console.log('Abc'.includes('bc')); // true
console.log('Abc'.includes('ab')); // false
console.log('Abc'.includes('BC')); // false
```

</details>
<details>
<summary>🐣 .length</summary>

```js
console.log('-- .length --');

// out how many characters are in a string
console.log(''.length); // 0
console.log('a'.length); // 1
console.log('ab'.length); // 2
console.log('abc'.length); // 3
```

</details>
<details>
<summary>🐣 character indexes</summary>

```js
console.log('-- character indexes --');

// get a specific character from a string
//  careful, the first character is [0]!
console.log('abc'[-1]); // undefined
console.log('abc'[0]); // 'a'
console.log('abc'[1]); // 'b'
console.log('abc'[2]); // 'c'
console.log('abc'[3]); // undefined
```

</details>
<details>
<summary>🐥 .indexOf</summary>

```js
console.log('-- strings: .indexOf --');

// returns the index of a substring inside a string
console.log('abc'.indexOf('a')); // 0
console.log('abc'.indexOf('b')); // 1
console.log('abc'.indexOf('c')); // 2

// everything contains the empty string
console.log(''.indexOf('')); // 0
console.log('abc'.indexOf('')); // 0
console.log('abc...xyz'.indexOf('')); // 0

// you can search for more than one character
console.log('toads'.indexOf('ds')); // 3
console.log('abc'.indexOf('abc')); // 0

// if the search does not exist, indexOf returns -1
console.log('asdf'.indexOf('x')); // -1
console.log('JavaScript'.indexOf('Python')); // -1
console.log(''.indexOf('hello')); // -1
```

</details>
<details>
<summary>🐥 .slice</summary>

```js
console.log('-- string: .slice --');

// with one argument

// with two arguments

// with negative arguments

// with invalid arguments
```

</details>

### Variables

Variables allow you to save values to use later in your program.

They're kind of like a box that can only hold one thing at a time.

<details>
<summary>🥚 declare and assign</summary>

```js
console.log('-- declare and assign --');

// declaring a variable with let
let favoriteTree;
// it is helpful to log the variable's name and it's value
console.log('favoriteTree:', favoriteTree); // undefined

// assigning a value to a variable
favoriteTree = 'palm';
console.log('favoriteTree:', favoriteTree); // 'palm'
// assigning a different value
favoriteTree = 'oak';
console.log('favoriteTree:', favoriteTree); // 'oak'

// declare and assign at the same time
let bread = 'fresh';
console.log('bread:', bread); // 'fresh'
```

</details>
<details>
<summary>🥚 different types</summary>

```js
console.log('-- variables: different types --');
// variables can store any type
//  and you can change the types all you want

// declare and assign a boolean value
let variable = true;
console.log('variable:', variable); // true

// assign a string to the variable
variable = 'computers';
console.log('variable:', variable); // 'computers'

// assign a number to the variable
variable = 2;
console.log('variable:', variable); // 2

// and another boolean
variable = false;
console.log('variable:', variable); // false
```

</details>
<details>
<summary>🥚 assigning results</summary>

```js
console.log('-- assigning results --');
// you can assign the result of an operation to a variable

// boolean logic
let falseOrTrue = false || true;
console.log('falseOrTrue:', falseOrTrue); // true

// string concatenation
let favoriteTree = 'p' + 'a' + 'l' + 'm';
console.log('favoriteTree:', favoriteTree); // 'palm'

// replacing things in a string
let noJoy = 'enjoy life'.replaceAll('joy', '');
console.log('noJoy:', noJoy); // 'en life'

// searching a string with .includes
let hasAnApple = 'bananaapplemango'.includes('apple');
console.log('hasAnApple:', hasAnApple); // true
```

</details>
<details>
<summary>🥚 reading variables</summary>

```js
console.log('-- reading variables --');

// you can read the values stored in a variable
//  and use them anywhere you can use the value it stores

// operate on a string stored in a variable
let loudCar = 'vrooom'.toUpperCase();
let excitedCar = loudCar.replaceAll('O', '!');
console.log('excitedCar:', excitedCar); // 'VR!!!M'

// use a string stored in a variable as an argument
let badLetter = 'f';
let goodLetter = 'd';
let happyAnimal = 'fog'.replaceAll(badLetter, goodLetter);
console.log('happyAnimal:', happyAnimal); // 'dog'

// all together
let characterName = '  harry potter   '.trim();
let titleLowerCase = 'Harry Potter and the Magical Thing'.toLowerCase();
let includesName = titleLowerCase.includes(characterName);
console.log('includesName:', includesName); // true
```

</details>
<details>
<summary>🥚 ReferenceError</summary>

```js
console.log('-- ReferenceError 1 --');

// using a variable that was not declared with cause an error

// let animal; // uncomment this line to fix the error
animal = 'horse'; // ReferenceError: animal is not defined
```

```js
console.log('-- ReferenceError 2 --');

// a common mistake is spelling your variables incorrectly
let spellingMistake = 'oops!';
console.log('spellingMistake:', spelingMistake); // ReferenceError: spelingMistake is not defined
```

</details>
<details>
<summary>🥚 block scope</summary>

```js
console.log('-- block scope --');

// variables declared outside of curley are available inside the curley braces
let globalVariable = 'declared outside';
console.log('globalVariable:', globalVariable);
{
  globalVariable = 're-assigned inside';
  console.log('globalVariable:', globalVariable); // 're-assigned inside'

  // variables declared inside the curley braces are NOT availabe outside of them
  let blockVariable = 'declared inside';
  console.log('blockVariable:', blockVariable); // 'declared inside'
}
console.log('globalVariable:', globalVariable); // 're-assigned inside'
console.log('blockVariable:', blockVariable); // ReferenceError: blockVariable is not defined

// PS. this also works with conditionals and while loops
//     you will not need to use blocks without a condition or loop
```

</details>

### Undefined

A primitive type used to represent nothing.

This is the default value for all variables that have not been assigned a value.

<details>
<summary>🥚 typeof</summary>

```js
console.log('-- typeof undefined --');

console.log(undefined); // undefined
console.log(typeof undefined); // 'undefined'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
console.log('-- undefined: strict equality --');

// undefined is only strictly equal to undefined
console.log(undefined === undefined); // true

// any other strict equality is false
console.log(undefined === 'undefined'); // false
console.log(undefined === 0); // false
console.log(undefined === null); // false
```

</details>
<details>
<summary>🥚  strict inequality</summary>

```js
console.log('-- undefined: strict inequality --');
// this will always be the opposite of strict equality

console.log(undefined !== undefined); // false

// any other strict inequality is true
console.log(undefined !== 'undefined'); // true
console.log(undefined !== 0); // true
console.log(undefined !== null); // true
```

</details>
<details>
<summary>🥚 variables with undefined</summary>

```js
console.log('-- variables with undefined --');

// variables have the value undefined if you do not assign anything
let variable;
console.log('variable:', variable); // undefined
console.log(typeof variable); // 'undefined'

// assigning undefined to a variable is the same  as not assigning anything
variable = undefined;
console.log('variable:', variable); // undefined
console.log(typeof variable); // 'undefined'
```

</details>

### Null

Another primitive type used to represent nothing.

It's not possible to have `null` appear in your program by accident, if it's there it was put there on purpose. When you see `null` in a program it means that there is _supposed to be_ nothing, this is different than `undefined` which can happen by accident.

<details>
<summary>🥚 typeof</summary>

```js
console.log('-- typeof null --');

// this is not intuitive, you just need to memorize it
console.log(null); // null
console.log(typeof null); // 'object'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
console.log('-- null: strict equality --');

// null is only strictly equal to null
console.log(null === null); // true

// any other comparison is false
console.log(null === 'null'); // false
console.log(null === 0); // false
console.log(null === undefined); // false
```

</details>
<details>
<summary>🥚  strict inequality</summary>

```js
console.log('-- null: strict inequality --');
// this will always be the opposite of strict equality

console.log(null !== null); // false

// any other strict inequality with null will be true
console.log(null !== 'null'); // true
console.log(null !== 0); // true
console.log(null !== undefined); // true
```

</details>
<details>
<summary>🥚 variables with null</summary>

```js
console.log('-- variables with null --');

// you need to assign null to a variable, it does not happen by accident
let variable;
console.log('variable:', variable); // undefined
console.log('typeof variable:', typeof variable); // 'undefined'

variable = null;
console.log('variable:', variable); // null
console.log(typeof variable); // 'object'

// you can also assign null in the same line as declaring a variable
let breakfast = null;
console.log('breakfast:', breakfast);
console.log('typeof breakfast:', typeof breakfast);
```

</details>

### User Interactions

3 ways to display text to a user or ask them for program input.

Learning to use these 3 functions will help you to understand primitive types and values.

<details>
<summary>🥚 alert</summary>

```js
console.log('-- alert --');
// alert: displays a message to the user
//  the user can only read the message, they can't input anything to your program
let alerted = alert('pancakes');

// alert will always return undefined, no matter what
console.log('alerted:', alerted); // undefined
console.log('typeof alerted:', typeof alerted); // 'undefined'
```

</details>
<details>
<summary>🥚 confirm</summary>

```js
console.log('-- confirm --');
// confirm: display a message and ask the user to say "yes" or "no"

// run this example a few times with your console open. what happens if you:
//  click "ok"?
//  click "cancel"?
//  press the "enter" key on your keyboard?
//  pres the "esc" key on your keyboard?
let confirmed = confirm('want some pancakes?');

// confirm will always return a boolean value:
//  true if the user clicks ok
//  false if the user clicks cancel
console.log('confirmed:', confirmed); // true or false
console.log('typeof confirmed:', typeof confirmed); // 'boolean'
```

</details>
<details>
<summary>🥚 prompt</summary>

```js
console.log('-- prompt --');
// example input/outputs to try
// what to be confused by
// what to pay attention to
// ie. empty string is something - later learn how to deal with this
// motivate for how this is important with forms and such later
//  types! values! validation!

// prompt: display a message and allow the user to input some text

// run this example a few times with your console open. what happens if you:
//  type something -> click "cancel" or press the "esc" key
//  type something -> click "ok" or press the "enter" key
//  do not type anything -> click "cancel" or press the "esc" key
//  do not type anything -> click "ok" or press the "enter" key
let prompted = prompt('what is your favorite kind of pancake');

// prompt will either return a string or null
//  null: if the user clicks "cancel" or presses the "esc" key
//  string: if the user clicks "ok" or uses the "enter" key
//  (it doesn't matter if the user inputs text or not!)
console.log('prompted:', prompted); // the user's text or null
console.log('typeof prompted:', typeof prompted); // 'string' or 'object'
```

</details>

### Control Flow

Decide which lines of code to run depending on the values in your program.

You will learn to use control flow with user input to make small text-based programs in the browser.

<details>
<summary>🥚 if</summary>

```js
console.log('-- if --');

let input = prompt("please don't cancel");
console.log('input:', input);

if (input === null) {
  // enter this block if the condition is true
  alert('you are a canceler');
}
```

</details>
<details>
<summary>🥚 if else</summary>

```js
console.log('--  if else  --');

let input = prompt("please don't cancel");
console.log('input:', input);

if (input === null) {
  // enter this block if the condition is true
  alert('you are a canceler');
} else {
  // enter this block if the condition is false
  alert('thank you for not canceling');
}
```

</details>
<details>
<summary>🥚 if else if else</summary>

```js
console.log('-- if else if else --');

let input = prompt('enter something');
console.log('input:', input);

if (input === null) {
  // enter this block if the first condition is true
  alert('you are a canceler');
} else if (input === '') {
  // enter this block if the second condition is true
  alert('come on, type something');
} else {
  // enter this block if all conditions are false
  alert('"' + input + '" is something');
}
```

</details>
<details>
<summary>🥚 while</summary>

```js
console.log('-- while --');

// in the previous examples, we check if the input is not empty
//  but we still keep running the program
// the while loop will let us not go forward until the input is not empty

// explain they keep going while the thing is true

let input = '';

// continue prompting the user until they enter something
//  keep looping if they cancel (input === null)
//  keep looping if they type nothing (input === '')
while (input === null || input === '') {
  input = prompt('enter something');
  console.log('input:', input);
}

alert(input + '!');
```

</details>
<details>
<summary>🐣 for-of</summary>

```js
console.log('-- for-of --');

/* -- gather user input --*/

let input = '';

while (input === null || input === '') {
  input = prompt('enter something');
  console.log('input:', input);
}

/* -- alert each character of the input --*/

// a for-of loop will go through each character in a string
//  the variable declared in the loop will be assigned one character at a time
//  the first one,
//  then the second,
//  then the third, ...
for (let character of input) {
  console.log('character:', character);
}
```

</details>
<details>
<summary>🐣 break</summary>

```js
console.log('-- break --');

/* -- gather user input --*/

let input = '';

while (input === null || input === '') {
  input = prompt('enter something with no duplicate characters');
  console.log('input:', input);
}

/* -- search for duplicate characters --*/

let visited = '';
console.log('visited:', visited);

for (let character of input) {
  console.log('character:', character);

  let isDuplicate = visited.includes(character);
  console.log('isDuplicate:', isDuplicate);

  if (isDuplicate) {
    // this will leave the loop immediately
    break;
  }

  visited = visited + character;
  console.log('visited:', visited);
}

/* -- display the outcome to your user --*/

if (visited.length === input.length) {
  alert('well done!');
} else {
  alert('too bad, try again');
}
```

</details>
<details>
<summary>🐣 continue</summary>

```js
console.log('-- continue --');

/* -- gather user input --*/

let input = '';

while (input === null || input === '') {
  input = prompt('enter something, all the vowels will be removed');
  console.log('input:', input);
}

/* -- create a copy of the input with all the vowels removed --*/

let vowels = 'aeiouAEIOU';

let withoutVowels = '';
console.log('withoutVowels:', withoutVowels);

for (let character of input) {
  console.log('character:', character);

  let isVowel = vowels.includes(character);
  console.log('isVowel:', isVowel);

  if (isVowel) {
    continue;
  }

  withoutVowels = withoutVowels + character;
  console.log('withoutVowels:', withoutVowels);
}

/* -- display the outcome to your user --*/

let finalMessage =
  'before: "' + input + '"\n' + 'after: "' + withoutVowels + '"';
alert(finalMessage);
```

</details>
<details>
<summary>🐥 while with stepper</summary>

```js
console.log('-- while with stepper --');

let input = '';

while (input === null || input === '') {
  input = prompt('please enter something');
  console.log('input:', input);
}

alert('here are the character in: "' + input + '":');

// index is a "stepper" variable
//  it steps from 0 to a maximum value
let index = 0;
while (index < input.length) {
  console.log('index:', index);

  let character = input[index];
  console.log('character:', character);

  input = input + 1;
}
```

</details>
<details>
<summary>🐥 for</summary>

```js
console.log('-- for --');

let input = '';
while (input === null || input === '') {
  input = prompt('please enter something');
  console.log('input:', input);
}

alert('here are the character in: "' + input + '":');

// for loops do the same thing as a while loop with a stepper
for (let index = 0; index < input.length; input = input + 1) {
  console.log('index:', index);

  let character = input[index];
  console.log('character:', character);
}
```

</details>

### Numbers

A primitive type used to represent numbers. The programs in this module will be string-based, so there will be very few numbers.

Numbers in JavaScript are challenging to work with and understand, even for experienced developers. You will take a deeper look into numbers in the next module - Debugging.

<details>
<summary>🥚 typeof</summary>

```js
console.log('-- typeof numbers --');

// you write numbers in JS by writing numbers. without quotes
console.log(-1); // -1
console.log(0); // 0
console.log(1); // 1

// the type of numbers is 'number'
console.log(typeof 100); // 'number'
console.log(typeof -100); // 'number'
console.log(typeof 12.3); // 'number'
```

</details>
<details>
<summary>🐣  strict equality</summary>

```js
console.log('-- numbers: strict equality --');

// are two numbers the same?
console.log(1 === 1.0); // true
console.log(12 === 12); // true
console.log(-3.0 === -3); // true

console.log(1 === 1.1); // false
console.log(-12 === 12); // false
console.log(0.3 === 3.0); // false

// comparing with any other type will always be false
console.log(1 === true); // false
console.log(12 === '12'); // false
console.log(0 === null); // false
```

</details>
<details>
<summary>🐣  strict inequality</summary>

```js
console.log('-- numbers: strict inequality --');
// this will always be the opposite of strict equality

// are two numbers different?
console.log(1 !== 1.0); // false
console.log(12 !== 12); // false
console.log(-3.0 !== -3); // false

console.log(1 !== 1.1); // true
console.log(-12 !== 12); // true
console.log(0.3 !== 3.0); // true

// comparing with any other type will always be true
console.log(1 !== true); // true
console.log(12 !== '12'); // true
console.log(0 !== null); // true
```

</details>
<details>
<summary>🐣  bigger or smaller</summary>

```js
console.log('-- inequality --');

// is the left number bigger than the right one?
console.log(3 > 22); // false
console.log(22 > 3); // true
console.log(1 > 1); // false

// is the left number smaller than the right one?
console.log(3 < 22); // true
console.log(22 < 3); // false
console.log(1 < 1); // false

// is the left number bigger than OR equal to the right one?
console.log(3 >= 22); // true
console.log(22 >= 3); // false
console.log(1 >= 1); // true

// is the left number smaller than OR equal to the right one?
console.log(3 <= 22); // true
console.log(22 <= 3); // false
console.log(1 <= 1); // true
```

</details>
<details>
<summary>🐥 arithmetic</summary>

```js
console.log('-- numbers: arithmetic --');

// adding numbers
console.log(1 + 1); // 2
console.log(-1 + 1); // 0

// subtracting numbers
console.log(3 - 2); // 1
console.log(2 - 3); // -1

// multiplying numbers
console.log(3 * 2); // 6
console.log(3 * 5); // 15

// dividing numbers
console.log(30 / 2); // 15
console.log(12 * 3); // 4
```

</details>
<details>
<summary>🐥 casting to number</summary>

```js
// you will need this to get numbers from a prompt
console.log('-- casting to number --');

// numbers to numbers, no change!
console.log(Number(1)); // 1

// strings to numbers
console.log(Number('')); // 0
console.log(Number('0')); // 0
console.log(Number('1.2')); // 1.2
console.log(Number('-12')); // -12

// boolean to number
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// null to number
console.log(Number(null)); // 0
```

</details>
<details>
<summary>🐥 NaN</summary>

```js
console.log('-- NaN --');

// NaN (Not a Number) is a confusing concept in JS
//  for now you only need to use it a little
//  in Debugging you will learn a lot about NaN
// this is everything you need to know for now:

//  strings that don't look like numbers will become NaN
console.log(Number('asdf')); // NaN
console.log(Number('!')); // NaN
console.log(Number('one')); // NaN
console.log(Number('12.3.2')); // NaN

// undefined becomes NaN
console.log(Number(undefined)); // NaN

// nothing is strictly equal to NaN, not even NaN!
console.log(12 === NaN); // false
console.log('hello' === NaN); // false
console.log(NaN === NaN); // false

// you can check for NaN like this:
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN('asdf')); // false
```

</details>
<details>
<summary>🐥 user input: numbers</summary>

```js
console.log('-- boolean flags --');

let userNumber = '';

let isNotANumber = true;
while (isNotANumber) {
  let input = prompt('please enter something');
  console.log('input:', input);
  userNumber = Number(input);
  console.log('userNumber:', userNumber);

  if (input === null) {
    alert('you are a canceler');
  } else if (input === '') {
    alert('come on, type something');
  } else if (Number.isNaN(userNumber)) {
    alert('"' + input + '" is not a number');
  } else {
    isNotANumber = false;
  }
  console.log('isNotANumber:', isNotANumber);
}

alert('your number: ' + userNumber);
```

</details>

### Regular Expressions

<details>
<summary>🐥 </summary>

</details>
<details>
<summary>🐥 </summary>

</details>
<details>
<summary>🐥 </summary>

</details>

</details>

<br>

[TOP](#welcome-to-js)

---

<!--

## Learning Objectives

[TOP](#welcome-to-js)

---

-->

## Suggested Study

Helpful links, examples and exercises.

<details>
<summary>expand/collapse</summary>

### Be the Computer

These two games are deceptively simple. You will be given pseudo-code and will need to follow the instructions the same way a computer would. Practicing this game will help you learn how to trace code, and prepare you for learning about program memory in the next module - Debugging.

- 🥚 [compute-it](http://compute-it.toxicode.fr/)
- 🐥 [little-dot](http://little-dot.toxicode.fr/)

### Tutorials

A selection of tutorial sites with interactive exercises, these tutorial will help you learn the JS Syntax you need to study the exercises in this repository. These tutorials will each cover different topics in different orders and in different ways. When you're trying to figure out what to focus on, remember: [Just Enough JavaScript](#just-enough-javascript)

Take a look through these to find the one that helps you the most.

- [javascript.info](https://javascript.info/): through 2.13
- [programiz](https://www.programiz.com/javascript/get-started): through while loops
- [sololearn](https://www.sololearn.com/learning/1024): through Conditionals and Loops
- [launchcode](https://education.launchcode.org/intro-to-professional-web-dev/index.html): chapters 1 -> 5
- [freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/): through for loops. (more advanced)
- [Headfirst JavaScript](https://www.oreilly.com/library/view/head-first-javascript/9781449340124/ch01.html): an outstanding (paid) book for understanding JS and the web. comes with code samples you can run locally

Is there another tutorial you like better than these? not a problem! Just us a PR so other students can find it ;)

### Flashcards

There's a good reason these have been around forever, they work. Quiz yourself on the most fundamental concepts in this module the good old-fashioned way: with flashcards.

- 🥚 **[Printables](./flashcards/printables)**: PDFs to print and study offline
- 🥚 **[Interactive](./flashcards/interactive)**: to study live in your browser

### References

Resources you can use to look up specific concepts when you are stuck or curious.

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/javascript): _the_ reference for JavaScript. It will take time to learn how to read and understand MDN, but it's worth the wait.
- [javascript.info](https://javascript.info): for short and clear explanations of everything you will need in JS
- [hackyourfuture.github.io/study](https://hackyourfuture.github.io/study): a collection of explanations and resources put together by the HYF community. PR's are welcome!
- [codeacademy cheat-sheets](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet)

### Exercises in this Repo

The exercises in this module focus on how to read and understand programs that interact with a user. As a programmer you will spend more of your time reading, understanding and adjusting code than you will writing it. So why not start there?

- 🥚 **[reading-code](./reading-code)**:
- 🐣 **[forest-and-trees](./forest-and-trees)**
- 🐣 **[naming-variables](./naming-variables)**
- 🐣 **[parsons-problems](./parsons-problems)**

</details>
<br>

[TOP](#welcome-to-js)

---

## Week 1

- skills
  - reading code
  - forest and trees
- JS
  - comments
  - logging
  - primitive types
  - variables
  - user input
  - conditionals

<details open>
<summary>expand/collapse</summary>
<br>

### Before Class

- take a look through [Reading Code]()
- variables, strings & conditions
  - study the reading-code examples
  - tutorial of your choice
- install `study-lenses` and:
  - open this directory: `$ study`
  - navigate to this URL [./?--help](./?--help?)
  - this is the study tool you will use for a lot of HYF

### During Class

#### Before Break

> reading code

- what is code? what is coding? what is javascript?
- read some code with user input and conditionals

#### After Break

> commenting code

- forest and trees: user input & conditionals
  - full class led by coach
  - and/or in small groups, depending on number of

### After Class

No project. Just lots of study time, alone and in groups. Keep asking questions!

</details>
<br>

[TOP](#welcome-to-js)

---

## Week 2

- skills
  - naming variables
  - I/O loops
- JS
  - while loops
  - boolean flags
  - for-of loops

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

- read the naming-variables README
  - naming conventions
  - roles of variables
- while loops and string iteration:
  - study the reading-code examples
  - tutorial of your choice

### During Class

#### Before Break

> reading code

- read some programs that have I/O loops and string iteration

#### After Break

> modifying code

- do some naming-variables exercises
  - all together led by the coach
  - and/or in small groups, depending on number of coaches

### After Class

No project. Just lots of study time, alone and in groups. Keep asking questions!

</details>
<br>

[TOP](#welcome-to-js)

---

## Class Recordings

Screen recordings of class. Coaches, when sending your PR's with links please ...

- Add a link to your video in the correct module's section
- Indicate which class you were teaching
- Which week it was
- Give your name
- and a helpful description

---

### class-13-14
