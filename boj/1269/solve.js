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
const set1 = new Set(input[1].split(" ").map((v) => +v));
const set2 = new Set(input[2].split(" ").map((v) => +v));
solution(set1, set2);

function solution(set1, set2) {
  const answer = new Set(set1);

  set2.forEach((v) => {
    if (answer.has(v)) answer.delete(v);
    else answer.add(v);
  });

  console.log(answer.size);
}
