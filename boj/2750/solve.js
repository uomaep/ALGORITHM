// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((v) => +v);
const [testCaseNum, ...rest] = input;
rest.sort((a, b) => a - b);
rest.forEach((v) => console.log(v));
