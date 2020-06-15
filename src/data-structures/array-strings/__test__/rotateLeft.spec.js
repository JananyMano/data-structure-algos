const rotateLeft = require("../rotateLeft");


describe("rotateLeft", () => {
    it("it should perform d  left rotations on the array", () => { 
        expect(rotateLeft([1, 2, 3, 4, 5, 6], 3)).toEqual([4, 5, 6, 1, 2, 3]);
        expect(rotateLeft([1, 2, 3, 4, 5, 6], 4)).toEqual([5, 6, 1, 2, 3, 4]);
    });
});