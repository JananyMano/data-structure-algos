const bitsDiff = require("../bitsDiff");

describe("bitsDiff", () => {
    it("it should return the number of different bits between two numbers", () => { 
        expect(bitsDiff(1, 0)).toEqual(1);
        expect(bitsDiff(4, 1)).toEqual(2);
    });
});