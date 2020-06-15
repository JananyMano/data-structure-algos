const isUniqueChars2 = require("../isUniqueChars2");

describe("isUniqueChars2", () => {
    it("it should if the strings does not contain same character", () => { 
        expect(isUniqueChars2("AZERTYUIOPQSDFGHJKLMWXCVBN")).toEqual(true);
        expect(isUniqueChars2("AAAAA")).toEqual(false);
    });
});