const arr: number[] = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
selectionSort(arr);
console.log(arr);

function selectionSort(arr: number[]): void {
  let min: number,
    index: number = 0,
    tmp: number;
  for (let i = 0; i < arr.length; i++) {
    min = 9999;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }
    tmp = arr[i];
    arr[i] = arr[index];
    arr[index] = tmp;
  }
}
