/* 
Change the default Node.js environment to jsdom (a browser-like environment, used when building a web app)
By adding a @jest-environment docblock at the top of the file 
*/

/**
 * @jest-environment jsdom
 */

// import the buttonClick function that we're testing from the button.js file
const buttonClick = require("../button");

// set up a mock DOM
beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>"
});

// Create the actual test
describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqaul("You Clicked");
    });
});