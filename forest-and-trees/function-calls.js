const turtleNubbins = x => {
  if (x === 0) {
    return x;
  } else {
    const recursed = turtleNubbins(x - 1);
    return recursed + x;
  }
};

const r = turtleNubbins(3);
const s = turtleNubbins(4);
