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

temp = b;
b = a;
a = temp;

/* assert final values */

console.assert(a === 'x', 'a should be x');
console.assert(b === 'y', 'b should be y');
console.assert(temp === 'x', 'temp should be x');

let a = 'y'; // distractor
let b = 'x'; // distractor
let a = 'x'; // distractor
let b = 'y'; // distractor

b = temp; // distractor
