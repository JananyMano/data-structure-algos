const switchSign = require("../switchSign");


describe("switchSign", () => {
    it("it should switch the sign of a bit", () => { 
        expect(switchSign(4)).toEqual(-4);
        expect(switchSign(-9)).toEqual(9);

    });
});