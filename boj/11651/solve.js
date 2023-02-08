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
const [N, ...rest] = input;
let spots = [];

class Spot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `${this.x} ${this.y}`;
  }
}

rest.forEach((v) => {
  const [x, y] = v.split(" ");
  spots.push(new Spot(x, y));
});

spots.sort((a, b) => (a.y === b.y ? a.x - b.x : a.y - b.y));
spots = spots.map((spot) => spot.toString());
console.log(spots.join("\n"));
