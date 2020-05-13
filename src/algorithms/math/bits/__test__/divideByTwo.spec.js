const divideByTwo = require("../divideByTwo");


describe("divideByTwo", () => {
    it("it should return divide the number by two", () => { 
        expect(divideByTwo(4)).toEqual(2);
        expect(divideByTwo(12)).toEqual(6);
    });
});