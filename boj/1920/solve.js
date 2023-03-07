// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = require('fs').readFileSync('./input.txt').toString().trim();
input = input.split('\n');
const [N, A, M, B] = input.map(v => v.split(' ').map(v => +v));
const answer = [];
A.sort((a, b) => a - b);
B.forEach(v => {
  answer.push(binarySearch(v, A));
})

console.log(answer.join('\n'));

function binarySearch(key, data) {
  let start = 0;
  let end = data.length - 1;
  while(start <= end) {
    const mid = Math.floor((start + end) / 2);
    if(data[mid] === key) return 1;
    else if(data[mid] > key) end = mid - 1;
    else start = mid + 1;
  }
  return 0;
}


