/* -- gather user input -- */

let input = prompt(
  'enter some text to frogify.\n' +
    '- "f" will be replaced with "frog"\n' +
    '- "F" will be replaced with "FROG"'
);

/* -- generate a new string -- */

let output = '';

for (let nextChar of input) {
  /* -- append to new string -- */
  if (nextChar === 'f') {
    output = output + 'frog';
  } else if (nextChar === 'F') {
    output = output + 'FROG';
  } else {
    output = output + nextChar;
  }
}

/* -- communicate the new string -- */

alert(output);
