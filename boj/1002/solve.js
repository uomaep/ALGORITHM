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

const T = +input[0];

for (let i = 1; i <= T; i++) {
  const [x1, y1, r1, x2, y2, r2] = input[i].split(" ").map((v) => +v);
  console.log(solution(x1, y1, r1, x2, y2, r2));
}

function solution(x1, y1, r1, x2, y2, r2) {
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  if (distance === 0 && r1 === r2) return -1;
  else if (distance === r1 + r2 || distance === Math.abs(r1 - r2)) return 1;
  else if (distance < r1 + r2 && distance > Math.abs(r1 - r2)) return 2;
  else return 0;
}
