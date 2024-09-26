/*
Mảng tập hợp nhiều giá trị trong 1 biến (Biến mảng)
- Hàm tạo của mảng Array
- Mảng là object
*/

var users = ["User 1", "User 2", "User 3", "User 4"];

//Lấy số lượng phần tử trong mảng

users[users.length] = "User 5";

users[users.length] = "F8";
// console.log(users);
// Truy cập phần tử trong mảng

//Sửa phần tử mảng
users[1] = "User 2 Update";
// console.log(users);

// Duyệt mảng
// for (var index = 0; index < users.length; index++) {
//     console.log(users[index]);
// }

// for (var index in users) {
//     console.log(index, users[index]);
// }

// Xóa phần tử trong mảng
var indexDel = 1;
var newArr = [];

for (var index in users) {
    if (+indexDel === +index) {
        continue;
    }
    newArr[newArr.length] = users[index];
}
// console.log(newArr);

//Thêm phần tử vào đầu mảng
var newElement = "User 0";
var indexAdd = 0;
var newArr = [];

console.log(newArr);

for (var index in users) {
    newArr[newArr.length] = users[index];
}

console.log(newArr);
