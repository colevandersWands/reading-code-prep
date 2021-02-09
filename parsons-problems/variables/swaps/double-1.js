'use strict';

/* Double Swap 2

  rearrange the lines of code to pass the assertions

  careful, there may be extra lines of code!

*/

/* declare initial values */
let a = 'y';
let b = 'x';
let temp = null;

/* swap values */
temp = a;
a = b;
b = temp;

/* assert values */
console.assert(a === 'x', 'a should be x');
console.assert(b === 'y', 'b should be y');
console.assert(temp === 'y', 'temp should be y');

// --- distractors ---

let a = 'y'; // distractor
let b = 'x'; // distractor

temp = b; // distractor
