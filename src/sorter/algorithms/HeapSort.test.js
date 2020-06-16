import HeapSort from "./HeapSort";

const columns = [
  {
    input: [3, 2, 4, 6, 5, 7, 8, 1, 10, 9],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  { input: [2, 1], expected: [1, 2] },
  { input: [2, 1, 5, 3, 4], expected: [1, 2, 3, 4, 5] },
];

test.each(columns)("Arrays should be sorted", ({ input, expected }) => {
  let sorter = new HeapSort(input);
  expect(sorter.sort()).toStrictEqual(expected);
});

test("Empty should return empty", () => {
  let sorter = new HeapSort([]);
  expect(sorter.sort()).toStrictEqual([]);
});

test("Array of size 1 should return itself", () => {
  let sorter = new HeapSort([2]);
  expect(sorter.sort()).toStrictEqual([2]);
});
