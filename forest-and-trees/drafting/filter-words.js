let sentence = '';

while (sentence === null || !sentence.includes(' ')) {
  sentence = prompt('enter a sentence with at least 2 words');
}
sentence = sentence + ' '; // so the loop will capture the last word
console.log('sentence:', sentence);

let newSentence = '';

let nextWord = ''; // accumulator/most-wanted
for (let character of sentence) {
  console.log('character:', character);

  if (character === ' ') {
    console.log('nextWord:', nextWord);

    let keep = confirm('do you want to keep this word:\n\n- ' + nextWord);
    console.log('keep:', keep);

    if (keep) {
      newSentence = newSentence + character + nextWord;
    }
    nextWord = '';
  } else {
    nextWord = nextWord + character;
  }
}
console.log('newSentence:', newSentence);

alert(newSentence);
