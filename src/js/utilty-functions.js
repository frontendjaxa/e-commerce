const calculator = document.getElementById("calculator");

function addTwoNumbers(firstNumber, secondNumber, third) {
  console.log(firstNumber, secondNumber);
  let sum = firstNumber + secondNumber;
  let result = Number(sum) ? sum : 0;
  return `${third} : ${result}`;
}
