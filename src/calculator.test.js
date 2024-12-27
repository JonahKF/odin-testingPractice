import { calculator } from "./calculator";

test("tests all calculator functions", () => {
  expect(calculator.add(8, 5)).toBe(13);
  expect(calculator.subtract(8, 5)).toBe(3);
  expect(calculator.multiply(8, 5)).toBe(40);
  expect(calculator.divide(8, 4)).toBe(2);
});
