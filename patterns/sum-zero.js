//Sum Zero

const sumZero = (arr) => {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return "No Matches Found";
};

const arr = [-4, -3, -2, -1, 0, 1, 2, 3, 10];

const result = sumZero(arr);

console.log(result);
