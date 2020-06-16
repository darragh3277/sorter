class HeapSort {
  constructor(columns) {
    this.columns = columns;
    this.history = [];
  }

  log = (columns, compareValues, moveValues) => {
    this.history.push([columns, compareValues, moveValues]);
  };

  sort = () => {
    return this.heapSort(this.columns);
  };

  getHistory = () => {
    return new Promise((resolve) => {
      this.heapSort(this.columns);
      resolve(this.history);
    });
  };

  heapify = (columns, n, i) => {
    let largest = i;
    let compareLog = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < n && columns[l] > columns[largest]) largest = l;
    if (r < n && columns[r] > columns[largest]) largest = r;
    if (largest !== i) {
      this.log([...columns], [columns[compareLog], columns[l], columns[r]], []); //compare
      //before move
      this.log(
        [...columns],
        [columns[largest], columns[i]],
        [columns[largest], columns[i]]
      );
      let swap = columns[i];
      columns[i] = columns[largest];
      columns[largest] = swap;
      //after move
      this.log(
        [...columns],
        [columns[largest], columns[i]],
        [columns[largest], columns[i]]
      );
      this.heapify(columns, n, largest);
    }
  };

  heapSort = (columns) => {
    let n = columns.length;
    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
      this.heapify(columns, n, i);
    }
    for (let i = n - 1; i >= 0; i--) {
      let head = columns[0];
      let tail = columns[i];
      //before move
      if (head !== tail) this.log([...columns], [head, tail], [head, tail]);
      columns[0] = tail;
      columns[i] = head;
      //after move
      if (head !== tail) this.log([...columns], [head, tail], [head, tail]);
      this.heapify(columns, i, 0);
    }
    return this.columns;
  };
}
export default HeapSort;
