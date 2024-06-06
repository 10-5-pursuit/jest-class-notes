const { sum, subtract } = require('../src/calculator')

// When you run `npm test`, it will run ALL of the files inside of the __test__ directory. Even if the files are nested within subdirectories, Jest will run all of them.

// Basic tests
// test("adds two numbers together and returns the sum", () => {
//     expect( sum(300, -150) ).toBe(150)
// })

// 'Describe' blocks take two arguments:
// 1: a string detailing what file/function we are testing
// 2: a callback function in which we write our tests ( it() blocks )
// You can use as many 'describe' blocks as you'd like in a single file
describe("sum()", () => {
    // "it" blocks are for individual tests. They also take two arguments:
    // 1: a string detailing what we are testing for
    // 2: a callback where we write the test logic
    // You can write as many tests inside a 'describe' block as you'd like
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

// Second describe block
describe("subtract()", () => {
    it("should subtract one number from another number", () => {
        expect(subtract(10, 5)).toBe(5)
    })
})


// Example of a better text where we break up the block `expected(getFullName(object)).toBe(string)` to be more readable
// describe("getFullName()", () => {
//     it("should return a string with the full name of the contact", () => {
//       const input = { names: { first: "Jude", surname: "Pearson" } };
//       const actual = getFullName(input);
//       const expected = "Jude Pearson";
//       expect(actual).toBe(expected);
//     });
// });


// To generate the 'coverage' folder and to view test coverage in the terminal, use command: `npm test -- --coverage`