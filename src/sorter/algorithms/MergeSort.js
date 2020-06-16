class MergeSort {
  constructor(columns) {
    this.currentColumns = columns;
    this.columns = columns;
    this.history = [];
  }

  log = (currentColumns, valA, valB) => {
    if (valA === undefined || valB === undefined) return;
    this.history.push([[...currentColumns], [valA, valB], []]); //before
    if (valA > valB) {
      let valBIndex = currentColumns.indexOf(valB);
      currentColumns.splice(valBIndex, 1);
      let valAIndex = currentColumns.indexOf(valA);
      currentColumns.splice(valAIndex, 0, valB);
      this.history.push([[...currentColumns], [valA, valB], [valB]]); //after
      this.currentColumns = currentColumns;
    }
  };

  sort = () => {
    return this.columns.length === 0 ? [] : this.mergeSort(this.columns);
  };

  getHistory = () => {
    return new Promise((resolve) => {
      this.mergeSort(this.columns);
      resolve(this.history);
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
      this.log([...this.currentColumns], left[0], right[0]);
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
