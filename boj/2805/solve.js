// let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let input = require("fs").readFileSync("./input.txt").toString().trim();
input = input.split("\n");
const [N, M] = input[0].split(" ").map((v) => +v);
const tree = input[1].split(" ").map((v) => +v);

let start = 1;
let end = Math.max(...tree);

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let sum = 0;
  tree.forEach((v) => {
    if (v > mid) sum += v - mid;
  });
  if (sum >= M) start = mid + 1;
  else end = mid - 1;
}

console.log(end);
