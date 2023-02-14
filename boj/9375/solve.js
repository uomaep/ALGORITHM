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

const [T, ...rest] = input;

let idx = 0;
for (let i = 0; i < T; i++) {
  const n = +rest[idx];
  const items = new Map();
  for (let j = 1; j <= n; j++) {
    const [item, type] = rest[idx + j].split(" ");
    items.has(type) ? items.set(type, items.get(type) + 1) : items.set(type, 1);
  }
  if (items.size === 1) items.forEach((v) => console.log(v));
  else {
    let answer = 1;
    items.forEach((v) => (answer *= v + 1));
    console.log(answer - 1);
  }
  idx += n + 1;
}
