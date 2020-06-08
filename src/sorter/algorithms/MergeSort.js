class MergeSort {
  constructor(columns) {
    this.columns = columns;
  }

  sort = () => {
    return mergeSort(this.columns);
  };

  mergeSort = (columns) => {
    if (columns.length === 1) return columns;
    let splitIndex = Math.ceil(columns.length / 2);
    let leftArr = columns.slice(0, splitIndex);
    let rightArr = columns.slice(splitIndex);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
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
