function outer(num1, num2) {
    console.log("outer -- num1: " + num1, "num2: " + num2);
    
    function inner(num1, num2) {
        let b = num1 + num2;
        console.log("b: " + b);
        num1 = b + num2;
        console.log("num1 inner: " + num1);
    }

    inner(num1, num2);
    console.log("outer2 -- num1: " + num1, "num2: " + num2);
}

outer(5, 8);
