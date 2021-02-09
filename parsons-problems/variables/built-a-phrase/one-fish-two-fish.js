/*

  declare a variable named "phrase"
  then add one word at a time to create the phrase:

  one fish two fish

*/

/* declare initial value */

let phrase = '';

/* one fish */

phrase += 'fish';

phrase += 'one ' + phrase;

/* two fish */

phrase += phrase + ' two ';

phrase += 'fish';

/* check final value */

console.log(phrase); // should be: one fish two fish
