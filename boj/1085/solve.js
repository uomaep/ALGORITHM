// let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let input = require("fs").readFileSync("./input.txt").toString().trim();
input = input.split(" ").map((v) => +v);
const [x, y, w, h] = input;
solution(x, y, w, h);

function solution(x, y, w, h) {
  const left = x; // (x, y) 점을 기준으로
  const right = w - x;
  const top = h - y;
  const bottom = y;
  console.log(Math.min(left, right, top, bottom));
}
