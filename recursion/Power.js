// Power of the value

const power = (base, exp) => {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
};

const result = power(2, 3);

console.log(result);
