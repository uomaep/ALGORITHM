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

for (let i = 0; i < input.length - 1; i++) {
  const [height, width, hypotenuse] = input[i]
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b);
  console.log(solution(height, width, hypotenuse) ? "right" : "wrong");
}

function solution(height, width, hypotenuse) {
  return hypotenuse ** 2 === height ** 2 + width ** 2;
}
