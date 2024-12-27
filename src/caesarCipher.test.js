import { caesarCipher } from "./caesarCipher";

test("tests all calculator functions", () => {
  expect(caesarCipher("spaghetti", 4)).toBe("wteklixxm");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
