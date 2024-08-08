// Count Unique Values

const countUniqueValues = (nums) => {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

const nums = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];

const result = countUniqueValues(nums);

console.log(result);
