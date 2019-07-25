let arr = [
    {
        firstName: "Dragon",
        lastName: "Ifrim",
        id: 99,
        logMe: function(first, last) {
            console.log(this);
        },
        secondLog: function() {
            let that = this;
            function goose(name) {
                console.log(that);
            }
            goose("maverick");
            console.log(this);
        }
    },
    {
        firstName: "Patrik",
        lastName: "Gaicean",
        id: 47,
        logMe: function(first, last) {
            console.log(this);
        },
        secondLog: function() {
            console.log(this);
        }
    },
    {
        firstName: "ABCDEF",
        lastName: "XYZTV",
        id: 99,
        logMe: function(first, last) {
            console.log(this);
        },
        secondLog: function() {
            console.log(this);
        }
    }
]

console.log("first log:");
console.log(arr[0].logMe());
console.log("second log:");
console.log(arr[0].secondLog());

// arr.forEach(function(obj) {
    // console.log("first log:");
    // console.log(obj.logMe());
    // console.log("second log:");
    // console.log(obj.secondLog());
// })