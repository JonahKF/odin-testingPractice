import { capitalize } from "./capitalize";

test("capitalizes first letter in string", () => {
  expect(capitalize("spaghetti")).toBe("Spaghetti");
});
