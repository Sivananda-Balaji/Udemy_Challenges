const stringifyNumbers = (myObj) => {
  const answerObj = {};
  for (let index in myObj) {
    if (typeof myObj[index] === "number") {
      answerObj[index] = String(myObj[index]);
    } else if (
      typeof myObj[index] === "object" &&
      !Array.isArray(myObj[index])
    ) {
      answerObj[index] = stringifyNumbers(myObj[index]);
    } else {
      answerObj[index] = myObj[index];
    }
  }
  return answerObj;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

const result = stringifyNumbers(obj);

console.log(result);
