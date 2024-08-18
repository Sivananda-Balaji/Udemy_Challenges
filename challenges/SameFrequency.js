// same frequency

function sameFrequency(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);
  if (str1.length !== str2.length) {
    return false;
  }
  const map = {};
  for (let i = 0; i < str1.length; i++) {
    map[str1[i]] ? map[str1[i]]++ : (map[str1[i]] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    if (!map[str2[i]]) {
      return false;
    } else if (map[str2[i]] > 1) {
      map[str2[i]]--;
    } else {
      delete map[str2[i]];
    }
  }
  return true;
}

const result = sameFrequency(3589578, 5879385);

console.log(result);
