// let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let input = require("fs").readFileSync("./input.txt").toString().trim();
input = +input;
console.log(fac(input));

function fac(n) {
  if (n == 0) return 1;
  return n * fac(n - 1);
}
