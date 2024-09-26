Array.prototype.filter2 = function (callback, ỉndex) {
    console.log(this);

    var newArr = [];

    for (var i = 0; i < this.length; i++) {
        var check = callback(this[i], i);

        if (check) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};

var ages = [32, 33, 10, 16, 40];

var result = ages.filter2(function (age, index) {
    console.log(age, index);
    return age >= 18;
});

console.log(result);

var nameLast = {
    name1: "Dức Anh",
    name2: "An",
    name3: "Trần Phú",
};

console.log(nameLast);
for (index in nameLast) {
    console.log(nameLast[index]);
}

var a = [1, 2, 3, 4];

for (value in a) {
    console.log(value);
}
