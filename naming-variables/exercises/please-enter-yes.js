let x = prompt('please enter "yes"');

let y = '';
if (x === 'yes') {
  y = 'you entered "yes"';
} else {
  y = '"' + x + '" is not "yes"';
}

alert(y);
