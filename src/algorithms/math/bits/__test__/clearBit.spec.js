const clearBit = require("../clearBit");


describe("clearBit", () => {
    it("it should clear the ith bit of a number", () => { 
        expect(clearBit(4, 2)).toEqual(0);
    });
});