'use strict';

/*

  fill in the blanks!

*/

const text = 'asdf';

let backwardsText = '';
for (let i = text._ - 1; i >= _; i--) {
  const nextLetter = text[_];
  _ += nextLetter;
}

console.assert(backwardsText === 'asdf');
