this is the first-draft plan for a new two-week module at HYF that would be the first introduction to JS. exercises will focus on reading, commenting, logging and completing simple programs that use prompt/alert/confirm for user interactions (no HTML/CSS).

it will cover the basics of JS as a procedural language, touching on:

- variables (let vs. const. no var)
- primitive types + typeof
- simple type coercion
  - Number() for processing user input from prompt
  - Boolean()/truthiness for understanding conditionals
- arrays (basic access + push/pop/unshif/shift. no reference/value)
- object (as data types, no methods. no reference/value)
- conditionals
- while loops
- for, for-in, for-of
- functions (arrow and statements)

students will follow their favorite of a few selected tutorials alongside this module (to be listed in #suggested-study of the README)

---

> check out [tour.mp4](./tour.mp4) for a ... tour

here's an overview of the folders, grouped by a rough sequence. almost all of these are for self/group study. they wouldn't be required or submitted, students would only get feedback from coaches when they ask for it:

## 1: things that don't involve running code or modifying code

- [code-reading-questions](./code-reading-questions?--defaults)
  - based off the agendas for Code Reading Club, but decomposed into a tool-belt of questions and investigative techniques students can use to read new files of code.
  - this would be covered early on and used as a reference thereafter
- [comments](./comments?--defaults)
  - a guide to the different ways comments can be used in code
  - accompanied by files of code demonstrating different (good and bad) comments
- [flash-cards](./flash-cards?--defaults)
  - flash cards covering syntax & other base knowledge
  - written in markdown for easy authoring and maintenance
- [parsons](./parsons?--defaults)
  - these can actually be run, but it's not required
- [pronunciation-manual](./pronunciation-manual?--defaults)
  - a guide to reading and pronouncing javascript
  - can be full phrases for common lines or just some phonology for base units
- [read-only](./read-only?--defaults)
  - files of more advanced code that students would not be expected to fully understand
  - for practicing the code reading questions and gaining experience with un-understandable code
- [what-is-programming](./what-is-programming?--defaults)
  - just what it sounds like

## 2: things that involve running code but not modifying it (comments are allowed)

- [describing-errors](./describing-errors?--defaults)
  - examples and exercises to give students a structured approach for finding and describing errors
  - more advanced, and really only necessary for #3 exercises (even though it is a #2 exercise)
  - does require a little poking around in the devtools
- [forest-and-trees](./forest-and-trees?--defaults)
  - a structured approach to deep reading files of code, along with a full commenting strategy
  - not something to recommend doing in real projects but maybe helpful while learning
- [logging](./logging?--defaults)
  - tips and strategies for logging code
  - in the exercises students will be given un-logged code, and need to write in helpful logs
- [naming-variables](./naming-variables?--defaults)
  - tips for writing good variable names
  - exercises would be something like replacing bad variable names with better ones in working programs

## 3: things that involve running and modifying code

- [fill-in-blanks](./fill-in-blanks?--defaults)
  - different types of exercises built around filling in blanks in .js files

---

ways to study code with study-lenses

- static study: study it without running it, also can't modify it
  - `?parsons`
  - `?highlight`: read the code and draw on it, not in an editor
  - `?flowchart`: what it sounds like
  - `?diff`: shuffle/replace the code and reconstruct it with the guidance of a diff against the original code
- dynamic study: run the code, and modify it in an editor
  - `?study`: just this one big lense with different study options
    - static-study selections of a file
    - `run`: eval the code and see logs in the console
    - `trace`: (work in progress) instruments code to make a full trace of execution in the browser console, including line numbers. right now this only works for function calls
    - `openIn`: mostly used to open code directly in JS Tutor (probably not for in this module, heavily used in Debugging)
    - `debug`: place a debugger statement at the top of the code and eval. step through in the browser's debugger (definitely not used in this module)
    - a few others that are not relevant for now
