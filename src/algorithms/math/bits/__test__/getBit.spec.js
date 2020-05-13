const getBit = require("../getBit");


describe("getBit", () => {
    it("it should get bit at specific position", () => { 
        expect(getBit(1, 0)).toEqual(1);

    });
});