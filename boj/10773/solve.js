// let input = require('fs').readFileSync('./dev/stdin').toString().trim();
let input = require('fs').readFileSync('./input.txt').toString().trim();
input = input.split('\n').map(v => +v);
const [K, ...rest] = input; 

const stack = [];
rest.forEach((v) => {
  if(v == 0) stack.pop();
  else stack.push(v);
})

console.log(stack.reduce((sum, v) => sum + v, 0));