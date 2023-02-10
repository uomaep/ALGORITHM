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

const [N, M] = input[0].split(" ").map((v) => +v);
const input1 = [];
const input2 = [];
for (let i = 1; i <= N; i++) input1.push(input[i]);
for (let i = N + 1; i <= M + N; i++) input2.push(input[i]);

solution(input1, input2);

function solution(input1, input2) {
  let answer = 0;
  input1.sort((a, b) => (a > b ? 1 : -1));
  input2.forEach((v) => {
    if (binarySearch(input1, v)) answer++;
  });

  console.log(answer);

  function binarySearch(data, key) {
    let start = 0;
    let end = data.length - 1;
    let mid;

    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (key === data[mid]) return true;
      else if (key < data[mid]) end = mid - 1;
      else start = mid + 1;
    }

    return false;
  }
}
