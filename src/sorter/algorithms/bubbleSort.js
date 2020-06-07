class BubbleSort {
  constructor(columns) {
    this.columns = columns;
    this.isSorted = false;
    this.swapped = false;
    this.currentIndex = 0;
    this.compareIndex = 1;
    this.count = 0;
  }

  getIsSorted = () => {
    return this.isSorted;
  };

  getCurrentIndex = () => {
    return this.currentIndex;
  };

  getCompareIndex = () => {
    return this.compareIndex;
  };

  getColumns = () => {
    return this.columns;
  };

  //return true if needs to swap
  compare = () => {
    if (this.columns[this.currentIndex] > this.columns[this.compareIndex]) {
      return true;
    }
    return false;
  };

  swap = () => {
    let currentValue = this.columns[this.currentIndex];
    let compareValue = this.columns[this.compareIndex];
    this.columns[this.currentIndex] = compareValue;
    this.columns[this.compareIndex] = currentValue;
    this.swapped = true;
    return this.columns;
  };

  step = () => {
    if (this.compareIndex + 1 >= this.columns.length - this.count) {
      if (this.swapped !== true) this.isSorted = true;
      this.swapped = false;
      this.currentIndex = 0;
      this.compareIndex = 1;
      this.count++;
    } else {
      this.currentIndex++;
      this.compareIndex++;
    }
  };

  // step = () => {
  //   let currentValue = this.columns[this.currentIndex];
  //   let compareValue = this.columns[this.compareIndex];
  //   if (currentValue > compareValue) {
  //     this.columns[this.currentIndex] = compareValue;
  //     this.columns[this.compareIndex] = currentValue;
  //     this.swapped = true;
  //   }
  //   if (this.compareIndex + 1 >= this.columns.length - this.count) {
  //     if (this.swapped !== true) this.isSorted = true;
  //     this.swapped = false;
  //     this.currentIndex = 0;
  //     this.compareIndex = 1;
  //     this.count++;
  //   } else {
  //     this.currentIndex++;
  //     this.compareIndex++;
  //   }

  //   return this.columns;
  // };
}

export default BubbleSort;
