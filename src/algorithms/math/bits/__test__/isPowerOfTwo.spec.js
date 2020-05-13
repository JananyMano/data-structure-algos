const isPowerOfTwo = require("../isPowerOfTwo");


describe("isPowerOfTwo", () => {
    it("it should tells if the number is a power of two", () => { 
        expect(isPowerOfTwo(1)).toEqual(false);
        expect(isPowerOfTwo(2)).toEqual(true);
        expect(isPowerOfTwo(3)).toEqual(false);
        expect(isPowerOfTwo(4)).toEqual(true);
    });
});