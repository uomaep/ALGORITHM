export {};
const arr: number[] = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
const answer = countingSort(arr, Math.max(...arr));
console.log(answer);

function countingSort(data: number[], max: number): number[] {
  const count: number[] = Array.from({ length: max + 1 }, () => 0);
  const answer: number[] = [];
  for (let i = 0; i < data.length; i++) count[data[i]]++;
  for (let i = 0; i < count.length; i++) {
    if (count[i] == 0) continue;
    for (let j = 0; j < count[i]; j++) answer.push(i);
  }
  return answer;
}
