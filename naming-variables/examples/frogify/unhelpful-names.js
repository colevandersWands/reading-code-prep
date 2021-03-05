/*

  _a: stores the user input
    declaration:
      init: yes
      typing: object (null)
      scoping: global
    read: 2
      scoping: global
      tests: while loop (I/O), for-of (string iteration)
    write: 1
      typing: object (null), string
      scoping: while loop (I/O)

  _b: stores the frogified string as it's built
    declaration:
      init: yes
      typing: string
      scoping: for-of loop
    read: 4
      scoping: conditions inside for-of loop
    write: 3
      typing: string
      scoping: inside for-of loop

  _c: declaration once per character in _a
    declaration:
      init: yes
      typing: string
      scoping: for-of loop
    read: 3
      scoping: conditions inside for-of loop
      tests: both conditions inside for-of
    write: 0

*/

/* -- gather user input -- */

// _a: declare, null
let _a = null;
// _a: read
while (_a === null) {
  // _a: write, string or null
  _a = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"'
  );
}

/* -- generate a new string -- */

// _b: declare, string
let _b = '';

// _c: declare, string
// _a: read
for (let _c of _a) {
  /* -- append to new string -- */

  // _c: read
  if (_c === 'f') {
    // _b: read
    // _b: write, string
    _b = _b + 'frog';
  }
  // _c: read
  else if (_c === 'F') {
    // _b: read
    // _b: write, string
    _b = _b + 'FROG';
  } else {
    // _c: read
    // _b: read
    // _b: write, string
    _b = _b + _c;
  }
}

/* -- communicate the new string -- */

// _b: read
alert(_b);
