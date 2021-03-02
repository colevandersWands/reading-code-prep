/* -- get a phrase from the user -- */

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
}

/* -- ask the user how to process the phrase -- */

let keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character'
);

/* -- decide which logic to use -- */

let newPhrase = '';
if (keepLetters) {
  /* -- remove everything that is not a letter -- */

  let letters = 'abcdefghijklmnopqrstuvwxyz';
  for (let character of phrase) {
    if (letters.includes(character.toLowerCase())) {
      newPhrase = phrase + character;
    }
  }
} else {
  /* -- repeat each character -- */

  for (let character of phrase) {
    newPhrase = newPhrase + character + character;
  }
}

/* -- communicate the result -- */

alert(newPhrase);
