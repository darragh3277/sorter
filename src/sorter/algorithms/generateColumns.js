class GenerateColumns {
  constructor(size) {
    this.size = size;
  }
  getColumns = () => {
    if (this.size < 0) return [];
    let arr = new Array(this.size);
    for (let i = 0; i < this.size; i++) {
      arr[i] = i + 1;
    }
    for (let i = 0; i < this.size; i++) {
      let index = Math.floor(Math.random() * Math.floor(this.size));
      let temp = arr[index];
      let current = arr[i];
      arr[i] = temp;
      arr[index] = current;
    }
    return arr;
  };
}

export default GenerateColumns;
