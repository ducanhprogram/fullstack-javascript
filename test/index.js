// function countDown(num) {
//     if (num > 0) {
//         console.log(num);
//         return setTimeout(function () {
//             countDown(num - 1);
//         }, 1000);
//     }
//     return num;
// }

// countDown(10);

// // setTimeout(function () {
// //     countDown(10);
// // }, 1000);

// function reverseNumber(n) {
//     var reNum = 0;

//     var raw = 0;
//     if (n % 1 === 0 && typeof n === "number") {
//         while (n !== 0) {
//             reNum = n % 10;
//             n = parseInt(n / 10);
//             raw = raw * 10 + reNum;
//         }
//         // return raw;
//     }
// }

// console.log(reverseNumber(12345));

var content = "Ta mãi là một người của nhau";

var replaceContent = content.replaceAll(" ", `<span></span>`);

var contentChange = `<span>${replaceContent}</span>`;

console.log(replaceContent);

var index = 0;

setInterval(function () {
    var currentPosition = contentChange.indexOf(" ", index + 1);

    var textBefore = content.slice(0, currentPosition);

    var word = content.slice(index, currentPosition);
});
