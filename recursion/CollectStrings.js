const collectStrings = (myObj) => {
  const answer = [];
  for (let index in myObj) {
    if (typeof myObj[index] === "object") {
      answer.push(...collectStrings(myObj[index]));
    } else if (typeof myObj[index] === "string") {
      answer.push(myObj[index]);
    }
  }
  return answer;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

const result = collectStrings(obj); // ["foo", "bar", "baz"])

console.log(result);
