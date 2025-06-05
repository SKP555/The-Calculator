                                        // Skp'S CALCULATOR PROGRAM

// Get the display element
const display = document.getElementById("display");
let resultShown = false; // Tracks if a result is currently displayed

// Add input (number or operator) to the display
function addInput(val) {

    // If a result is shown and input is not an operator, start new input
    if (resultShown && !isOperator(val)) {
        display.value = "";
        resultShown = false;
    }
    display.value += val;
    resultShown = false;
}

// Clear the display (AC button)
function resetDisplay() {
    display.value = "";
    resultShown = false;
}

// Evaluate the expression in the display (= button)
function evaluateExpression() {
    try {
        display.value = eval(display.value);
        resultShown = true;
    } catch (err) {
        display.value = "Error";
        resultShown = true;
    }
}

// Remove the last character (DEL button), only if not showing result
function removeLastChar() {
    if (!resultShown) {
        display.value = display.value.slice(0, -1);
    }
}

// Check if a value is an operator or function
function isOperator(val) {
    return ['+', '-', '*', '/', '.', '%'].includes(val);
}

// Calculate square root of the current value (√ button)
function calculateSqrt() {
    if (display.value) {
        display.value = Math.sqrt(parseFloat(display.value));
        resultShown = true;
    }
}

// Calculate percentage of the current value (% button)
function calculatePercent() {
    if (display.value) {
        display.value = parseFloat(display.value) / 100;
        resultShown = true;
    }
}

// --- Memory Functionality ---

let memory = 0; // Stores memory value

// Get the current value from display or 0 if empty/invalid
function getCurrentValue() {
    return parseFloat(display.value) || 0;
}

// M+ : Add current value to memory and clear display
function memoryAdd() {
    memory += getCurrentValue();
    display.value = "";
    resultShown = false;
}

// M- : Subtract current value from memory and clear display
function memorySubtract() {
    memory -= getCurrentValue();
    display.value = "";
    resultShown = false;
}

// MR : Recall memory value to display
function memoryRecall() {
    display.value = memory;
    resultShown = true;
}

// MC : Clear memory
function memoryClear() {
    memory = 0;
}

// --- Enter numbers with keyboard ---
// --- Keyboard Support ---

// Allow keyboard input for numbers, operators, and functions
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        // Number key pressed
        addInput(key);
    } else if (['+', '-', '*', '/','.'].includes(key)) {
        // Operator key pressed
        addInput(key);
    } else if (key === 'Enter' || key === '=') {
        // Evaluate expression
        evaluateExpression();
        event.preventDefault();
    } else if (key === 'Backspace') {
        // Delete last character
        removeLastChar();
        event.preventDefault();
    } else if (key.toLowerCase() === 'c') {
        // Clear display
        resetDisplay();
        event.preventDefault();
    }
});