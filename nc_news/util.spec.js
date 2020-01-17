const { expect } = require("chai");
const timeFormatter = require("./src/components/utilityFunc");

describe("TimeFormatter function", () => {
  it("it should split a string into time and date format", () => {
    expect(timeFormatter("2018-05-30T15:59:13.341Z")).to.equal(
      "2018-05-30 at 15:59"
    );
  });
});
