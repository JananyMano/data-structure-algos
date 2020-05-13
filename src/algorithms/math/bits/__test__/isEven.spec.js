const isEven = require("../isEven");


describe("isEven", () => {
    it("it should tell if the number is even", () => { 
        expect(isEven(4)).toEqual(true);
        expect(isEven(5)).toEqual(false);

    });
});