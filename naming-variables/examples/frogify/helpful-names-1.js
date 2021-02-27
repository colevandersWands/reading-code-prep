/* -- gather user input -- */

let toBeFrogged = prompt(
  'enter some text to frogify.\n' +
    '- "f" will be replaced with "frog"\n' +
    '- "F" will be replaced with "FROG"'
);

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
