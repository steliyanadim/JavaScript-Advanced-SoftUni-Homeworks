function subtract() {
    const firstNum = document.getElementById('firstNumber')
    const secondNum = document.getElementById('secondNumber')

    firstNum.disabled = false;
    secondNum.disabled = false;

   const result = Number(firstNum.value) - Number(secondNum.value)

   document.getElementById('result').textContent = result
}