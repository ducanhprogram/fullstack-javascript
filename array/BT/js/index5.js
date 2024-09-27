// var arrA = [1, 4, 3, 2];
// var arrB = [5, 2, 6, 7, 1];

// var newArr = [];
// var arr = arrA.filter(function (element) {
//     return arrB.includes(element);
// });

// console.log(arr);

// function union(arrA, arrB) {
//     for (var i = 0; i < arrB.length; i++) {
//         if (arrA.includes(arrB[i]) === false) {
//             arrA.push(arrB[i]);
//         }
//     }

//     return arrA;
// }

// function union(arrA, arrB) {
//     var combinedArr = arrA.concat(arrB);
//     console.log(combinedArr);

//     var uniqueArr = combinedArr.filter(function (element, index) {
//         console.log(element, index);

//         console.log(`index ${index}`);
//         console.log(combinedArr.indexOf(element));
//         return combinedArr.indexOf(element) === index;
//     });

//     return uniqueArr;
// }

// var arrA = [1, 2, 3, 4, 9];
// var arrB = [3, 4, 5, 6, 9];
// console.log(union(arrA, arrB)); // Kỳ vọng [1, 2, 3, 4, 5, 6]

// function countWord(str, word) {
//     var count = 0;
//     str = str.split(" ");
//     str.forEach(function (arr) {
//         if (arr === word) {
//             count++;
//         }
//     });
//     return count;
// }

// var str = "JavaScript is great, and learning JavaScript is fun!";
// var word = "JavaScript";
// console.log(countWord(str, word)); // Kỳ vọng 2

// function toUpperCaseArray(arr) {
//     // Code của bạn ở đâycâuse
//     return arr.map(function (element) {
//         return element.toUpperCase();
//     });
// }

// var arr = ["hello", "world", "javascript"];
// console.log(toUpperCaseArray(arr)); // Kỳ vọng ["HELLO", "WORLD", "JAVASCRIPT"]

function splitSentence(sentence) {
    return sentence.split(" ");
}

var sentence = "JavaScript is fun and powerful";
console.log(splitSentence(sentence)); // Kỳ vọng ["JavaScript", "is", "fun", "and", "powerful"]
