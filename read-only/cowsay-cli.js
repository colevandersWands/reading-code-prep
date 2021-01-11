'use strict';

const cowsay = require('cowsay');
const fs = require('fs');
const path = require('path');

const COWSAID_DIRNAME = 'cowsaid';
const SUPPORTED_VERBS = ['say', 'think'];
const DOC_STRING = `CONFG OPTIONS
text:"lorem ipsum" -- what the cow should say
  default -- I cow hard
e:"oo" -- the cow's eyes.
  not all cowfiles have customizable eyes
  2 characters only is recommended
  default -- "oo"
T:"  " -- the cow's tongue
  not all cowfiles have customizable tongues
  2 characters only is recommended
  default -- "  "
f:"bees" -- the cowfile to render
  default -- default
file:fileName.txt -- the file name to render to
  default -- (new Date()).toJSON() + ".txt"
verb:"say" -- does the cow say or think?
  only "say" and "think" are supported
  default -- "say"

FLAGS
-h -- prints this helpful message
-l -- prints all possible cows
if either flag is passed as an argument, the cow will not render`;

const userArgs = process.argv.slice(2);

if (userArgs.includes('-h')) {
  console.log(DOC_STRING);
  process.exit(0);
}

if (userArgs.includes('-l')) {
  cowsay.list((err, cows) => {
    console.log(cows.join('\n'));
  });
  process.exit(0);
}

const defaultConfig = {
  text: 'I cow hard',
  e: 'oo',
  T: '  ',
  f: 'default',
  file: new Date().toJSON() + '.txt',
  verb: 'say',
};

const userConfig = userArgs
  .filter(arg => {
    const argParts = arg.split('=');
    const argName = argParts[0];

    return Object.keys(defaultConfig).includes(argName);
  })
  .map(arg => {
    const separatorIndex = arg.indexOf('=');
    const key = arg.substr(0, separatorIndex);
    const value = arg.substr(separatorIndex + 1);

    return { key, value };
  })
  .reduce((config, next) => {
    config[next.key] = next.value;
    return config;
  }, {});

if (!SUPPORTED_VERBS.includes(userConfig.verb)) {
  console.log(userConfig.verb + ' is not a supported verb, the cow will "say"');
  delete userConfig.verb;
}

const finalConfig = Object.assign(defaultConfig, userConfig);

const thisCow = cowsay[finalConfig.verb]({
  text: finalConfig.text,
  e: finalConfig.e,
  T: finalConfig.T,
  f: finalConfig.f,
});

try {
  fs.accessSync('./' + COWSAID_DIRNAME);
} catch (err) {
  console.log('--- creating ./' + COWSAID_DIRNAME + ' directory ---');
  fs.mkdirSync('./' + COWSAID_DIRNAME);
}

console.log(thisCow);
fs.writeFileSync(
  path.join(__dirname, COWSAID_DIRNAME, finalConfig.file),
  thisCow
);
