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

input = input.map((v) => +v);
const [N, ...rest] = input;
const tmp = Array.from({ length: N });
mergeSort(rest, 0, N - 1);
console.log(rest.join("\n"));

function mergeSort(data, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    mergeSort(data, low, mid);
    mergeSort(data, mid + 1, high);
    merge(data, low, mid, high);
  }
}

function merge(data, low, mid, high) {
  let left = low;
  let right = mid + 1;
  let tmpIndex = low;

  while (left <= mid && right <= high) {
    if (data[left] < data[right]) tmp[tmpIndex++] = data[left++];
    else tmp[tmpIndex++] = data[right++];
  }

  if (left > mid) while (right <= high) tmp[tmpIndex++] = data[right++];
  else while (left <= mid) tmp[tmpIndex++] = data[left++];

  for (let i = low; i <= high; i++) data[i] = tmp[i];
}
