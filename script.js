const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
      display.value = "";
    } 
    else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } 
    else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
        resultDisplayed = true;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } 
    else {
      if (resultDisplayed) {
        if (isNaN(value)) {
          currentInput += value;
        } else {
          currentInput = value;
        }
        resultDisplayed = false;
      } else {
        currentInput += value;
      }
      display.value = currentInput;
    }
  });
});
