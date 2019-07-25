let calculator = {
    num1: 0, 
    num2: 0,
    read: function() {
        this.num1 = parseFloat(prompt("Enter first number"));
        this.num2 = parseFloat(prompt("Enter second number"));
    },
    sum: function() {
        return this.num1 + this.num2;
    },
    mul: function() {
        return this.num1 * this.num2;
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
