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

const input1 = input[1].split(" ").map((v) => +v);
const input2 = input[3].split(" ").map((v) => +v);

solution(input1, input2);

function solution(input1, input2) {
  input1.sort((a, b) => a - b);
  const answer = input2.map((v) => binarySearch(input1, v));
  console.log(answer.join(" "));

  function binarySearch(data, key) {
    let start = 0;
    let end = data.length - 1;
    let mid;

    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (data[mid] === key) return 1;
      else if (key < data[mid]) end = mid - 1;
      else start = mid + 1;
    }

    return 0;
  }
}
