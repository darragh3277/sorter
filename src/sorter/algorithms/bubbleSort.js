class BubbleSort {
  constructor(columns) {
    this.columns = columns;
    this.isSorted = false;
    this.swapped = false;
    this.currentIndex = 0;
    this.currentValue = null;
    this.compareValue = null;
  }

  getIsSorted = () => {
    return this.isSorted;
  };

  getCurrentValue = () => {
    return this.currentValue;
  };

  getCompareValue = () => {
    return this.compareValue;
  };

  getIsSorted = () => {
    return this.isSorted;
  };

  step = () => {
    this.currentValue = this.columns[this.currentIndex];
    this.compareValue = this.columns[this.currentIndex + 1];
    if (this.currentValue > this.compareValue) {
      this.columns[this.currentIndex] = this.compareValue;
      this.columns[this.currentIndex + 1] = this.currentValue;
      this.swapped = true;
    }
    if (this.currentIndex + 1 > this.columns.length) {
      if (this.swapped !== true) this.isSorted = true;
      this.swapped = false;
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }

    return this.columns;
  };
}

export default BubbleSort;
