const getMiddleLetter = require("./getMiddleLetter");

describe("getMiddleLetter", () => {
  it("returns a string", () => {
    expect(typeof getMiddleLetter("bat")).toBe("string");
  });

  it("returns a single letter for a word with odd number of letters", () => {
    expect(getMiddleLetter("bat")).toBe("a");
  });
});
