const replaceSpace = require("../replaceSpace");


describe("replaceSpace", () => {
    it("it should replace all spaces by %20", () => { 
        expect(replaceSpace(" Hello World ")).toEqual("%20Hello%20World%20");
    });
});