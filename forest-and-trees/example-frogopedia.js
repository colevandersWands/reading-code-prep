'use strict';

/* Frogopedia (program behavior)

  this program asks the user to input some information about frogs
    it will continually prompt the user until they input something with "frog" in it
  after the user inputs valid data, the program will display the cool new frog fact

*/

/* declare userInput and assign empty string (implementation)
  (strategy)
  this is used to capture user input from the prompt
  once the input is valid, this variable is used by the final alert
*/
let userInput = '';
/* declare inputIsAboutFrogs and assign false
  a boolean flag variable used to determine when the I/O loop is finished
*/
let inputIsAboutFrogs = false;
/* while loop
  this is the Input/Output loop where user input is validated
  it will continue looping until the user enters something about frogs
*/
while (!inputIsAboutFrogs) {
  /* prompt the user for input and assign the value to `userInput`
    ask the user to input siomething about frogs
    this input will be validated
    when it's valid, the loop will end and it will be used in the final alert
  */
  userInput = prompt('tell me something about frogs');
  console.log('userInput:', typeof userInput, userInput);

  /* check if `userInput` is an empty string or null
    if the user input nothing, it can't be about frogs
  */
  if (userInput === '' || userInput === null) {
    /* alert to the user
      let the user know their input was empty, fix it!
    */
    alert('that is not something');
    /* continue the while loop
      skip the rest of this loop
      there's no point checking nothing to see if it's about frogs
      and also to avoid errors, null will cause an error if you search it
    */
    continue;
  }

  /* check if "frog" (case insensitive) exists in the `userInput`
    if the user's input includes "frog", then it's valid!
  */
  if (userInput.search(/frog/i) > -1) {
    /* reassign inputIsAboutFrogs to true
      this variable is our boolean flag
      setting it to true will end the while loop
    */
    inputIsAboutFrogs = true;
    /* continue the while loop
      skip the final alert in this loop, the input was about frogs
      let the while loop evaluate the flag and finish
    */
    continue;
  }

  /* alert a message
    if we make it here, then the input was not about frogs
    so let the user know, then continue prompting them for new input
  */
  alert('nope, not about frogs.  try again.');
}

/* declare finalMessage as a string containing the `userInput`
  by the time we're here, the I/O loop has ended so the input must be about frogs
  insert the user's frog info into a formatted string to alert
*/
const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
/* alert the final message
  let the user know that they have entered a cool fact about frogs
*/
alert(finalMessage);
