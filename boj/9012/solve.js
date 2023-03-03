// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = require('fs').readFileSync('./input.txt').toString().trim();
input = input.split('\n');
const T = +input[0];

for(let i=1; i<=T; i++) {
  console.log(isVPS(input[i]));
}


function isVPS(str) {
  const stack = [];
  for(let i=0; i<str.length; i++) {
    const ch = str.charAt(i);
    if(ch == '(') stack.push(ch);
    else if(ch == ')') {
      if(stack.length == 0 || stack.pop() != '(') return 'NO';
    }
  }
  return stack.length == 0 ? 'YES' : 'NO';
}
