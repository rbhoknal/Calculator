// JavaScript for calculator functionality

const display = document.getElementById('display');

// Function to append numbers and operators to the display
function appendNumber(number) {
    display.value += number;
}

// Function to append operators to the display
function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.value = display.value.slice(0, -1);
    }
    display.value += operator;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
