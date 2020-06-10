class QuickSort {
  constructor(columns) {
    this.columns = columns;
    this.currentColumns = columns;
    this.history = [];
  }

  sort() {
    return this.quickSort(this.columns);
  }

  getHistory = () => {
    return new Promise((resolve) => {
      this.quickSort(this.columns);
      resolve(this.history);
    });
  };

  log = ([...columns], [pivot, val], moveValues, direction) => {
    // return;
    if (direction === "left") {
      let valIndex = columns.indexOf(val);
      columns.splice(valIndex, 1); //removed
      let newIndex = columns.indexOf(pivot);
      columns.splice(newIndex, 0, val);
    } else if (direction === "right") {
      let valIndex = columns.indexOf(val);
      columns.splice(valIndex, 1); //removed
      let newIndex = columns.indexOf(pivot) + 1;
      columns.splice(newIndex, 0, val);
    }
    this.currentColumns = columns;
    this.history.push([columns, [pivot, val], moveValues, direction]);
  };

  quickSort(columns) {
    // console.log(columns, columns.length);
    if (columns.length <= 1) return columns;
    let pivot = columns[Math.floor(columns.length / 2)];
    let left = [];
    let right = [];
    for (let i = 0; i < columns.length; i++) {
      let val = columns[i];
      if (pivot === val) continue;
      this.log(this.currentColumns, [pivot, val], [], "");
      if (pivot > val) {
        //if index of val > index of pivot change
        if (
          this.currentColumns.indexOf(val) > this.currentColumns.indexOf(pivot)
        ) {
          this.log(this.currentColumns, [pivot, val], [val], "left");
        }
        left.push(val);
      } else {
        //if index of pivot > index of val change
        if (
          this.currentColumns.indexOf(pivot) > this.currentColumns.indexOf(val)
        ) {
          this.log(this.currentColumns, [pivot, val], [val], "right");
        }
        right.push(val);
      }
    }
    // console.log(left, right);
    return this.quickSort(left).concat([pivot]).concat(this.quickSort(right));
  }
}
export default QuickSort;
