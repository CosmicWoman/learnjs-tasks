let calculator = {
    read() {
        this.a = +prompt('Введите a');
        this.b = +prompt('Введите b');
    }
    sum() {
        let result1 = this.a + this.b;
        return result1;
    }
    mil() {
        let result2 = this.a * this.b;
        return result2;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );