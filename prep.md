this is the first-draft plan for a new two-week module at HYF that would be the first introduction to JS. exercises will focus on reading, commenting, logging and completing simple programs that use prompt/alert/confirm for user interactions (no HTML/CSS).

it will cover the basics of JS as a procedural language, touching on:

- variables (let vs. const. no var)
- primitive types + typeof
- simple type coercion
  - Number() for processing user input from prompt
  - Boolean()/truthiness for understanding conditionals
- conditionals
- while loops
- for
- for-of strings

students will follow their favorite of a few selected tutorials alongside this module (to be listed in #suggested-study of the README)

---

> check out [tour.mp4](./tour.mp4) for a ... tour (it no longer matches this directory structure, but it gets the job done)

here's an overview of the folders, grouped by what a student will be studying. almost all of these are for self/group study. they wouldn't be required or submitted, students would only get feedback from coaches when they ask for it:

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
