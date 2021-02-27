/* -- gather user input -- */

let _a = prompt(
  'enter some text to frogify.\n' +
    '- "f" will be replaced with "frog"\n' +
    '- "F" will be replaced with "FROG"'
);

/* -- generate a new string -- */

let _b = '';

for (let _c of _a) {
  /* -- append to new string -- */
  if (_c === 'f') {
    _b = _b + 'frog';
  } else if (_c === 'F') {
    _b = _b + 'FROG';
  } else {
    _b = _b + _c;
  }
}

/* -- communicate the new string -- */

alert(_b);
