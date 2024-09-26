//Number
console.dir(Number);

var age = 32;

// console.log(age);

//Kiểm tra kiểu Number
// console.log(typeof age);

//Số NaN  (Not A Number)
///-> Khi quá trình ép kiểu thất bại
// Ví dụ:

// var b = "10" * 10;

// console.log(b);

// console.log(typeof b);

//Kiểm tra 1 số NaN

// var a = "10";

// if (isNaN(a)) {
//     console.log("Số NaN");
// } else {
//     console.log("Không phải NaN");
// }

// if (Number.isNaN(a)) {
//     console.log("Số NaN");
// } else {
//     console.log("Không phải số NaN");
// }

// var a = 8 + +"10";

// console.log(typeof a);

// if (isNaN(a)) {
//     console.log("Là số NaN");
// } else {
//     console.log("Không phải là NaN");
// }

// if (Number.isNaN(a)) {
//     console.log("Là số NaN");
// } else {
//     console.log("Không phải là NaN");
// }

//Kiểm tra số nguyên

// var a = 10.56;

// if (Number.isInteger(a)) {
//     console.log("Số nguyên");
// } else {
//     console.log("Không phải số nguyên");
// }

// Ép kiểu

// var a = "10.5A78";
// // a = parseInt(a);

// a = Number.parseInt(a);
// console.log(a);

//Lưu ý: Trong javascript, bắt buộc phải ép kiểu nếu sử dụng number

// var a = "10a";
// a = parseInt(a);
// console.log(a);

//Số infinity: Vượt quá giới hạn lưu trữ của ngôn ngữ lập trình

// var a = 100 ** 1000;

// console.log(typeof a);

// if (a === Infinity) {
//     console.log("Đã infinity");
// }

//Lấy số chữ số phần thập phân và làm tròn

// var a = 10.23456;

// // a = a.toFixed(3);

// a = a.toPrecision(0);

// console.log(a);

//ĐỊnh dạng tiền tệ

var price = 120000000.456;

price = price.toFixed(2);
price = +price;

price = price.toLocaleString();

console.log(price);
