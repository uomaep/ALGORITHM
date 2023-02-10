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

const [n, k] = input[0].split(" ").map((v) => +v);
input = input[1].split(" ").map((v) => +v);
solution(n, k, input);

function solution(n, k, data) {
  const tmp = Array.from({ length: n });
  let inputCnt = 0;
  let answer;
  mergeSort(data, 0, n - 1);
  console.log(answer ? answer : -1);

  function mergeSort(data, start, end) {
    if (start < end) {
      const mid = Math.floor((start + end) / 2);
      mergeSort(data, start, mid);
      mergeSort(data, mid + 1, end);
      merge(data, start, mid, end);
    }
  }

  function merge(data, start, mid, end) {
    let left = start;
    let right = mid + 1;
    let tmpIndex = start;

    while (left <= mid && right <= end) {
      if (data[left] < data[right]) tmp[tmpIndex++] = data[left++];
      else tmp[tmpIndex++] = data[right++];
    }

    if (left > mid) while (right <= end) tmp[tmpIndex++] = data[right++];
    else while (left <= mid) tmp[tmpIndex++] = data[left++];

    for (let i = start; i <= end; i++) {
      data[i] = tmp[i];
      if (++inputCnt === k) answer = data[i];
    }
  }
}
