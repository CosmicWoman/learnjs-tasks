// Задание 'Создайте калькулятор при помощи конструктора, new Calculator'
function Calculator() {
    this.read = function () {
        this.a = +prompt('Введите a');
        this.b = +prompt('Введите b');
    }
    this.sum = function () {
        let result1 = this.a + this.b;
        return result1;
    }
    this.mul= function () {
        let result2 = this.a * this.b;
        return result2;
    }
};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// Задание 'Создайте new Accumulator'
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('Сколько хотите добавить?');
    };

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);