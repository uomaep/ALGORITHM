// input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");
input = input.map((v) => +v);
input.sort((a, b) => a - b);
let sum = input.reduce((acc, v) => acc + v, 0);
console.log(sum / input.length);
console.log(input[Math.floor(input.length / 2)]);
