// let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let input = require("fs").readFileSync("./input.txt").toString().trim();
const [N, K] = input.split(" ").map((v) => +v);
solution(N, K);

function solution(N, K) {
  const DP = Array.from({ length: 1001 }, () => Array.from({ length: 1001 }));
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j <= N; j++) {
      if (i === j || j === 0) DP[i][j] = 1;
      else DP[i][j] = (DP[i - 1][j] + DP[i - 1][j - 1]) % 10007;
    }
  }
  console.log(DP[N][K]);
}
