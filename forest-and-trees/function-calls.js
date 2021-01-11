const b = x => {
  if (x === 0) {
    return x;
  } else {
    const recursed = b(x - 1)
    return recursed + x;
  }
};

const r = b(3);
const s = b(4);
