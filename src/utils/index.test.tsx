import { canMultiply, isMatrix } from ".";

test("allows multiplication of 1x3 by 3x3", () => {
  const matrix1 = [[4, -4, 6]];
  const matrix2 = [
    [10, -4, -1],
    [1, 2, 0],
    [-3, 4, 6],
  ];
  expect(canMultiply(matrix1, matrix2)).toBe(true);
});

test("allows multiplication of 2x3 by 3x3", () => {
  const matrix1 = [
    [4, -4, 6],
    [5, 0, 7],
  ];
  const matrix2 = [
    [10, -4, -1],
    [1, 2, 0],
    [-3, 4, 6],
  ];
  expect(canMultiply(matrix1, matrix2)).toBe(true);
});

test("allows multiplication of 3x3 by 3x3", () => {
  const matrix1 = [
    [4, -4, 6],
    [5, 0, 7],
    [-3, 8, 9],
  ];
  const matrix2 = [
    [10, -4, -1],
    [1, 2, 0],
    [-3, 4, 6],
  ];
  expect(canMultiply(matrix1, matrix2)).toBe(true);
});

test("finds faulty matrices", () => {
  const matrix = [[4, -4, 6], [5, 0, 7], [-3]];
  expect(isMatrix(matrix)).toBe(false);
});
