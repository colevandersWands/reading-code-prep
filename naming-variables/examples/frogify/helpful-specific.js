/* specific

  specific names that relate to the program's use case
  specific names may not make sense if you use them in a different program

  toBeFrogged:
    named because it is a string of text that does not have enough frogs
    more frogs will be added

  frogged:
    named because it is a new string based on toBeFrogged, but with more frogs

*/

/* -- gather user input -- */

let toBeFrogged = null;
while (toBeFrogged === null) {
  toBeFrogged = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"'
  );
}

/* -- generate a new string -- */

let frogged = '';

for (let character of toBeFrogged) {
  /* -- append to new string -- */
  if (character === 'f') {
    frogged = frogged + 'frog';
  } else if (character === 'F') {
    frogged = frogged + 'FROG';
  } else {
    frogged = frogged + character;
  }
}

/* -- communicate the new string -- */

alert(frogged);
