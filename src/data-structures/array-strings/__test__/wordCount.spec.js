const wordCount = require("../wordCount");


describe("count the number of characters in a string", () => {
    it("it should return the number of characters in a string", () => { 
        expect(wordCount("Hello World")).toEqual(2);
    });
});