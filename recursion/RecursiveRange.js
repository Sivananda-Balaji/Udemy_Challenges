const recursiveRange = (num) => {
  if (num === 1) {
    return num;
  }
  return num + recursiveRange(num - 1);
};

const result = recursiveRange(10);

console.log(result);
