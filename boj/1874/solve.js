// let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let input = require("fs").readFileSync("./input.txt").toString().trim();
input = input.split("\n").map((v) => +v);
const [N, ...rest] = input;

const stack = [];
const answer = [];
let impossible = false;

let tmp = 1;
rest.forEach((v) => {
  while (tmp <= v) {
    stack.push(tmp++);
    answer.push("+");
  }
  if (stack[stack.length - 1] === v) {
    stack.pop();
    answer.push("-");
  } else {
    impossible = true;
  }
});

console.log(impossible ? "NO" : answer.join("\n"));
