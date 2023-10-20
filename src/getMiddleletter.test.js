const getMiddleLetter = require("./getMiddleLetter");

describe("getMiddleLetter", () => {
  it("returns a string", () => {
    expect(typeof getMiddleLetter("bat")).toBe("string");
  });
});
