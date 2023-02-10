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
const input1 = [];
const input2 = [];
for (let i = 1; i <= N; i++) input1.push(input[i]);
for (let i = N + 1; i <= N + M; i++) input2.push(input[i]);

solution(input1, input2);

function solution(input1, input2) {
  const answer = [];
  const count = new Map();
  input1.forEach((v) => {
    if (count.has(v)) {
      count.set(v, count.get(v) + 1);
    } else {
      count.set(v, 1);
    }
  });
  input2.forEach((v) => {
    if (count.has(v)) {
      count.set(v, count.get(v) + 1);
    } else {
      count.set(v, 1);
    }
  });

  for (const [key, value] of count) {
    if (value === 2) answer.push(key);
  }

  answer.sort((a, b) => (a > b ? 1 : -1));
  console.log(answer.length + "\n" + answer.join("\n"));
}
