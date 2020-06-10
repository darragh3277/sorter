class HeapSort {
  constructor(columns) {
    this.columns = columns;
    this.history = [];
  }

  sort = () => {};

  getHistory = () => {
    return new Promise((resolve) => {
      this.heapSort(this.columns);
      resolve(this.history);
    });
  };

  heapSort = (columns) => {};
}
export default HeapSort;
