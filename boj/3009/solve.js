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

const x = new Set();
const y = new Set();
const answer = [];

for (let i = 0; i < 3; i++) {
  const [spotX, spotY] = input[i].split(" ").map((v) => +v);
  x.has(spotX) ? x.delete(spotX) : x.add(spotX);
  y.has(spotY) ? y.delete(spotY) : y.add(spotY);
}

x.forEach((v) => answer.push(v));
y.forEach((v) => answer.push(v));

console.log(answer.join(" "));
