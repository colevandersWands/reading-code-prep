/* Logic in the Loop Head

  write your loop logic directly in the while loop head

  check something about your script's variables with each iteration.

*/

let userInput = '';

while (userInput === null || userInput === '') {
  userInput = prompt('enter something to leave this loop');
}


// begin distractors

while (userInput === null && userInput === '') { // distractor
while (userInput !== null && userInput !== '') { // distractor
while (userInput !== null || userInput !== '') { // distractor
userInput = confirm('enter something to leave this loop'); // distractor
