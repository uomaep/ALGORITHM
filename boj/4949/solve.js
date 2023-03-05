// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = require('fs').readFileSync('./input.txt').toString().trim();
input = input.split('\n');
for(let i=0; i<input.length; i++) {
  const str = input[i];
  if(str === '.') break;
  console.log(solution(str));
}

function solution(str) {
  const stack = [];
  for(let i=0; i<str.length; i++) {
    const ch = str.charAt(i);
    if(ch === '.') break;
    else if(ch === '(' || ch === '[') stack.push(ch);
    else if(ch === ')' || ch === ']') {
      if(stack.length === 0) return 'no';
      if((ch === ')' && stack.pop() != '(') || (ch === ']' && stack.pop() != '[')) return 'no';
    }
  }
  return stack.length === 0 ? 'yes' : 'no';
}
