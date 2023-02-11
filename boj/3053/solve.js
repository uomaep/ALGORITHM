// let input = +require("fs").readFileSync("/dev/stdin").toString().trim();
let input = +require("fs").readFileSync("./input.txt").toString().trim();

const area1 = (Math.PI * input ** 2).toFixed(6);
const area2 = (2 * input ** 2).toFixed(6);
console.log(area1 + "\n" + area2);
