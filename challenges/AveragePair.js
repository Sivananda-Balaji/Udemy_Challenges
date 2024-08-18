//Average Pair

function averagePair(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const average = (nums[left] + nums[right]) / 2;
    if (average === target) {
      return true;
    } else if (average > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
const result = averagePair([1, 2, 3], 2.5);

console.log(result);
