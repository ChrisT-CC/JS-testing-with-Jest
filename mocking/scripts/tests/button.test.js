/**
 * @jest-environment jsdom
 */

/* 
Change the default Node.js environment to jsdom (a browser-like environment, used when building a web app)
By adding a @jest-environment docblock at the top of the file 
*/

// import the buttonClick function that we're testing from the button.js file
const buttonClick = require("../button");

/*
// set up a mock DOM
beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>"
});
*/

// Load the entire HTML page and attach it to the mock DOM
beforeEach(() => {
    /* Add the Node fs module (a file system handling module built into  Node 
        that allows us to open read and write files) */
    let fs = require("fs");
    /* Use fs to read the contents of HTML file and store it in fileContents variable */
    let fileContents = fs.readFileSync("./mocking/index.html", "utf-8");
    /* Attach the fileContents to the DOM */
    document.open();
    document.write(fileContents);
    document.close();
});

// Create the actual test
describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    /* Add another test to confirm reading the contents of index.html */
    test("h1 should exist", () => {
        /* This test gets all of the h1 tags and stores them in a special kind of array. 
        If the h1 exists, then the length of the array will be 1. 
        If two h1 tags existed the length would be two, and so on */
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});