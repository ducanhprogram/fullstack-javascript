// Object.prototype.getCurrecy = function (currency) {
//     console.log(this);
//     if (isNaN(this)) {
//         return "Dữ liệu không hợp lệ";
//     }

//     var number = Number(this);

//     return number.toLocaleString("en") + " " + currency;
// };

// var price = "20000";

// console.log(price.getCurrecy("đ"));

// // console.log(isNaN(undefined));

// String.prototype.toTitleCase = function () {
//     // console.log(this.split(" "));
//     return this.split(" ")
//         .map(function (word) {
//             return (
//                 word.charAt(0).toLocaleUpperCase() +
//                 word.slice(1).toLocaleLowerCase()
//             );
//         })
//         .join(" ");
// };

// var title = "hello world, welcome to javascript!";
// console.log(title.toTitleCase()); // Hiển thị: "Hello World, Welcome To Javascript!"

// Object.prototype.isPositiveNumber = function () {
//     // Implement the method here

//     _this = Number(this);

//     if (isNaN(_this)) {
//         return "Dữ liệu không hợp lệ";
//     }

//     if (_this > 0) {
//         return true;
//     }
//     return false;
// };

// var num1 = 42;
// var num2 = -10;
// var str = "abc";

// console.log(num1.isPositiveNumber()); // Hiển thị: true
// console.log(num2.isPositiveNumber()); // Hiển thị: false
// console.log(str.isPositiveNumber()); // Hiển thị: Dữ liệu không hợp lệ

// String.prototype.truncate = function (maxLength) {
//     // Implement the method here
//     // console.log(this);
//     // console.log(maxLength);

//     if (this.length > maxLength) {
//         return this.slice(0, maxLength) + "...";
//     }
//     return this;
// };

// var text = "JavaScript is a versatile language.";
// console.log(text.truncate(23)); // Hiển thị: "JavaScript is..."

Array.prototype.reverse = function () {
    // Implement the method here

    var newArr = [];

    // return this.sort(function (a, b) {
    //     return b - a;
    // });

    for (var i = this.length - 1; i >= 0; i--) {
        newArr.push(this[i]);
    }

    return newArr;
};

var arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); // Hiển thị: [5, 4, 3, 2, 1]
