// let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let input = require("fs").readFileSync("./input.txt").toString().trim();
input = input.split("\n");
const [K, N] = input[0].split(" ").map((v) => +v);
const arr = [];
for (let i = 1; i <= K; i++) arr.push(+input[i]);

let start = 1;
let end = Math.max(...arr);

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let cnt = 0;
  arr.forEach((v) => {
    cnt += Math.floor(v / mid);
  });
  if (cnt >= N) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(end);
