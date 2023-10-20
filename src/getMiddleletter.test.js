const getMiddleLetter = require("./getMiddleLetter");

describe("getMiddleLetter", () => {
  it("returns a string", () => {
    expect(typeof getMiddleLetter("bat")).toBe("string");
  });

  it("returns a single letter for a word with odd number of letters", () => {
    expect(getMiddleLetter("catch")).toBe("t");
  });

  it("returns the two middle letters for a word with an even number of letters", () => {
    expect(getMiddleLetter("help")).toBe("el");
  });
});
