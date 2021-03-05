/* generic

  generic names that describe the variables' roles in the program
  generic names could be used in any program with similar logic or behavior

  input:
    named because it holds a string of user input to be processed in the program

  output:
    named because it will hold the final output value of this program
    the output will be created based on the input

*/

/* -- gather user input -- */

let input = null;
while (input === null) {
  input = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"'
  );
}

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
