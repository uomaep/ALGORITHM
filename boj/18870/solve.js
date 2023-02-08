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
input = rest[0].split(" ").map((v) => +v);

const answer = [];
const set = Array.from(new Set([...input])).sort((a, b) => a - b);
const obj = {};

set.forEach((el, i) => (obj[el] = i));

for (let i = 0; i < N; i++) {
  answer.push(obj[input[i]]);
}

console.log(answer.join(" "));
