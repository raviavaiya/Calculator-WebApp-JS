let displayValue = '';

function clearDisplay() {
    displayValue = '';
    updateDisplay('0');
}

function appendCharacter(char) {
    displayValue += char;
    updateDisplay(displayValue);
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay(displayValue);
    } catch {
        updateDisplay('Error');
        displayValue = '';
    }
}

function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}
