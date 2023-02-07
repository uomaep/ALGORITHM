// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, k] = input[0].split(" ");
input = input[1]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => b - a);
console.log(input[k - 1]);
