const iterator = require("./index");

describe("Test suite for our iterator function", () => {
    test("It should return an object with the correct values", () => {
        const mockValue = {
            one: [1, 2,3],
            two: [2, 4, 6],
            three: [3, 6, 9]
        };

        expect(iterator(1, 3)).toEqual(mockValue);

        const mockValue2 = {
            one: [3, 6, 9, 12],
            two: [4, 8, 12, 16, 20, 24],
            three: [5, 10, 15, 20, 25, 30, 35]
        };
        expect(iterator(3, 12)).toEqual(mockValue2);
    })

    test("It should handle bad inputs", () => {
        //no input
        expect(() => iterator()).toThrow()
        //bad input
        expect(() => iterator("Bad Words", "Poor Input")).toThrow()
    })
})