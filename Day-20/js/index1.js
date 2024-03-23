var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

//Cách 1

var assignArray = arrA.filter(function (element) {
    return arrB.includes(element);
});

console.log(assignArray);

//Cách 2

// var newArr = function assignArray(arr1, arr2) {
//     var commmonElements = [];
//     for (var i = 0; i < arr1.length; i++) {
//         for (var j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 commmonElements.push(arr1[i]);
//             }
//         }
//     }
//     return commmonElements;
// };

// console.log(newArr(arrA, arrB));
