// Some Recursive

function someRecursive(nums, fn) {
  // add whatever parameters you deem necessary - good luck!
  if (nums.length === 0) {
    return false;
  }
  if (fn(nums[0])) {
    return true;
  }
  return someRecursive(nums.slice(1), fn);
}

const result = someRecursive([4, 6, 8, 10], (val) => val > 10);

console.log(result);
