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

const N = +input[0];
const M = +input[2];
const input1 = input[1].split(" ").map((v) => +v);
const input2 = input[3].split(" ").map((v) => +v);

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
      answer.push(count.get(v));
    } else {
      answer.push(0);
    }
  });

  console.log(answer.join(" "));
}
