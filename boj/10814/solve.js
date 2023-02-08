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
const people = [];

class Person {
  constructor(age, name, order) {
    this.age = age;
    this.name = name;
    this.order = order;
  }
  toString() {
    return `${this.age} ${this.name}`;
  }
}

rest.filter((p, i) => {
  const [age, name] = p.split(" ");
  people.push(new Person(age, name, i));
});
people.sort((a, b) => (a.age !== b.age ? a.age - b.age : a.order - b.order));
const answer = people.map((p) => p.toString());
console.log(answer.join("\n"));
