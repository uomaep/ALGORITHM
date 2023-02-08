let input = require("fs").readFileSync("/dev/stdin").toString().trim();
// let input = require("fs").readFileSync("./input.txt").toString().trim();
const answer = [];
for (let i = 0; i < input.length; i++) answer.push(+input.charAt(i));
answer.sort((a, b) => b - a);
console.log(answer.join(""));
