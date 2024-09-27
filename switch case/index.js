// var action = prompt("Nhập hành động mà bạn muốn thao tác: ");

// switch (action) {
//     case "create":
//     case "add":
//     case "insert":
//         console.log("Thêm");
//         break;
//     case "update":
//     case "edit":
//         console.log("Cập nhập");
//         break;
//     case "delete":
//     case "remove":
//         console.log("Xóa");
//         break;
//     default:
//         console.log("Danh sách");
//         break;
// }

// if (action === "create" || action === "add" || action === "insert") {
//     console.log("Thêm");
// } else if (action === "update" || action === "edit") {
//     console.log("Cập nhật");
// } else if (action === "delete" || action === "remove") {
//     console.log("Xóa");
// } else {
//     console.log("Danh sách");
// }

//Cú pháp for

// for (var i = 10; i >= 1; i--) {
//     console.log(`Lan lặp: ${i}`);
// }

// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= 5; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// var n = +prompt("Nhập giá trị n: ");
// var total = 0;
// for (var i = 1; i <= n; i++) {
//     total += i;
// }

// console.log(` Tổng: ${total} `);

// var n = +prompt("Nhập giá trị n: ");

// var total = 1;
// for (var i = 1; i <= n; i++) {
//     total *= i;
// }

// console.log(`${total}`);

// var total = 1;
// for (var i = 1; i <= n; i++) {
//     for (var j = j++; j <= n; j++) {}
// }

// var n = +prompt("Nhập số nguyên tố: ");
// if (n >= 1) {
//     var isPrime = true;
//     for (var i = 2; i < n; i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${n} là số nguyên tố`);
//     } else {
//         console.log(`${n} không phải là số nguyên tố`);
//     }
// } else {
//     console.log(`${n} không phải số nguyên tố!`);
// }
// var a = 1000;
// var count = 0;
// while (a % 2 === 0) {
//     a = a / 2;
//     count++;
// }

// console.log(` Số lần ${count}`);

// var i = 199;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);
