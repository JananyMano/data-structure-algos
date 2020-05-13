const setBit = require("../clearBit");


describe("setBit", () => {
    it("it should set the ith bit of a number", () => { 
        expect(setBit(4, 0)).toEqual(5);
    });
});