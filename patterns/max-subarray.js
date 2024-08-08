// Max Sub array

const maxSubArray = (nums, num) => {
  if (num > nums.length) {
    return null;
  }
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += nums[i];
  }
  let tempSum = maxSum;
  for (let i = num; i < nums.length; i++) {
    tempSum += nums[i] - nums[i - num];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

const nums = [2, 6, 9, 2, 1, 8, 5, 6, 3],
  num = 3;

const result = maxSubArray(nums, num);

console.log(result);

/* const maxSubArray = (nums, num) => {
  if (num > nums.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < nums.length - num; i++) {
    let temp = 0;
    for (let j = i; j < i + num; j++) {
      temp += nums[j];
    }
    max = temp > max ? temp : max;
  }
  return max;
}; */
