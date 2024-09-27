// function max(a, b, ...args) {
//     console.log(arguments);
//     console.log(...args);
// }

// max(5, 10, 15, 20, 25);

// var n = +prompt("Nhập giá trị n: ");

// function kiemTraChiaHetCho2(number, callback) {
//     if (number % 2 === 0) {
//         setTimeout(function () {
//             console.log("Chia hết cho 2");
//             if (typeof callback === "function") {
//                 callback(number);
//             }
//         }, 1000);
//     } else {
//         console.log("Không chia hết cho 2");
//     }
// }

// function kiemTraChiaHetCho5(number) {
//     if (number % 5 === 0) {
//         setTimeout(function () {
//             console.log("Chia hết cho cả 2 và 5");
//         }, 500);
//     } else {
//         setTimeout(function () {
//             console.log("Chỉ chia hết cho 2 nhưng không chi hết cho 5");
//         }, 500);
//     }
// }

// kiemTraChiaHetCho2(n, function (number) {
//     kiemTraChiaHetCho5(number);
// });

// kiemTraChiaHetCho2(n);

// function kiemTraChiaHetCho2(number, callback) {
//     if (number % 2 === 0) {
//         console.log(` ${n} chia hết cho 2`);
//         if (typeof callback === "function") {
//             callback(number);
//         }
//         return true;
//     } else {
//         console.log(` ${n} không chia hết cho 2`);
//         return false;
//     }
// }

// if (kiemTraChiaHetCho2) {
//     function kiemTraChiaHetCho5(number) {
//         if (number % 5 === 0) {
//             setTimeout(function () {
//                 console.log("Chia hết cho cả 2 và 5");
//             }, 500);
//         } else {
//             console.log("Chỉ chia hết cho 2 nhưng không chia hết cho 5");
//         }
//     }
// }

// kiemTraChiaHetCho2(n, function (number) {
//     kiemTraChiaHetCho5(number);
// });

//IIFE

(function (a) {
    console.log("Học JS không khó", a);
})("F8");
