// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((v) => +v);
const [N, ...rest] = input;
rest.sort((a, b) => a - b);
const answer = rest.join("\n");
console.log(answer);
