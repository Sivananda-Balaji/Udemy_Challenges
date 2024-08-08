function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
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

const result = validAnagram("texttwisttime", "timetwisttext");

console.log(result);
