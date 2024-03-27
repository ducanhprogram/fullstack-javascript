var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

// Cách 1

// function flattenArray(inputArray) {
//     var flatArray = [];

//     //forEach duyệt qua từng phần tử
//     inputArray.forEach(function (item) {
//         if (Array.isArray(item)) {
//             //Hàm đệ quy
//             flatArray = flatArray.concat(flattenArray(item));
//         } else {
//             flatArray.push(item);
//         }
//     });
//     return flatArray;
// }

// console.log(flattenArray(arr));

//Cách 2

var result = [];
var flatten = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];

        if (Array.isArray(arr[i])) {
            flatten(item);
        } else {
            result.push(item);
        }
    }
    return result;
};

console.log(flatten(arr));
