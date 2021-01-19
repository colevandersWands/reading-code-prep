> this README is a draft for the module repo, head over to [prep.md](./prep.md) to read about what this is all about

---

# Welcome to JS

>

## Contents

- [Getting Started](#getting-started)
- [Study Tips](#study-tips)
  - [`study-lense` Guide](#study-lense-guide)
- [Learning Objectives](#learning-objectives)
- [About the Projects](#about-the-projects)
- [Suggested Study](#suggested-study)
- Break-Down
  - [Week 1](#week-1)
  - [Week 2](#week-2)
- [Class Recordings](#class-recordings)
- [HYF Home](https://home.hackyourfuture.be/) (external)

---

## Getting Started

How to study the code in this repo.

<details>
<summary>expand/collapse</summary>
<br>

> You will need [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) on your computer to study this material
>
> Using a browser with good DevTools will make your life easier: [Chromium](http://www.chromium.org/getting-involved/download-chromium), [FireFox](https://www.mozilla.org/en-US/firefox/new/), [Edge](https://www.microsoft.com/edge), [Chrome](https://www.google.com/chrome/)

1. Install or update the `study-lenses` package globally
   - `npm install -g study-lenses` (if you do not have it already)
   - `npm update -g study-lenses` (if you already have it installed)
1. Clone this repository:
   - `git clone git@github.com:HackYourFutureBelgium/reading-code.git` (SSH) (recommended)
   - `git clone https://github.com/HackYourFutureBelgium/reading-code.git` (HTTPS)
   - `gh repo clone HackYourFutureBelgium/reading-code` (GH CLI)
1. `cd` into the repository
   - `cd reading-code`
1. Run the `study` command from your CLI
   - `study`
1. The material will open in your default browser, you're good to go!

> If you have a windows computer and get this error:
>
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should take care of it ; )

</details>
<br>

[TOP](#reading-code)

---

## Study Tips

- Don't rush, understand! Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass tests quickly and not understand why.
- Don't skip the examples! Understanding and experimenting with working code is a very effective way to learn programming.
- Practice Pair Programming: two people, one computer.
- Read the code out loud
- Take a look through the [HYF Study Tips](https://home.hackyourfuture.be/students/study-tips) for more inspiration

Not all assignments are created equal. These 3 emoji's will help you figure out how to spend your study time as effectively as possible.

- 🥚 `:egg:` - these assignments are required, they cover the base skills you'll need to move on.
- 🐣 `:hatching_chick:` - do your best to start these exercises. you don't need to finish or master them (yet) but getting the main idea will be helpful in coming weeks
- 🐥 `:hatched_chick:` - Have you finished all the 🥚's and started all the 🐣's? push yourself with these challenges!

### `study-lense` Guide

- `highlight`
- `parsons`
- `flowchart`
- `study`:
  - console
  - trace
  - selection
- `diff`

[TOP](#reading-code)

---

## Learning Objectives

<details>
<summary>expand/collapse</summary>
<br>

```
smartize these

what is programming?
what are programming languages?
learn language parts and vocab
commenting strategies
  forest, trees, both
  !, ?
  code-reading-club questions
  commenting paths
explicitly learn reading strategies, ie.
  find variable declaration and follow all changes
  find function declaration then all calls
  call-stack
pronouncing code
basic programming logic
  loops, conditionals
  input/output scripts
console.logging strategies
```

</details>
<br>

[TOP](#reading-code)

---

## Suggested Study

Helpful links, examples and exercises.

<details>
<summary>expand/collapse</summary>
<br>

### In this Repo

#### offline materials (needs a printer)

- [printables](./printables) (if you have access to a printer)
  - flashcards, diagrams, ... things to print and study on paper

## rendered markdown

- 🥚 [what-is-programming](./what-is-programming)
  - just what it sounds like
- 🥚 [code-reading-questions](./code-reading-questions)
  - based off the agendas for Code Reading Club, but decomposed into a tool-belt of questions and investigative techniques students can use to read new files of code.
  - this would be covered early on and used as a reference thereafter
- 🥚 [concept-review](./concept-review)
  - flash cards for reviewing what's covered in this
  - scoped by the learning objectives to act as a self-assessment
- 🥚 [vocabulary](./vocabulary)
  - what it sounds like, vocab flashcards
- 🐣 [phrase-book](./phrase-book)
  - common JS snippets that students can use to get productive, without understanding all the bits
  - like a travel phrase book in a foreign language. no grammar, all translations of practical phrases. goes both ways

## javascript

1. 🥚 [comments](./comments)
   - a guide to the different ways comments can be used in code
   - accompanied by files of code demonstrating different (good and bad) comments
2. 🐣 [forest-and-trees](./forest-and-trees)
   - a structured approach to deep reading files of code, along with a full commenting strategy
   - not something to recommend doing in real projects but maybe helpful while learning
3. 🐣 [naming-variables](./naming-variables)
   - tips for writing good variable names
   - exercises would be something like replacing bad variable names with better ones in working programs\
4. 🐣 [logging](./logging)
   - tips and strategies for logging code
   - in the exercises students will be given un-logged code, and need to write in helpful logs
   - leads right into debugging
5. 🐣 [fill-in-blanks](./fill-in-blanks)
   - different types of exercises built around filling in blanks in .js files

## parsons

- 🐣 [parsons](./parsons)
  - these can actually be run, but it's not required

## Read Only

- [read-only](./read-only)
  - files of more advanced code that students would not be expected to fully understand
  - for practicing the code reading questions and gaining experience with un-understandable code

### Elsewhere

```
 beginner-friendly tutorials
  sololearn
  launchcode
  codeacademy
  first part of new watch and code
  another?
code-reading games
  http://compute-it.toxicode.fr/
  http://little-dot.toxicode.fr/
  https://www.robomindacademy.com/course/robomind/HourOfCode/Getting%20started/0
try some creative coding
  https://p5js.org
  [The Coding Train](https://thecodingtrain.com/) has a very good [programming tutorial based on P5.js](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
suggested resources
  javascript.info
  javascript for cats?
```

</details>
<br>

[TOP](#reading-code)

---

## Week 1

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

- resource of your choice
  - through X of sololearn
  - through X of \_
- take a look through the pronunciation manual
- install `study-lenses` and:
  - open this directory: `$ study`
  - navigate to this URL [./?--help](./?--help?)
  - this is the study tool you will use for a lot of HYF

### During Class

- what is js?
- reading and running linear code

#### Before Break

> reading code

- what is code?
- what is coding?
- what is javascript?
- how does it fit in?
- comments vs. not-comments

#### After Break

> running code

- reading static code: `highlight` lense & code reading agenda
- reading run code: `study`
  - using the `run` button

### After Class

```
group project:
  js flashcards repo
  all markdown
  dev strat, prs, labels, branches, board ...
  a linting check on PR ?
```

#### Checklist

</details>
<br>

[TOP](#reading-code)

---

## Week 2

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

- resource of your choice
  - through X of sololearn
  - through X of \_

### During Class

- for loops

#### Before Break

> reading code

- for loops

#### After Break

> running code

- for loops
- the 'trace` button

### After Class

continue working on last week's group project

prepare for the Debugging by studying `/describing-errors`

</details>
<br>

[TOP](#reading-code)

---

## Class Recordings

Screen recordings of class. Coaches, when sending your PR's with links please ...

- Add a link to your video in the correct module's section
- Indicate which class you were teaching
- Which week it was
- Give your name
- and a helpful description

---

### class-13-14
