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
    let numbers = value.split(reOpp);
    let operators = value.split(re);
    operators = operators.join("");

    console.log("NUMBERS:", numbers, "OPERATORS:", operators);

    // Return if nothing has been input into the calculator yet
    if (value === "") {
        return;
    }

    // Set result equal to first binary number
    let result = parseInt(numbers[0], 2);
    let operand = null;

    console.log("INITIAL RESULT:", result);

    // Iterate through operator string and apply operation to the number one index beyond operator index
    for (let i = 0; i < operators.length; i++) {
        if (numbers[i + 1] === "") {
            operand = null;
        } else {
            operand = numbers[i + 1]
                ? (operand = parseInt(numbers[i + 1], 2))
                : (operand = null);
            console.log("OPERAND:", operand);

            switch (operators[i]) {
                case "+":
                    result += operand;
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
                    if (operand === null) {
                        break;
                    }
            }
        }
    }

    result = (result >>> 0).toString(2);
    console.log("RESULT:", result);

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
