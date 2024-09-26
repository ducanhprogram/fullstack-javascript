// var numbers = [5, 10, 15, 20, 25];

// Array.prototype.reduce2 = function (callback, initialValue) {
//     console.log(this);

//     var prev;

//     if (this.length) {
//         for (var index = 0; index < this.length; index++) {
//             if (index === 0) {
//                 if (initialValue === undefined && index === 0) {
//                     prev = this[0];
//                     continue;
//                 }

//                 prev = initialValue;
//             }

//             // prev = this[index - 1];
//             // console.log(index);
//             var value = this[index];

//             // console.log(index);
//             prev = callback(prev, value, index);
//             // console.log(prev);
//             if (index === this.length - 1) {
//                 return prev;
//             }
//         }
//     }
// };

// var result = numbers.reduce2(function (prev, current, index) {
//     console.log(prev, current, index);
//     return prev + current;
// }, 0);

// console.log(result);

// var a = [10, 20, 30];
// var result1 = a.reduce(function (prev, current) {
//     return prev + current;
// });

// console.log(result1);

var numbers = [1, 2, 3, 4, 5];

Array.prototype.reduce2 = function (callback, initialValue) {
    console.log(this);
    console.log(callback);

    var prev;

    if (this.length) {
        for (var index = 0; index < this.length; index++) {
            if (index === 0) {
                if (initialValue === undefined) {
                    prev = this[0];
                    continue;
                }
                prev = initialValue;
            }

            var current = this[index];

            prev = callback(prev, current, index);
        }
    }
    return prev;
};

var result = numbers.reduce2(function (prev, current, index) {
    console.log(prev, current);
    return prev + current;
}, 0);

console.log(result);
