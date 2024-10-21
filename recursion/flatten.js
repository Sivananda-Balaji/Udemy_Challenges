function flatten(nums) {
  // add whatever parameters you deem necessary - good luck!
  const answer = [];
  if (nums.length === 0) {
    return answer;
  }
  if (typeof nums[0] === "object") {
    answer.push(...flatten(nums[0]));
  } else {
    answer.push(nums[0]);
  }

  return answer.concat(flatten(nums.slice(1)));
}

const result = flatten([1, 2, 3, [4, 5]]);

console.log(result);
