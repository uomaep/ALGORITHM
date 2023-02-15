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

const [N, M] = input[0].split(" ").map((v) => +v);
const data = input[1].split(" ").map((v) => +v);
const cumsum = Array.from({ length: data.length + 1 }, () => 0);
const answer = [];
data.forEach((v, i) => {
  cumsum[i + 1] = cumsum[i] + v;
});

for (let k = 0; k < M; k++) {
  const [i, j] = input[2 + k].split(" ").map((v) => +v);
  answer.push(cumsum[j] - cumsum[i - 1]);
}

console.log(answer.join("\n"));
