export {};

const arr: number[] = [7, 6, 5, 8, 3, 5, 9, 1, 6];
heapify(arr);
heapSort(arr);
console.log(arr);

function heapSort(heap: number[]): void {
  for (let i = heap.length - 1; i >= 0; i--) {
    let tmp = heap[0];
    heap[0] = heap[i];
    heap[i] = tmp;
    let parent = 0;
    let child = 1;
    do {
      child = 2 * parent + 1;
      if (heap[child] < heap[child + 1] && child < i - 1) child++;
      if (heap[parent] < heap[child] && child < i) {
        let tmp = heap[parent];
        heap[parent] = heap[child];
        heap[child] = tmp;
      }
      parent = child;
    } while (child < i);
  }
}

function heapify(data: number[]): void {
  for (let i = 1; i < data.length; i++) {
    let child = i;
    do {
      let parent = Math.floor((child - 1) / 2);
      if (data[parent] < data[child]) {
        let tmp = data[parent];
        data[parent] = data[child];
        data[child] = tmp;
      }
      child = parent;
    } while (child != 0);
  }
}
