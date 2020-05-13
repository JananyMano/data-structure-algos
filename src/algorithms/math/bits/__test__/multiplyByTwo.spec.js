const multiplyByTwo = require("../multiplyByTwo");


describe("multiplyByTwo", () => {
    it("it should multiply the number by two", () => { 
        expect(multiplyByTwo(1)).toEqual(2);
        expect(multiplyByTwo(2)).toEqual(4);
        expect(multiplyByTwo(3)).toEqual(6);
        expect(multiplyByTwo(4)).toEqual(8);
    });
});