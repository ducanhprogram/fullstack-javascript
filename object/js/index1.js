/*
Đối tượng:
- Thuộc tính (Biến)
- Phương thức (Hàm)


Các cách tạo đối tượng trong js
- Object Literal   (Object cụ tổ)
- Function Constructor
*/
console.log(Object);

// Cú pháp chung:
//key : value   ---> key thường là 1 chuỗi

//Hay phân biệt object và mảng:
/*
Key số là mảng
key chuỗi là object
*/
// var user = {};

// var user = new Object();

var user = {
    name: "Đức Anh",
    age: 32,
    email: "leducanhled@gmail.com",

    getName: function () {
        return "Hoàng An";
    },
};

//Thêm key mới vào object
user.phone = 123456;
user["address"] = "Hà Nội";

// console.log(user);

//Truy cập vào key trong object

// console.log(user.name);
// console.log(user.email);
// console.log(user.getName());

// console.log(user["age"]);

//cập nhật giá trị của key
user.age = 20;
// console.log(user);

//Xóa giá trị của key

delete user.age;
// console.log(user);

//Duyệt các key của object

// for (var key in user) {
//     console.log(key);
// }

//Lấy ra giá trị value

// for (var key in user) {
//     console.log(key, user[key]);
// }

//Bài tập

var a = {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
};

var b = {
    course: "Fullstack",
    teacher: "Hoàng An F8",
};

//Nối 2 object a và b ==> Lưu vào object c

// var c = {};

// for (var key in a) {
//     c[key] = a[key];
// }

// for (var key in b) {
//     c[key] = b[key];
// }

// console.log(c);

// function connectObject(obja, objb) {
//     for (var key in obja) {
//         c[key] = obja[key];
//     }

//     for (var key in objb) {
//         c[key] = objb[key];
//     }

//     return c;
// }

// c = connectObject(a, b);

// console.log(c);

function connectObject(obja, objb) {
    var c = {};

    for (var key in obja) {
        c[key] = obja[key];
    }

    for (var key in objb) {
        c[key] = objb[key];
    }

    return c;
}

// console.log(connectObject(a, b));

//Kiểm tra 1 biến có phải object không?
if (typeof user === "object" && !Array.isArray(user) && user !== null) {
    console.log(` Là object`);
}

// var products = [
//     null,
//     1,
//     false,
//     {
//         name: "SP 0",
//         price: 18000,
//     },
//     {
//         name: "SP 1",
//         price: 20000,
//     },

//     [30000],

//     {
//         name: "SP 2",
//         price: 10000,
//     },
//     undefined,
//     {
//         name: "SP 3",
//         price: 15000,
//     },
// ];

//Trả về thông tin sản phẩm có giá trị lớn nhất

//C1
// var result = products.reduce(function (max, current) {
//     console.log(max, current);

//     if (
//         typeof current === "object" &&
//         !Array.isArray(current) &&
//         current !== null
//     ) {
//         if (!max || current.price > max.price) {
//             max = current;
//         }
//     }
//     return max;
// }, null);

// console.log(result);

//C2

// var isProduct = function (item) {
//     console.log(` Item: ${item}`);
//     if (
//         typeof item === "object" &&
//         !Array.isArray(item) &&
//         item !== null &&
//         item.price
//     ) {
//         return true;
//     }
//     return false;
// };

// var result = products.reduce(function (prev, current) {
//     // console.log(prev, current);
//     console.log(prev, current);
//     if (isProduct(current)) {
//         if (!prev || current.price > prev.price) {
//             return current;
//         }
//     }
//     return prev;
// }, null);

// // console.log(result);
// var products = [
//     null,
//     1,
//     false,
//     {
//         name: "SP 1",
//         price: 20000,
//     },
//     [30000],
//     {
//         name: "SP 2",
//         price: 10000,
//     },
//     undefined,
//     {
//         name: "SP 3",
//         price: 15000,
//     },
// ];

// var result = products.reduce(function (prev, current) {
//     if (
//         typeof current === "object" &&
//         !Array.isArray(current) &&
//         current !== null
//     ) {
//         if (!prev || current.price < prev.price) {
//             return current;
//         }
//     }
//     return prev;
// }, null);
// // Viết mã của bạn ở đây để tìm sản phẩm có giá trị thấp nhất

// console.log(result);

// var products = [
//     null,
//     1,
//     false,
//     {
//         name: "Sản phẩm số 1",
//         price: 20000,
//     },
//     [30000],
//     {
//         name: "SP 2",
//         price: 10000,
//     },
//     undefined,
//     {
//         name: "Sản phẩm đặc biệt 3",
//         price: 15000,
//     },
// ];

// // Viết mã của bạn ở đây để tìm sản phẩm có tên dài nhất

// var result = products.reduce(function (prev, current) {
//     if (
//         typeof current === "object" &&
//         !Array.isArray(current) &&
//         current !== null &&
//         current.price
//     ) {
//         if (!prev || current.name.length > prev.name.length) {
//             return current;
//         }
//     }
//     return prev;
// }, null);

// console.log(result);

var products = [
    null,
    1,
    false,

    {
        name: "SP 6",
        price: 3000,
    },
    {
        name: "SP 1",
        price: 20000,
    },
    [30000],
    {
        name: "SP 4",
        price: 23000,
    },
    {
        name: "SP 2",
        price: 10000,
    },
    undefined,
    {
        name: "SP 3",
        price: 15000,
    },

    {
        name: "SP 5",
        price: 34000,
    },
];

// Viết mã của bạn ở đây để tìm tất cả các sản phẩm có giá trị nằm trong khoảng từ 10,000 đến 20,000

var result = products.reduce(function (prev, current) {
    if (
        typeof current === "object" &&
        !Array.isArray(current) &&
        current !== null
    ) {
        if (current.price >= 10000 && current.price <= 20000) {
            prev.push(current);
        }
    }
    return prev;
}, []);

console.log(result);
