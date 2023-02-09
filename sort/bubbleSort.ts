export {};

const arr: number[] = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
bubbleSort(arr);
console.log(arr);

function bubbleSort(arr: number[]): void {
  let tmp: number;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}
