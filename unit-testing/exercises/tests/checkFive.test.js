const test = require('../checkFive.js')

describe("checkFive", function() {
    
    test("should produce 'is less than five' for number < 5", function() {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5");
    });
    
});