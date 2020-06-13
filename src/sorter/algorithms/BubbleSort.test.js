import BubbleSort from "./BubbleSort";

const columns = [3, 2, 4, 6, 5, 7, 8, 1, 10, 9];

test("array should be sorted", () => {
  let sorter = new BubbleSort(columns);
  expect(sorter.sort()).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
