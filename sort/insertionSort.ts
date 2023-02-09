export {};

const arr: number[] = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
insertionSort(arr);
console.log(arr);

function insertionSort(arr: number[]): void {
  let j: number, tmp: number;
  for (let i = 0; i < arr.length - 1; i++) {
    j = i;
    while (arr[j] > arr[j + 1]) {
      tmp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tmp;
      j--;
      if (j < 0) break;
    }
  }
}
