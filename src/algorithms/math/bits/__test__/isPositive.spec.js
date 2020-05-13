const isPositive = require("../isPositive");


describe("isPositive", () => {
    it("it should tell if the number is positive", () => { 
        expect(isPositive(4)).toEqual(true);
        expect(isPositive(-8)).toEqual(false);
    });
});