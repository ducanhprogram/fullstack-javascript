//Cú pháp
/*
function tenham () {
    Nội dung hàm  
}


function tenham(thamso1, thamso2,....) {
    Nội dung hàm
}

-Đặt tên hàm:
- Quy tắc camelCase
- Sử dụng động từ


- Định nghĩa hàm ---> Tham số (parameter)
- Gọi hàn  --> Đối số (Argument)

-- Hàm có giá trị trả về (Hàm return)
-- Hàm không có giá trị trả về (Hàm void)


-- Biến toàn cuc : Biến khai báo ở phạm vị ngoài hàm
-- Biến cục bộ: Khai báo ở phạm vi trong 1 hàm, chỉ được sủ dụng trong pham vị của hàm đó

*/

// function getMessage(msg, type) {
//     console.log("Học JS không khó");
//     console.log(msg);
//     console.log(type);
//     return "F8";
// }

// var result = getMessage("F8 - FullStack", "Duc Anh"); // Lời gọi hàm chủ động

// console.log(getMessage("F8 - lập trình"));
// console.log(result);

// function division(a, b) {
//     if (b != 0) {
//         return a / b;
//     }

//     return "Không tính được";
// }

// console.log(division(10, 0));

// function getData() {
//     return data;
// }
// var data = "F8";

// function setData(value) {
//     data = value;
// }
// setData("FullStack");

// var result = getData();

// console.log(result);

// anonymous function: Hàm ẩn danh, hàm không tên

/*
-- Thực thi hàm ẩn danh
Cách 1: Gán vào 1 biến (Expression Function)
Cách 2: Đưa vào 1 hàm khác dưới dạng đối số

*/

// var getMessage = function getMsg() {
//     console.log("Học JS không khó");
// };

// getMessage();

// var display = function (callback, args) {
//     /*
//     callback = function() {
//         console.log("Học JS để làm gì")
//     }
//     */

//     // if (typeof callback === "function") {
//     //     callback();
//     // }

//     console.log("Học JS");

//     typeof callback === "function" && callback(args);
// };

// var handleDisplay = function (text) {
//     console.log("Học JS để làm gì");
//     console.log(text);
// };

// display(handleDisplay, "F8");

// display(function () {
//     handleDisplay("F8");
// });

//Từ khóa arguments

// function max(a, b) {
//     console.log(a, b);
//     console.log(arguments);
// }
// max(5, 10, 15, 20);
//Rest Parameter (Tham số còn lại)

function display(value1, value2, value3, value4) {
    console.log(`value1: `, value1);
    console.log(`value2: `, value2);
    console.log(`value3: `, value3);
    console.log(`value4: `, value4);
}

function max(a, b, ...args) {
    console.log(a, b);
    display(...args); //Spread  Operator
}

// max(5, 10, 15, 20, 25, 30);

// setTimeout(
//     function (value1, value2) {
//         console.log("Học lập trình không khó");
//         console.log(value1);
//         console.log(value2);
//     },
//     1000,
//     "F8",
//     "Lập trình"
// );

// var count = 0;
// var id = setInterval(function () {
//     console.log("Học lập trình làm gì", ++count);
//     if (count === 5) {
//         clearInterval(id);
//     }
// }, 1000);

var getA = function (callback) {
    setTimeout(function () {
        console.log("getA");
        if (typeof callback === "function") {
            callback();
        }
    }, 1000);
};

var getB = function (callback) {
    setTimeout(function () {
        console.log("getB");
        if (typeof callback === "function") {
            callback();
        }
    }, 500);
};

var getC = function (callback) {
    setTimeout(function () {
        console.log("getC");
        if (typeof callback === "function") {
            callback();
        }
    }, 1500);
};

getA(function () {
    getB(function () {
        getC();
    });
});
