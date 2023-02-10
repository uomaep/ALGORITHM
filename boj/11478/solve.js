// let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let input = require("fs").readFileSync("./input.txt").toString().trim();
solution(input);

function solution(input) {
  const set = new Set();
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      set.add(input.substring(i, j + 1));
    }
  }
  console.log(set.size);
}
