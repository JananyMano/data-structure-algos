const dynamicArray = require("../dynamicArray");


describe("dynamicArray", () => {
    it("it should returns an array of integer based on queries", () => { 
        const n = 2;
        const queries = [[1,0,5],[1,1,7],[1,0,3],[2,1,0],[2,1,1]];
        expect(dynamicArray(n,queries)).toEqual([7,3]);
    });
});