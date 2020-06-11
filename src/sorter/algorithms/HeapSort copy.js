class HeapSort {
  constructor(columns) {
    this.columns = columns;
    this.currentColumns = columns;
    this.sorted = [];
    this.history = [];
    this.loopProtect = 20;
  }

  log = (columns, compareValues, moveValues) => {
    this.history.push([columns, compareValues, moveValues]);
  };

  sort = () => {
    console.log("in: ", this.columns);
  };

  getHistory = () => {
    return new Promise((resolve) => {
      console.log("in: ", this.columns);
      this.heapSort(this.columns, this.columns.length);
      console.log("out:", this.columns);
      resolve(this.history);
    });
  };

  heapSort = (columns, n) => {
    n--;
    if (n === 1) return columns;
    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
      let root = columns[i];
      let l = columns[2 * i + 1];
      let r = columns[2 * i + 2];
      console.log(root, l, r);
      //no children nothing to do
      if (l === undefined && r === undefined) continue;
      //init swap to false
      let swap = false;
      //if left or right is bigger, swap required
      if (l !== undefined && l > root) swap = true;
      if (r !== undefined && r > root) swap = true;
      this.log([...columns], [root, l, r], []);
      //swap
      if (swap === true) {
        console.log("here");
        //assume left exists at this point
        //if right exists compare for largest
        let largest = l;
        if (r !== undefined && r > l) largest = r;
        columns[columns.indexOf(largest)] = root;
        columns[i] = largest;
        this.log([...columns], [root, largest], [root, largest]);
      }
    }
    // console.log(n);
    // if (n === 0) return columns;
    let head = columns[0];
    let tail = columns[n];
    columns[0] = tail;
    columns[n] = head;
    this.log([...columns], [head, tail], [head, tail]);
    console.log(columns);
    return this.heapSort(columns, n);
  };
}
export default HeapSort;
