import GenerateColumns from "../GenerateColumns";

test("Returns the right amount of columns", () => {
  let columns = new GenerateColumns(10);
  expect(columns.getColumns().length).toBe(10);
});

test("0 returns empty", () => {
  let columns = new GenerateColumns(0);
  expect(columns.getColumns().length).toBe(0);
});

test("Negative returns empty", () => {
  let columns = new GenerateColumns(-1);
  expect(columns.getColumns().length).toBe(0);
});

test("Generated columns are unique", () => {
  let size = 100;
  let comparison = [];
  let columns = new GenerateColumns(size).getColumns();
  let sorted = columns.sort((a, b) => {
    return a - b;
  });
  for (let i = 1; i <= size; i++) comparison.push(i);
  expect(sorted).toStrictEqual(comparison);
});
