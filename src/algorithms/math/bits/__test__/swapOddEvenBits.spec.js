const swapOddEvenBits = require("../swapOddEvenBits");


describe("swapOddEvenBits", () => {
    it("it should swap odd and even bits", () => { 
        expect(swapOddEvenBits(4)).toEqual(8);
    });
});