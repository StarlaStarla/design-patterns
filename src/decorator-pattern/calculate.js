var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.calculate = function () {
        console.log('Calculated...');
    };
    return Calculator;
}());
var CalculatorDecorator = /** @class */ (function () {
    function CalculatorDecorator(calculator) {
        this.calculator = calculator;
    }
    CalculatorDecorator.prototype.calculate = function () {
        this.calculator.calculate();
        this.log();
    };
    CalculatorDecorator.prototype.log = function () {
        console.log('After calculated...');
    };
    return CalculatorDecorator;
}());
var calculatorDecorator = new CalculatorDecorator(new Calculator());
calculatorDecorator.calculate();
