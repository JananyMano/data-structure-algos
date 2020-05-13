const updateBit = require("../updateBit");


describe("updateBit", () => {
    it("it should update bit of a number at given bitPosition and bitValue", () => { 
        expect(updateBit(4,0,1)).toEqual(5);
        expect(updateBit(1,2,1)).toEqual(5);

    });
});