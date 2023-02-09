export {};

const arr: number[] = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

function quickSort(arr: number[], start: number, end: number): void {
  if (start >= end) return; //원소가 1개인 경우
  let pivot = start; // pivot값은 첫번째 원소
  let i = start + 1;
  let j = end;
  let tmp: number;

  while (i <= j) {
    //엇갈릴 때까지 반복
    while (i <= end && arr[i] <= arr[pivot]) i++; // pivot값보다 큰 값을 찾을 때까지
    while (j > start && arr[j] >= arr[pivot]) j--; // pivot값보다 작은 값을 찾을 때까지
    if (i > j) {
      // 현재 엇갈린 상태면 pivot값과 교체
      tmp = arr[j];
      arr[j] = arr[pivot];
      arr[pivot] = tmp;
    } else {
      tmp = arr[j];
      arr[j] = arr[i];
      arr[i] = tmp;
    }

    quickSort(arr, start, j - 1);
    quickSort(arr, j + 1, end);
  }
}
