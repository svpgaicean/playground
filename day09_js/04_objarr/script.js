// array obiecte
// name si age
// fct sa calculeze media de varsta

let Obj = function(name, age) {
    this.name = name;
    this.age = age;
}

let names = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k" ];
let ages = [ 15, 18, 19, 22, 34, 65, 12, 29, 47, 55, 43];

let objArr = [];

for (let i = 0; i < names.length; i++) {
    objArr[i] = new Obj(names[i], ages[i]);
}

let computeAverage = function(objArr) {
    let agesArr = [];
    for (let i = 0; i < objArr.length; i++) {
        agesArr[i] = objArr[i].age;
    }
    let reducer = (total, current) => total + current;
    let result = agesArr.reduce(reducer) / agesArr.length;
    return result;
}

console.log(computeAverage(objArr));
