document.addEventListener('DOMContentLoaded', function () {

    //  Getting  references to the calculator elements
    const display = document.getElementById('display');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const btn5 = document.getElementById('btn5');
    const btn6 = document.getElementById('btn6');
    const btn7 = document.getElementById('btn7');
    const btn8 = document.getElementById('btn8');
    const btn9 = document.getElementById('btn9');
    const btn0 = document.getElementById('btn0');
    const btnPlus = document.getElementById('btnPlus');
    const btnMinus = document.getElementById('btnMinus');
    const btnMultiply = document.getElementById('btnMultiply');
    const btnDivide = document.getElementById('btnDivide');
    const btnClear = document.getElementById('btnClear');
    const btnEquals = document.getElementById('btnEquals');


    

    // Event listeners for number buttons
    btn1.addEventListener('click', () => addToCurrentValue('1'));
    btn2.addEventListener('click', () => addToCurrentValue('2'));
    btn3.addEventListener('click', () => addToCurrentValue('3'));
    btn4.addEventListener('click', () => addToCurrentValue('4'));
    btn5.addEventListener('click', () => addToCurrentValue('5'));
    btn6.addEventListener('click', () => addToCurrentValue('6'));
    btn7.addEventListener('click', () => addToCurrentValue('7'));
    btn8.addEventListener('click', () => addToCurrentValue('8'));
    btn9.addEventListener('click', () => addToCurrentValue('9'));
    btn0.addEventListener('click', () => addToCurrentValue('0'));

    let currentInput = '';

    // Functions
    function addToCurrentValue(value) {
        currentInput += value;
        display.value = currentInput;
    }

    btnPlus.addEventListener('click', () => handleButtons('+'));
    btnMinus.addEventListener('click', () => handleButtons('-'));
    btnMultiply.addEventListener('click', () => handleButtons('*'));
    btnDivide.addEventListener('click', () => handleButtons('/'));
    btnClear.addEventListener('click', clearDisplay);

    function handleButtons(operator) {
        if (currentInput !== '') {
            currentInput += ' ' + operator + ' ';
            display.value = currentInput;
        }
    }

    function clearDisplay() {
        currentInput = '';
        display.value = '';
    }

    // adding event listner for equal button 

    btnEquals.addEventListener('click', calculateResult);

    function calculateResult() {
        if (currentInput !== '') {
            try {
                currentInput = eval(currentInput);
                display.value = currentInput;
            } catch (error) {
                display.value = 'Error';
            }
        }
    }
});
