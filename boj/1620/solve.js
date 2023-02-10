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
for (let i = N + 1; i <= N + M; i++) input2.push(input[i]);

solution(input1, input2);

function solution(input1, input2) {
  const nameToNumber = new Map(); // name: number 구조
  const numberToName = new Map(); // number: name 구조
  const answer = [];

  input1 = [...new Set(input1)];
  input1.forEach((v, i) => {
    nameToNumber.set(v, i + 1);
    numberToName.set(i + 1, v);
  });

  input2.forEach((v) => {
    if (isNaN(+v)) {
      answer.push(nameToNumber.get(v));
    } else {
      answer.push(numberToName.get(+v));
    }
  });

  console.log(answer.join("\n"));
}
