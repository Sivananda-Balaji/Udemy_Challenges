// Search Num

const searchNum = (nums, num) => {
  let left = 0,
    right = nums.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === num) {
      return mid;
    } else if (nums[mid] >= num) {
      left++;
    } else {
      right--;
    }
  }
  return -1;
};

const nums = [1, 2, 3, 4, 5, 6, 7],
  num = 4;

const result = searchNum(nums, num);

console.log(result);
