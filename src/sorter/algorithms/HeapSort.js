class HeapSort {
  constructor(columns) {
    this.columns = columns;
    this.sorted = [];
    this.history = [];
  }

  sort = () => {
    console.log("in: ", this.columns);
  };

  getHistory = () => {
    return new Promise((resolve) => {
      console.log("in: ", this.columns);
      this.heapSort(this.columns);
      resolve(this.history);
    });
  };

  heapSort = (columns) => {
    this.loopProtect--;
    let n = columns.length;
    if (n === 0) return;
    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
      let root = columns[i];
      let l = columns[2 * i + 1];
      let r = columns[2 * i + 2];
      //no children nothing to do
      if (l === undefined && r === undefined) continue;
      console.log("here", i, root, l, r);
      //init swap to false
      let swap = false;
      //if left or right is bigger, swap required
      if (l !== undefined && l > root) swap = true;
      if (r !== undefined && r > root) swap = true;
      //swap
      if (swap === true) {
        //assume left exists at this point
        //if right exists compare for largest
        let largest = l;
        if (r !== undefined && r > l) largest = r;
        columns[columns.indexOf(largest)] = root;
        columns[i] = largest;
      }
    }

    let head = columns[0];
    let tail = columns.pop();
    this.sorted.unshift(head);
    console.log("h", head, "s", this.sorted, "c", columns);
    if (columns.length === 0) return;
    columns[0] = tail;
    return this.heapSort(columns);
  };
}
export default HeapSort;
