const bitLength = require("../bitLength");


describe("bitLenght", () => {
    it("it should return the length of a number", () => { 
        expect(bitLength(1)).toEqual(1);
        expect(bitLength(2)).toEqual(2);
        expect(bitLength(3)).toEqual(2);
        expect(bitLength(4)).toEqual(3);
    });
});