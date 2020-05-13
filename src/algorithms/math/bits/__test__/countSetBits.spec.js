const countSetBits = require("../countSetBits");


describe("countSetBits", () => {
    it("it should return the number of bits equal to 1", () => { 
        expect(countSetBits(1)).toEqual(1);
        expect(countSetBits(4)).toEqual(1);
        expect(countSetBits(5)).toEqual(2);

    });
});