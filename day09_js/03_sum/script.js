function sum(arg1) {
    function add(arg2) {
        return arg1 + arg2;
    }
    return add;
}

console.log(sum(5)(7));
