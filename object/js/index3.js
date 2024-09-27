// var user = {
//     name: "Hoàng An",
//     email: "hoangan.web@gmail.com",

//     getValue: function () {
//         //Trả về value của tất cả các thuộc tính --> Lưu vào 1 mảng
//         // This ---> Object hiện tại (user)
//         var result = [];
//         var current = this;
//         Object.keys(this).forEach(function (key) {
//             console.log(typeof current[key]);
//             typeof current[key] !== "function" && result.push(current[key]);
//         });
//         return result;
//     },
// };

// console.log(user.getValue());

Object.prototype.getValue = function () {
    var _this = this;
    var result = [];
    console.log(Object.keys(this));
    Object.keys(this).forEach(function (item) {
        typeof _this[item] !== "function" && result.push(_this[item]);
    });
    return result;
};

Object.prototype.message = "Hello anh em F8";

var info = {
    name: "Đức Anh",
    phone: 123456,
    adddresss: "Hà Nội",

    // getValue: function () {
    //     return Object.values(this).filter(function (value) {
    //         console.log(value);
    //         return typeof value !== "function";
    //     });
    // },
};

// console.log(info.getValue());

// var customer = {
//     name: "Hoàng An F8",
//     address: "Hà Nội",
// };

// console.log(customer.getValue());

// var a = {};
// console.log(a.message);

// var b = [];
// console.log(b.message);

// var fullName = "Hoàng An";

// console.log(fullName.message);

// var age = 12;
// console.log(age.message);

// Object.prototype.notification = "Mai 8h học bài";

// var lopHoc = notification;

// console.log(lopHoc);

// var toanTruong = 10;
// console.log(toanTruong.notification);

//Object ---> Contructor  --> Data type

//Prototype trong Function Contructor: Array, String, Number,...  --> chỉ được sử dụng tại các object được tạo từ contructor đó.
// Array.prototype.messageA = "Hello Array";

// var arr1 = [];
// console.log(arr1.messageA);

// var a = "F8";
// console.log(a.messageA);

// Array.prototype.map2 = function (callback) {
//     // This ---> Mảng ban đầu

//     // console.log(this);
//     // console.log(callback);

//     if (typeof callback !== "function") {
//         return;
//     }
//     var newArr = [];
//     for (var i = 0; i < this.length; i++) {
//         // console.log(callback);\

//         // console.log(this[i]);
//         newArr[newArr.length] = callback(this[i], i);

//         console.log(newArr);
//     }
//     return newArr;
// };

// var users = ["User 1", "User 2", "User 3", "User 4"];

// var result = users.map2(function (user, index) {
//     console.log(user, index);
//     return `<h2>${index} - ${user}</h2>`;
// });

// document.write(result);

// console.log(result);

//Viết lại hàm filter trong array (filter2)

Array.prototype.filter2 = function (callback) {
    console.log(callback);
    console.log(this);
    var newArr = [];

    if (typeof callback !== "function") {
        return;
    }
    for (var i = 0; i < this.length; i++) {
        var result = callback(this[i], i);

        if (result) {
            newArr[newArr.length] = this[i];
        }
    }
    return newArr;
};

var numbers = [5, 1, 2, 9, 10];

var result = numbers.filter2(function (number, index) {
    // console.log(number, index);
    return number > 2;
});

// console.log(result);

String.prototype.last = function () {
    console.log(this);
    var arr = this.split(" ");
    return arr[arr.length - 1];
};
var fullName = "Lê Đức Anh";

console.log(fullName.split(" "));

console.log(fullName.last());
