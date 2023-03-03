// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = require('fs').readFileSync('./input.txt').toString().trim();
input = input.split('\n');
const N = +input[0];

const stack = [];
const answer = [];

for(let i=1; i<=N; i++) {
  const op = (input[i].trim().split(' '));
  switch(op[0]) {
    case 'push':
      stack.push(+op[1]);
      break;
    case 'pop':
      answer.push(stack.length == 0 ? -1 : stack.pop());
      break;
    case 'size':
      answer.push(stack.length);
      break;
    case 'empty':
      answer.push(stack.length == 0 ? 1 : 0);
      break;
    case 'top':
      answer.push(stack.length == 0 ? -1 : stack[stack.length - 1]);
      break;
  }
}

console.log(answer.join('\n'));
