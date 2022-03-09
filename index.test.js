const iterator = require("./index");

describe("Test suite for our iterator function", () => {
    test("It should return an object with the correct values", () => {
        const mockValue = {
            one: [1, 2,3],
            two: [2, 4, 6],
            three: [3, 6, 9]
        };

        expect(iterator(1, 3)).toEqual(mockValue);
    })
})