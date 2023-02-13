// let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let input = require("fs").readFileSync("./input.txt").toString().trim();
const [num1, num2] = input.split(" ").map((v) => +v);
solution(num1, num2);

function solution(num1, num2) {
  const num1Divisors = [];
  const num2Divisors = [];

  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) num1Divisors.push(i);
  }

  for (let i = 1; i <= num2; i++) {
    if (num2 % i === 0) num2Divisors.push(i);
  }

  const commonDivisors = num1Divisors.filter((v) => num2Divisors.includes(v));
  const GCD = commonDivisors[commonDivisors.length - 1];
  const GCM = (num1 * num2) / GCD;
  console.log(GCD + "\n" + GCM);
}
