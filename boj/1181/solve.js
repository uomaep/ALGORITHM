// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, ...rest] = input;
const unique = rest.filter((el, i) => rest.indexOf(el) === i);
unique.sort((a, b) =>
  a.length !== b.length ? a.length - b.length : a > b ? 1 : -1
);
console.log(unique.join("\n"));
