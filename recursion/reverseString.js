//reverse String

function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) {
    return "";
  }
  return str.at(-1) + reverse(str.slice(0, str.length - 1));
}

const result = reverse("hello");

console.log(result);
