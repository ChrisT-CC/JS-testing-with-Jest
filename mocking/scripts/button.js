/* 
Define buttonClick function 
Finds the paragraph with par id and gives it the text "You Clicked" 
*/
function buttonClick() {
    document.getElementById("par").innerHTML = "You Clicked";
}

// Before the test will pass we have to export the function buttonClick
module.exports = buttonClick;