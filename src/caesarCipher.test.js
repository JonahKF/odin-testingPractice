import { caesarCipher } from "./caesarCipher";

test("tests all calculator functions", () => {
  expect(caesarCipher("spaghetti", 4)).toBe("WTEKLIXXM");
});
