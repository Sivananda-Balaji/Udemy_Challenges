// Collect Odd Values

const OddValues = (nums) => {
  let newArr = [];
  if (nums.length === 0) {
    return newArr;
  }
  if (nums[0] % 2 !== 0) {
    newArr.push(nums[0]);
  }
  newArr = newArr.concat(OddValues(nums.slice(1)));
  return newArr;
};

const result = OddValues([1, 2, 3]);

console.log(result);
