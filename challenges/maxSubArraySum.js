function maxSubarraySum(nums, subLen) {
  // add whatever parameters you deem necessary - good luck!
  const len = nums.length;
  if (subLen > len) {
    return null;
  }
  let totalSum = 0;
  for (let i = 0; i < subLen; i++) {
    totalSum += nums[i];
  }
  let j = 0;
  let sum = totalSum;
  for (let i = subLen; i < len; i++) {
    sum = sum + nums[i] - nums[j];
    totalSum = Math.max(totalSum, sum);
    j++;
  }
  return totalSum;
}

const result = maxSubarraySum([-3, 4, 0, -2, 6, -1], 2);

console.log(result);
