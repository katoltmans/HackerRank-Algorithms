// Function to add digits to the result display while inputting values
function storeValue(digit) {
    document.getElementById("res").innerText += digit;
}

// Function to clear results display
function clear() {
    document.getElementById("res").innerText = "";
}

//Function to calculate operations input by user
function calculate() {
    let value = document.getElementById("res").innerText;
    // Regex to get digits of binary numbers
    let re = /\d+/;
    // Regex to get operator signs
    let reOpp = /\+|-|\*|\//;
    let numbers = value.split(re);
    let operators = value.split(reOpp);

    // Return if nothing has been input into the calculator yet
    if (value === "") {
        return;
    }

    // Set result equal to first binary number
    let result = numbers[0];
    let operator = null;

    // Switch cases to perform each operator function
    for (let i = 0; i < equation.length; i++) {
        switch (equation[i]) {
            case "+":
                break;
            case "-":
                result -= operand;
                break;
            case "*":
                result *= operand;
                break;
            case "/":
                result /= operand;
                break;
            default:
                operand = parseInt(equation[i], 2);
                console.log("OPERAND:", operand);
        }
    }
    document.getElementById("res").innerText = result;
}

// Function calls
document.getElementById("btn0").addEventListener("click", () => storeValue(0));
document.getElementById("btn1").addEventListener("click", () => storeValue(1));
document
    .getElementById("btnSum")
    .addEventListener("click", () => storeValue("+"));
document
    .getElementById("btnSub")
    .addEventListener("click", () => storeValue("-"));
document
    .getElementById("btnMul")
    .addEventListener("click", () => storeValue("*"));
document
    .getElementById("btnDiv")
    .addEventListener("click", () => storeValue("/"));
document.getElementById("btnEql").addEventListener("click", () => calculate());
document.getElementById("btnClr").addEventListener("click", () => clear());
