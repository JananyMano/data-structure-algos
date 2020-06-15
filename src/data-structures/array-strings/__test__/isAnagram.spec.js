const isAnagram = require("../isAnagram");


describe("isAnagram", () => {
    it("it should if the strings are anagram", () => { 
        expect(isAnagram("dog","god")).toEqual(true);
        expect(isAnagram("god","bad")).toEqual(false);
    });
});