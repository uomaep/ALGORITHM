export {};

const arr: number[] = [7, 6, 5, 8, 3, 5, 9, 1];
let tmp: number[] = Array.from({ length: arr.length }, () => 0);
mergeSort(arr, 0, arr.length - 1);
console.log(arr);

function mergeSort(data: number[], low: number, high: number) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    mergeSort(data, low, mid);
    mergeSort(data, mid + 1, high);
    merge(data, low, mid, high);
  }
}

function merge(data: number[], low: number, mid: number, high: number): void {
  let left = low;
  let right = mid + 1;
  let tmpIndex = low;

  while (left <= mid && right <= high) {
    if (data[left] < data[right]) tmp[tmpIndex++] = data[left++];
    else tmp[tmpIndex++] = data[right++];
  }

  if (left > mid) {
    while (right <= high) tmp[tmpIndex++] = data[right++];
  } else {
    while (left <= mid) tmp[tmpIndex++] = data[left++];
  }

  for (let i = low; i <= high; i++) data[i] = tmp[i];
}
