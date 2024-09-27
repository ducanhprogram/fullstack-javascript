Array.prototype.push2 = function (...elements) {
    // console.log(elements);
    var lengths = this.length;
    console.log(lengths);

    for (var i = 0; i < elements.length; i++) {
        this[lengths] = elements[i];
        lengths++;
    }
    return lengths;
};

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push2("Kiwi", "lemon");

console.log(fruits);
