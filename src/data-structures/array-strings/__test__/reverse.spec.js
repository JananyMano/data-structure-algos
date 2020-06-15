const reverse = require("../reverse");


describe("reverse a string", () => {
    it("it should reverse the string", () => { 
        expect(reverse("Hello")).toEqual("olleH");
    });
});