//nestedEvenSum

function nestedEvenSum(myObj) {
  // add whatever parameters you deem necessary - good luck!
  let answer = 0;
  for (let val in myObj) {
    if (typeof myObj[val] === "object") {
      answer += nestedEvenSum(myObj[val]);
    } else if ((typeof myObj[val] === "number", myObj[val] % 2 === 0)) {
      answer += myObj[val];
    }
  }
  return answer;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

const resultOne = nestedEvenSum(obj1); // 6
const resultTwo = nestedEvenSum(obj2); // 10

console.log(resultOne, resultTwo);
