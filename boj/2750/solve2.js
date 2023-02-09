// let input = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n");
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((v) => +v);
let [N, ...rest] = input;
insertionSort(rest, N);
console.log(rest.join("\n"));

function insertionSort(data, N) {
  let min, index, tmp;
  for (let i = 0; i < N; i++) {
    min = 1001;
    for (let j = i; j < N; j++) {
      if (data[j] < min) {
        min = data[j];
        index = j;
      }
    }
    tmp = data[i];
    data[i] = data[index];
    data[index] = tmp;
  }
}
