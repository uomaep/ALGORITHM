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
const [N, ...rest] = input;
const answer = rest.map((s) => isPalindrome(s).join(" "));
console.log(answer.join("\n"));

function recursion(s, left, right, cnt) {
  if (left >= right) return [1, cnt];
  else if (s.charAt(left) !== s.charAt(right)) return [0, cnt];
  else return recursion(s, left + 1, right - 1, cnt + 1);
}

function isPalindrome(s) {
  return recursion(s, 0, s.length - 1, 1);
}
