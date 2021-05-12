// Remember: use defer for the script element so that this JS file will not run until the document is finished loading otherwise, this file will not be able to select the html elements. 

const input = document.querySelector('.input');
const consoleLogIt = document.getElementById("console-log-it");

function consoleLog (parameter = "Default Value: nothing was inputed.") {
    if (input.value === "") {
        console.log(`Here is the parameter, argument that was passed through the consolLog function:  ${parameter}`);
    } else {
        console.log(`Here is the input.value: ${input.value}`);
        input.value = "";
    }
    alert(`Something was logged in the console log`);
}


// input.style.backgroundColor = "yellow"; // works

(function IIFE () {
    input.style.backgroundColor = "greenyellow";
})(); // works

consoleLogIt.addEventListener(
    "click",
    () => {
        // consoleLogIt.innerText = input.value; // Test

        consoleLog();
    }
);