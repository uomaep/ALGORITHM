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
  const [N, M] = input[i].split(" ").map((v) => +v);
  solution(N, M);
}

function solution(N, M) {
  const DP = Array.from({ length: 30 }, () => Array.from({ length: 30 }));
  for (let i = 1; i <= M; i++) {
    for (let j = 0; j <= M; j++) {
      if (i === j || j === 0) DP[i][j] = 1;
      else DP[i][j] = DP[i - 1][j] + DP[i - 1][j - 1];
    }
  }
  console.log(DP[M][N]);
}
