let calculation = localStorage.getItem('calculation') || '';
document.querySelector('.result-input').value = calculation;
function calculate(char) {
    calculation += char;
    localStorage.setItem('calculation',calculation);
    document.querySelector('.result-input').value = calculation;
}
function equalCalculation() {
    if (!calculation) {
        calculation = '0'
        calculation=eval(calculation);
        localStorage.setItem('calculation',eval(calculation));
        document.querySelector('.result-input').value = calculation;
    }
    else {
        calculation=eval(calculation);
        localStorage.setItem('calculation',calculation);
        document.querySelector('.result-input').value = calculation;
    }
    
}

function clearCalculation() {
    calculation = '';
    localStorage.setItem('calculation',calculation);
    document.querySelector('.result-input').value = calculation;
}