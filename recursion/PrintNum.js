// Print Number in Order

const printNum = (num) => {
  if (num === 0) {
    return;
  }
  printNum(num - 1);
  console.log(num);
};

printNum(5);
