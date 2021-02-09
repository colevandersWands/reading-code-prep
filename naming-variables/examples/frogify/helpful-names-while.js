/* -- gather user input -- */

let a = prompt(
  'enter some text to frogify.\n' +
    '- "f" will be replaced with "frog"\n' +
    '- "F" will be replaced with "FROG"'
);
console.log(a);

/* -- build the new string -- */

let b = '';

let c = 0;
while (c < a.length) {
  console.log(c);

  let d = a[c];
  console.log(d);

  /* -- next step in the string building  -- */
  if (d === 'f') {
    b = b + 'frog';
  } else if (d === 'F') {
    b = b + 'FROG';
  } else {
    b = b + d;
  }
  console.log(b);

  c = c + 1;
}

/* -- communicate the new string -- */

alert(b);
