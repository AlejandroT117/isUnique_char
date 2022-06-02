const isUnique = require('./index');

const tests = [
  {
    description: "string without reps",
    input: "asdfg",
    exp: true
  },
  {
    description: "string with reps",
    input: "asdfasdf",
    exp: false
  },
  {
    description: "void string",
    input: "",
    exp: true
  }
];

describe("return max sequence", () => {
  for (const t of tests) {
    test(t.description, () => {
      expect(isUnique(t.input)).toBe(t.exp);
    });
  }
});