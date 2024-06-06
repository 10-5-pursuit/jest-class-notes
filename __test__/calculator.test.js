const { sum, subtract } = require('../src/calculator')

// Basic tests
// test("adds two numbers together and returns the sum", () => {
//     expect( sum(300, -150) ).toBe(150)
// })

describe("sum()", () => {
    it("should add two numbers together and return the sum", () => {
        const actual = sum(5, 5)
        const expected = 10
        expect( actual ).toBe(expected)
    })

    it("should return a number", () => {
        const a = 5
        const b = 20
        const actual = typeof sum(a, b)
        const expected = 'number'
        expect(actual).toBe(expected)
    })
})

describe("subtract()", () => {
    it("should subtract one number from another number", () => {
        expect(subtract(10, 5)).toBe(5)
    })
})


// describe("getFullName()", () => {
//     it("should return a string with the full name of the contact", () => {
//       const input = { names: { first: "Jude", surname: "Pearson" } };
//       const actual = getFullName(input);
//       const expected = "Jude Pearson";
//       expect(actual).toBe(expected);
//     });
// });