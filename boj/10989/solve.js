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

input = input.map((v) => +v);
const [N, ...rest] = input;
solution(N, rest);

function solution(N, input) {
  const count = Array.from({ length: 10001 }, () => 0);
  const answer = [];
  for (let i = 0; i < N; i++) count[input[i]]++;
  for (let i = 0; i < count.length; i++) {
    if (count[i] === 0) continue;
    for (let j = 0; j < count[i]; j++) answer.push(i);
  }
  console.log(answer.join("\n"));
}
