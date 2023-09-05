interface Calculator {
  calculate: () => void
}

class NumberCalculator implements Calculator {
  calculate() {
    console.log('Calculated...')
  }
}

abstract class CalculatorDecorator implements Calculator {
  calculator: Calculator
  constructor(calculator: Calculator) {
    this.calculator = calculator
  }
  calculate() {
    this.calculator.calculate()
  }
}

class NumberCalculatorWithLog extends CalculatorDecorator {
  constructor(calculator: Calculator) {
    super(calculator)
  }
  calculate() {
    this.calculator.calculate()
    this.log()
  }

  log() {
    console.log('After calculated...')
  }
}

const calculatorDecorator = new NumberCalculatorWithLog(new NumberCalculator())
calculatorDecorator.calculate()
