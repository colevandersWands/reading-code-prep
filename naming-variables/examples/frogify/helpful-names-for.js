/* -- gather user input -- */

let a = prompt(
  'enter some text to frogify.\n' +
    '- "f" will be replaced with "frog"\n' +
    '- "F" will be replaced with "FROG"'
);
console.log(a);

/* -- generate a new string -- */

let b = '';

for (let c of b) {
  console.log(c);

  /* -- append to new string -- */
  if (c === 'f') {
    b = b + 'frog';
  } else if (c === 'F') {
    b = b + 'FROG';
  } else {
    b = b + c;
  }
  console.log(b);
}

/* -- communicate the new string -- */

alert(b);
