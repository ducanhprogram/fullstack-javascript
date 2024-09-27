// Function Constructor
// Bảng thiết kế của object
// Ví dụ: Tạo 3 object có các thuộc tính và phương thức sau

/*
name, email, address
getInfo()

---> Tự định nghĩa ra hàm tạo riêng để sử dụng trường hợp này
*/

function Person(name, email, address) {
    // Đặt thên theo cú pháp PascallCase
    // Tên dùng danh từ
    this.name = name;
    this.email = email;
    this.address = address;

    this.getInfo = function () {
        return `
        - Name: ${this.name}
        - Email: ${this.email}
        - Address: ${this.address}
        `;
    };
}

Person.prototype.message = "Hello F8";

// Khởi tạo object
// var obj = new Person("User 1", "email1@gmail.com", "Address 1");

// console.log(obj);
// console.log(obj.message);

// var obj2 = new Person("User 2", "email2@gmail.com", "address 2");

// console.log(obj2.message);

// //Static

Person.msg = "Học lập trình không khó";
Person.getMsg = function () {
    //Muốn truy cập vào các phương thức, thuộc tính không phải static (non-static)  --> Khởi tạo object với từ khóa this
    return new this().message;
};

console.log(Person.getMsg());

Person.prototype.something = function () {
    //This.constructor--> Trả về hàm tạo của object
    console.log(this.constructor.msg);
};

var user = new Person();
user.something();

var customers = [];

// if (customers.constructor.name === "Array") {
//     console.log("Là mảng");
// }

if (customers instanceof Array) {
    console.log("Là mảng");
}

//Constructoer  ==> Object  ==> Instance
//Bài tập:
//Xây dựng hàm tạo Calculator và viêc các phương thức
/**
add(...args)
sub(...args)
mul(...args)
div(...args)
 */

function Calculator() {
    this.add = function (...args) {
        var result = args.reduce(function (total, current) {
            // console.log(total, current);
            return +total + +current;
        });
        return result;
    };

    this.sub = function (...args) {
        var result = args.reduce(function (total, current) {
            return total - +current;
        });
        return result;
    };

    this.mul = function (...args) {
        var result = args.reduce(function (total, current) {
            return +total * +current;
        });

        return result;
    };

    this.div = function (...args) {
        var result = args.reduce(function (total, current) {
            if (+current === 0) {
                throw new Error("Không được phép chia cho số 0");
            } else {
                return +total / +current;
            }
        });
        return result;
    };
}

var calc = new Calculator();
var total = calc.add(10, 20, 30);
var totalSub = calc.sub(10, 20, 30);
var totalMul = calc.mul(10, 20, 30);
var totalDiv = calc.div(60, 30);
// console.log(total);
// console.log(totalSub);
// console.log(totalMul);
// console.log(totalDiv);

//Array like object

function something() {
    //arguments  --> Object   (Giống array)
    // console.log(arguments);

    // var keys = Object.keys(arguments);

    // // console.log();
    // // console.log(keys);

    // var _arguments = arguments;

    // keys.forEach(function (key) {
    //     // console.log(key);
    //     // console.log(arguments);
    //     console.log(_arguments[key]);
    // });

    Array.from(arguments).forEach(function (item) {
        console.log(item);
    });

    console.log(Array.of(arguments));
}

something(10, 20, 30, 40, 50, 60);

// const animals = {
//     0: "Dog",
//     1: "Cat",
//     2: "Mouse",
//     length: 3,
// };

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals);
//     console.log(animals[i]);
// }

// function sum(a, b) {
//     console.log(arguments.length);
//     console.log(a + b);
// }

// sum(3, 4);

//Object.create()  ---> Tạo object từ Prototype

var obj = Object.create(Array.prototype);

console.log(obj);

var a = {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
};

var b = a;
b.name = "Hoàng An F8";

var c = Object.assign({}, a);

c.name = "Lập trình F8";

// console.log(a);

// Optional Chaining  (?.)

// 1. Optional Chaining thuộc tính
var a = {
    name: "Hoàng An",
};
console.log(a?.name?.domain);

//2. Optional Chaining với phương thức

var b = {
    // getName: function () {
    //     console.log("Học lập trình");
    // },
};
console.log(b?.getName());
