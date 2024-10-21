// Product Of Array

const productOfArray = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }
  return nums[0] * productOfArray(nums.slice(1));
};

const result = productOfArray([1, 2, 3, 10]);

console.log(result);
