class Calculator {
  constructor(prevOpTextEle, currentOpTextEle) {
    (this.currentOpTextEle = currentOpTextEle),
      (this.prevOpTextEle = prevOpTextEle);
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.prevOperand = "";
    this.operation = undefined;
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  append(num) {
    if (num === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + num.toString();
  }

  chooseOp(op) {
    if (this.currentOperand === "") return;
    if (this.prevOperand !== "") {
      this.calculate();
    }

    this.operation = op;
    this.prevOperand = this.currentOperand;
    this.currentOperand = "";
  }

  calculate() {
    let computation;
    const prev = parseFloat(this.prevOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    if (current == 0 && this.operation == "/") {
      computation = "Cannot be divided by 0"
      this.currentOperand = computation;
      this.operation = undefined;
      this.prevOperand = "";
    }
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      case "^":
        computation = Math.pow(prev, current);
        break;
      case "√":
        computation = Math.sqrt(prev, current);
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.prevOperand = "";
  }

  displayResult() {
    this.currentOpTextEle.innerText = this.currentOperand;
    if (this.operation != null) {
      this.prevOpTextEle.innerText = `${this.prevOperand} ${this.operation}`;
    } else {
      this.prevOpTextEle.innerText = "";
    }
  }
}
const numberButton = document.querySelectorAll("[data-num]");
const operandButton = document.querySelectorAll("[data-op]");
const eqButton = document.querySelector("[data-eq]");
const delButton = document.querySelector("[data-del]");
const clearButton = document.querySelector("[data-clr-all]");
const prevOpTextEle = document.querySelector("[data-previous-operand]");
const currentOpTextEle = document.querySelector("[data-current-operand]");

const calculator = new Calculator(prevOpTextEle, currentOpTextEle);
numberButton.forEach((key) => {
  key.addEventListener("click", () => {
    calculator.append(key.innerText);
    calculator.displayResult();
  });
});
operandButton.forEach((key) => {
  key.addEventListener("click", () => {
    calculator.chooseOp(key.innerText);
    calculator.displayResult();
  });
});
eqButton.addEventListener("click", (button) => {
  calculator.calculate();
  calculator.displayResult();
});
clearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.displayResult();
});
delButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.displayResult();
});
