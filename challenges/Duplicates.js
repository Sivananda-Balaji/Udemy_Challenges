//Duplicate Arguments

function areThereDuplicates(...args) {
  const map = {};
  for (let i = 0; i < args.length; i++) {
    if (map[args[i]]) {
      return true;
    } else {
      map[args[i]] = 1;
    }
  }
  return false;
}

const result = areThereDuplicates(1, 2, 2);

console.log(result);
