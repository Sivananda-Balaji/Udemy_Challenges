// Count Down using Recursion

const CountDown = (num) => {
  if (num <= 0) {
    return;
  }
  console.log(num);
  num--;
  CountDown(num);
};

CountDown(5);
