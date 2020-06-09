class BubbleSort {
  constructor(columns) {
    this.currentColumns = columns;
    this.columns = columns;
    this.history = [];
  }

  log = (currentColumns, compareValues, moveValues) => {
    this.history.push([[...currentColumns], compareValues, moveValues]);
  };

  getHistory = () => {
    return new Promise((resolve) => {
      this.bubbleSort(this.columns, this.columns.length);
      resolve(this.history);
    });
  };

  bubbleSort = (columns, pos) => {
    let sorted = true;
    for (let i = 0; i < pos - 1; i++) {
      let valA = columns[i];
      let valB = columns[i + 1];
      this.log(columns, [valA, valB], []);
      if (valA > valB) {
        columns[i] = valB;
        columns[i + 1] = valA;
        sorted = false;
        this.log(columns, [valA, valB], [valA, valB]);
      }
    }
    if (sorted === true) {
      return columns;
    }
    pos--;
    return this.bubbleSort(columns, pos);
  };
}

export default BubbleSort;
