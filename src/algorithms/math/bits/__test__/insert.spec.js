const insert = require("../insert");


describe("insert", () => {
    it("it should return insert a number into another number at given bit position", () => { 
        expect(insert(4,1,0,1)).toEqual(5);
    });
});