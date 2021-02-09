let promptMessage = 'please enter a number greater than 10';
let userInput = prompt(promptMessage);

console.log('userInput:', typeof userInput, userInput);

if (userInput === null || userInput === '') {
  let noInputMessage = 'nothing!  why !!! ??? !!!';
  alert(noInputMessage);
} else {
  let userNumber = Number(userInput);

  if (Number.isNaN(userNumber)) {
    alert('"' + userInput + '" is not a number');
  } else if (userNumber <= 10) {
    alert(userNumber + ' is less than 10 :(');
  } else if (userNumber === 10) {
    alert(userNumber + ' exactly ten :(');
  } else {
    alert(userNumber + ' is perfect!');
  }
}
