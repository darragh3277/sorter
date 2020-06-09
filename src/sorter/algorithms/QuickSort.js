class QuickSort {
  constructor(columns) {
    this.columns = columns;
  }

  sort() {
    return quickSort(this.columns);
  }

  quickSort(columns) {
    console.log(columns, columns.length);
    if (columns.length <= 1) return columns;
    let pivot = columns[Math.floor(columns.length / 2)];
    let left = [];
    let right = [];
    for (let i = 0; i < columns.length; i++) {
      let val = columns[i];
      if (pivot === val) {
        continue;
      } else if (pivot > val) {
        left.push(val);
      } else {
        right.push(val);
      }
    }
    console.log(left, right);
    return quickSort(left).concat([pivot]).concat(quickSort(right));
  }
}
export default QuickSort;
