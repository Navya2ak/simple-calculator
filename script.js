class Calculator {
  constructor(prevOpTextEle, currentOpTextEle) {
    (this.currentOpTextEle = currentOpTextEle),
      (this.prevOpTextEle = prevOpTextEle);
  }
  clear() {}
  delete() {}
  append(num) {}

  chooseOp(op) {}

  calculate() {}

  displayResult() {}
}
const numberButton = document.querySelectorAll("[data-num]");
const operandButton = document.querySelectorAll("[data-op]");
const eqButton = document.querySelector("[data-eq]");
const delButton = document.querySelector("[data-del]");
const clearButton = document.querySelector("[data-clr-all]");
const prevOpTextEle = document.querySelector("[data-previous-operand]");
const currentOpTextEle = document.querySelector("[data-current-operand]");
