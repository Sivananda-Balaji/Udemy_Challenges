//isSubsequence

function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  let ptr1 = 0,
    ptr2 = 0;
  const len1 = str1.length,
    len2 = str2.length;
  while (ptr1 < len1 && ptr2 < len2) {
    if (str1[ptr1] === str2[ptr2]) {
      ptr1++;
      ptr2++;
    } else {
      ptr2++;
    }
  }
  return ptr1 === len1;
}

const result = isSubsequence("sing", "sting");

console.log(result);
