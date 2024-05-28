// test.js

const MockDataGen = require("./index");

console.log("Generate String:", MockDataGen.generateString(15));
console.log("Generate Number:", MockDataGen.generateNumber(1, 10));
console.log("Generate Boolean:", MockDataGen.generateBoolean());
console.log(
  "Generate Date:",
  MockDataGen.generateDate(new Date(2020, 0, 1), new Date(2020, 11, 31))
);
console.log("Generate Name:", MockDataGen.generateName());
console.log(
  "Generate Data:",
  MockDataGen.generateData({
    name: "name",
    age: { type: "number", min: 18, max: 99 },
    active: "boolean",
    joinDate: {
      type: "date",
      start: new Date(2000, 0, 1),
      end: new Date(2020, 11, 31),
    },
  })
);
