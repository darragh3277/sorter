class MergeSort {
  constructor(columns) {
    this.columns = columns;
    this.isSorted = false;
    this.steps = [];
  }

  sort = () => {
    return new Promise((resolve) => {
      this.steps.push([this.columns, null, null, false, false]);
      let sorted = this.mergeSort(this.columns);
      this.steps.push([sorted, null, null, false, false]);
      resolve(this.steps);
    });
  };

  mergeSort = (columns) => {
    if (columns.length === 1) return columns;
    let splitIndex = Math.ceil(columns.length / 2);
    let leftArr = columns.slice(0, splitIndex);
    let rightArr = columns.slice(splitIndex);
    return this.merge(this.mergeSort(leftArr), this.mergeSort(rightArr));
  };

  merge = (left, right) => {
    let merged = [];
    while (left.length > 0 || right.length > 0) {
      if (left[0] > right[0] || left.length === 0) {
        merged.push(right.shift());
      } else if (right[0] > left[0] || right.length === 0) {
        merged.push(left.shift());
      }
    }
    return merged;
  };
}
export default MergeSort;
