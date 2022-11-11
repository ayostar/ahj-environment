import demo from "../app";

test("should test demo", () => {
  const expected = 100;
  const received = demo(100);
  expect(received).toBe(expected);
});
