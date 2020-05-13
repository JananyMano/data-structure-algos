const multiplyUnsigned = require("../multiplyUnsigned");


describe("multiplyUnsigned", () => {
    it("it should multiply unsigned numbers", () => { 
        expect(multiplyUnsigned(1,4)).toEqual(4);
        expect(multiplyUnsigned(2,6)).toEqual(12);
        expect(multiplyUnsigned(3,9)).toEqual(27);
        expect(multiplyUnsigned(4,7)).toEqual(28);
    });
});