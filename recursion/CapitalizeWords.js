function capitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  const answer = [];
  if (arr.length === 0) {
    return answer;
  }
  const capitalWord = arr[0].toUpperCase();
  answer.push(capitalWord);
  return [...answer, ...capitalizeWords(arr.slice(1))];
}

let words = ["i", "am", "learning", "recursion"];
const result = capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log(result);
