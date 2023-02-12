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

for (let i = 0; i < input.length; i++) {
  const [num1, num2] = input[i].split(" ").map((v) => +v);
  if (num1 === 0 && num2 === 0) break;
  console.log(solution(num1, num2));
}

function solution(num1, num2) {
  if (num2 % num1 === 0) return "factor";
  else if (num1 % num2 === 0) return "multiple";
  else return "neither";
}
