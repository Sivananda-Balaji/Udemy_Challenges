//Sum Range

const SumRange = (num) => {
  if (num === 1) {
    return 1;
  }
  return num + SumRange(num - 1);
};

const result = SumRange(3);

console.log(result);
