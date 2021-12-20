// import the  function that we're testing from the calculator.js file
const addition = require("../calculator");

// create a top level parent describe of Calculator
describe("Calculator", () => {
    // create a second level describe of Addition function
    describe("Addition function", () => {
        // create test
        test("should return 42 for 20 + 22", () => {
            // explain our expectation
            expect(addition(20, 22)).toBe(42);
        })
        test("should return 73 for 42 + 31", () => {
            // explain our expectation
            expect(addition(42, 31)).toBe(73);
        })
    })
    // create a second level describe of Substraction function
    describe("Substraction function", () => {

    })
    // create a second level describe of Multiply function
    describe("Multiply function", () => {

    })
    // create a second level describe of Division function
    describe("Division function", () => {

    })
})