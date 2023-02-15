// let input = +require("fs").readFileSync("/dev/stdin").toString().trim();
let input = +require("fs").readFileSync("./input.txt").toString().trim();
console.log(fib(input), fibonacci(input));

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibonacci(n) {
  let f = Array.from({ length: n + 1 });
  let cnt = 0;
  f[0] = 0;
  f[1] = 1;
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
    cnt++;
  }
  return cnt - 1;
}
