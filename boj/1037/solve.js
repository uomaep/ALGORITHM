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

const N = +input[0];
const divisors = input[1].split(" ").map((v) => +v);
divisors.sort((a, b) => a - b);
console.log(divisors[0] * divisors[divisors.length - 1]);
