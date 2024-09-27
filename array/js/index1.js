console.log(Array.prototype);

//1. at() --> Trả về phần tử theo index

// console.log(users.at(2));
// var user = users.at(1);
// console.log(typeof user);

//2. concat() --> Nối mảng

// var newArr = users.concat(
//     ["User 4", "User 5"],
//     [["User 6"]],
//     [(1, 2, 3)],
//     ["a", "b", "c"]
// );

// console.log(newArr);

// var newArr = ["User 4", "User 5", 1, 2, 3];

// // for (var i = 0; i < newArr.length; i++) {
// //     users[users.length] = newArr[i];
// // }

// console.log(users);

//3. fill --> Update từng phần tử mảng thành 1 giá trị

// var newArr = users.fill(1);
// console.log(users);
// console.log(newArr);

// var newArr = Array(100);

// newArr.fill(0);

// console.log(newArr);

//4. includes() --> Tìm phần tử trong mảng trong mảng theo value

// console.log(users.includes("User 1"));

//5. indexOf(value)   ---> Tìm phần tử trong mảng theo value trả về index đầu tiền

// console.log(users.indexOf("User 3"));

//5: lastIndexOf(value)
// console.log(users.lastIndexOf());

//6. slice()  --> cắt mảng theo index (Tạo ra mảng mới)

// var newArr = users.slice(0, 1);

// console.log(users.slice(1, 3));
// console.log(typeof newArr);

//8. push()  --> Thêm phần tử vào cuối mảng

// var name = ["User 5", "User 6"];

// users.push(name);

// console.log(typeof users);

//9: unshift()  --> thêm phần tử vào đầu mảng

// var index = users.unshift("Item 11");

// console.log(index);

//10. pop() --->Xóa phần tử cuối mảng và trả về giá trị vừa xóa

// console.log(users);
// var newArr = users.pop();

//11. shift()

// console.log(users);
// var newArr = users.shift();

// console.log(newArr);
// console.log(users);

// var users = ["User 1", "User 2", "User 3", "User 4"];

// //12. splice(index, number, ...args)

// var newArr = users.splice(1, 1, "Hải", "Yến", "Đức Anh");

// console.log(users);
// console.log(newArr);

//13. sort  --> sắp xếp tăng dần

/*
Hàm sort nhận 1 callback có 2 tham số

sort(function (a, b) {
    a: Giá trị phần tử sau
    b: Giá trị phần tử trước
    Nếu callback trả vế số âm  --> Đổi chỗ phần từ trước sau    
})

*/

// var a = ["A", "C", "D", "B"];

// var b = [1, 4, 20, 100, 5, 3];

// b.sort(function (a, b) {
//     //a: sau
//     //b: trước

//     console.log(a, b);

//     // if (b > a) {
//     //     return -1;
//     // }

//     // return a - b;
//     return b - a;
//     return 0;
// });

// console.log(b);

//14. reverse()

// var numbers = [1, 2, 5, 4, 10];
// var newArr = numbers.reverse();

// console.log(numbers);
// console.log(newArr);

//15. join()  --> Nối mảng thành chuỗi
// var users = ["User 1", "User 2", "User 3"];
// // console.log(users.join(" "));
// document.body.innerHTML = `<h2>${users.join("</h2><h2>")}</h2>`;

// var customers = [
//     "Tạ Hoàng An",
//     "Đặng Ngọc Sơn",
//     "Nguyễn Minh Nhật Dương",
//     "Phạm Xuân Yến",
//     "Phan Văn Hải",
// ];

//Sắp xếp danh sách khách hàng theo thứ tự tăng dần (Theo tên)

// function firstName(fullName) {
//     return fullName.split(" ").slice(-1).join();
// }

// console.log(firstName("Lê Đức Anh"));

// customers.sort(function (a, b) {
//     if (firstName(a) > firstName(b)) {
//         return -1;
//     }
// });

// console.log(customers);

// var getFirstName = function (fullName) {
//     return fullName.split(" ").slice(-1).join();
// };

// // console.log(getFirstName("Nguyễn Minh Nhật Dương"));

// customers.sort(function (a, b) {
//     if (getFirstName(b) > getFirstName(a)) {
//         return -1;
//     }
// });

// console.log(customers);

// customers.sort(function (a, b) {
//     // Tìm khoảng trắng cuối cùng
//     var lastSpaceIndexA = a.lastIndexOf(" ");
//     var lastSpaceIndexB = b.lastIndexOf(" ");

//     // Lấy phần tên từ khoảng trắng cuối cùng đến hết chuỗi
//     var nameA = a.substring(lastSpaceIndexA + 1);
//     var nameB = b.substring(lastSpaceIndexB + 1);

//     // So sánh tên
//     if (nameA < nameB) {
//         return -1;
//     }
//     if (nameA > nameB) {
//         return 1;
//     }
//     return 0;
// });

// console.log(customers);

// Tách họ và tên đệm

// var customers = [
//     "Tạ Hoàng An",
//     "Đặng Ngọc Sơn",
//     "Nguyễn Minh Nhật Dương",
//     "Phạm Xuân Yến",
//     "Phan Văn Hải",
// ];

// var ho = [];
// var tenDem = [];

// function tachHoVaTenDem(fullName) {
//     var parts = fullName.split(" ");
//     // console.log(parts);
//     ho.push(parts[0]);

//     tenDem.push(parts.slice(1).join(" "));
// }

// for (var i = 0; i < customers.length; i++) {
//     tachHoVaTenDem(customers[i]);
// }

// console.log("Họ: ", ho);

// console.log("Tên Đệm: ", tenDem);

// console.log(`Họ: ${ho.join(", ")}`);
// console.log(`Tên đệm: ${tenDem.join(", ")}`);

// Tìm tất cả khách hàng có họ "Nguyễn"

// var customers = [
//     "Tạ Hoàng An",
//     "Đặng Ngọc Sơn",
//     "Nguyễn Minh Nhật Dương",
//     "Phạm Xuân Yến",
//     "Phan Văn Hải",
//     "Nguyễn Thị Thu Phượng",
// ];

// var arr = [];
// var tenHo = function (customer) {
//     var parts = customer.split(" ");

//     if (parts[0] === "Nguyễn") {
//         arr.push(customer);
//     }
// };

// for (var i = 0; i < customers.length; i++) {
//     tenHo(customers[i]);
// }

// console.log("Tên Nguyễn ", arr);

// var fullName = "Lê Đức Anh";

// var arr1 = [];

// arr1.push(fullName);

// console.log(arr1);

// Thêm khách hàng mới vào danh sách

var customers = [
    "Tạ Hoàng An",
    "Đặng Ngọc Sơn",
    "Nguyễn Minh Nhật Dương",
    "Phạm Xuân Yến",
    "Phan Văn Hải",
    "Nguyễn Thị Thu Phượng",
];

var newName = "Lê Thị Hoa";

customers.push(newName);

var firstName = function (customer) {
    var parts = customer.split(" ");

    return parts[parts.length - 1];
    console.log(parts[2]);
    // console.log(parts.slice(-1).join(" "));
};

customers.sort(function (a, b) {
    var nameA = firstName(a);
    var nameB = firstName(b);

    if (nameA < nameB) {
        return -1;
    }
});

console.log(customers);
