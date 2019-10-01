module.exports = function multiply(first, second) {
  let firstNumber = BigInt(first);
  let secondNumber = BigInt(second);
  let result = (firstNumber * secondNumber).toString();
  return result;
}
