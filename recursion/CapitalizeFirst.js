//Capitalize First

function capitalizeFirst(arr) {
  // add whatever parameters you deem necessary - good luck!
  const answer = [];
  if (arr.length === 0) {
    return answer;
  }
  const firstLetter = arr[0][0].toUpperCase();
  const firstWord = arr[0].slice(1);
  const finalWord = firstLetter + firstWord;
  answer.push(finalWord);
  return answer.concat(capitalizeFirst(arr.slice(1)));
}

const result = capitalizeFirst(["car", "taco", "banana"]);

console.log(result);
