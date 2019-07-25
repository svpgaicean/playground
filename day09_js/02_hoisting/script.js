function outer(num1, num2) {
    let x;
    let y;
    console.log("before assignmnet -- x: " + x, "y: " + y);
    x = num1;
    y = num2;
    console.log("after assignment -- x: " + x, "y: " + y);
}

outer(5, 8);
