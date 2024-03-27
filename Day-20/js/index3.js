var arr = [
    ["a", 1, true],
    ["b", 2, false],
];

//Cách 1

// var separateByType = function (arr) {
//     var strings = [];
//     var numbers = [];
//     var booleans = [];
//     var a = 0;

//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr[i].length; j++) {
//             var element = arr[i][j];
//             if (typeof element === "string") {
//                 strings.push(element);
//             } else if (typeof element === "number") {
//                 numbers.push(element);
//             } else if (typeof element === "boolean") {
//                 booleans.push(element);
//             }
//         }
//     }
//     return [strings, numbers, booleans];
// };

// console.log(separateByType(arr));

//Cách 2

function separateByType(inputArry) {
    var strings = [];
    var numbers = [];
    var booleans = [];

    inputArry.forEach(function (subArry) {
        subArry.forEach(function (element) {
            if (typeof element === "string") {
                strings.push(element);
            } else if (typeof element === "number") {
                numbers.push(element);
            } else if (typeof element === "boolean") {
                booleans.push(element);
            }
        });
    });
    return [strings, numbers, booleans];
}

var result = separateByType(arr);
console.log(result);
