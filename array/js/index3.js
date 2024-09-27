/*
Tìm kiếm phần tử theo từ khóa
*/

// var users = [
//     "Tạ Hoàng An",
//     "Lưu Anh Quân",
//     "Nguyễn Văn Hoàng",
//     "Nguyễn Văn Dũng",
//     "Mai Thị Hoa",
// ];

// var keyword = "an";

//Tìm các users chứa từ khóa

// function searchUsers(users, keyword) {
//     return users.findLastIndex(function (arr) {
//         return arr.toLowerCase().includes(keyword.toLowerCase());
//     });
// }

// console.log(searchUsers(users, keyword));

// Ham find()

/*
Chỉ khác filter trả về phần tử đầu tiên tìm được

*/

//Hàm findLast()  --> Trả về phần tử cuối cùng

//Hàm findIndex()
// Trả về index đầu tiền tìm được

// var users = [
//     ["User 1", "user1@gmail.com", 30],
//     ["User 2", "user2@gmail.com", 31],
//     ["User 3", "user3@gmail.com", 28],
// ];

//Tăng user nào có email là user2@gmail.com thêm 2 tuổi

// var newArr = users.findIndex(function (user) {
//     return user.includes("user2@gmail.com");
// });

// if (newArr !== -1) {
//     users[newArr][2] += 2;
// }

// console.log(users);

// users = users.map(function (user) {
//     if (user.includes("user2@gmail.com")) {
//         console.log(user[2]);
//         user[2] += 2;
//     }
//     return user;
// });

// console.log(users);

var users = [
    ["User 1", "user1@gmail.com", 30],
    ["User 2", "user2@gmail.com", 31],
    ["User 3", "user3@gmail.com", 28],
    ["User 4", "user2@gmail.com", 31],
];

//Loại bỏ phần tử có email bị trùng lặp

// var newArr = [];

// users = users.filter(function (user) {
//     var email = user[1];
//     // console.log(user);
//     console.log(newArr.includes(email));
//     if (!newArr.includes(email)) {
//         console.log(email);
//         newArr.push(email);
//         return true;
//     }
//     return false;
// });

// console.log(users);

// var newArr = [];

// users = users.filter(function (user) {
//     var email = user[1];

//     if (!newArr.includes(email)) {
//         newArr.push(email);
//         return true;
//     }
//     return false;
// });

// console.log(users);

// var users = [
//     ["User 1", "user1@gmail.com", 30],
//     ["User 2", "user2@gmail.com", 31],
//     ["User 3", "user3@gmail.com", 28],
//     ["User 4", "user2@gmail.com", 31],
// ];

// var newArr = [];

// users.forEach(function (user) {
//     console.log("Current user: ", user);
//     var result = newArr.find(function (item) {
//         console.log("Checking item:", item);
//         console.log(item[1], user[1]);

//         console.log(item[1] === user[1]);
//         return item[1] === user[1];
//     });

//     console.log(result);
//     if (!result) {
//         console.log("Added to newArr:", user);
//         newArr.push(user);
//     } else {
//         console.log("Duplicate found, not adding:", user);
//     }
// });

// console.log(newArr);

// function findFirstGreaterThanTen(arr) {
//     // console.log(typeof arr[2]);
//     var check = arr.find(function (number) {
//         return number > 10;
//     });
//     return check;
// }

// var numbers = [1, 5, 10, 15, 20];
// console.log(findFirstGreaterThanTen(numbers)); // Kỳ vọng 15

// function findFirstOddIndex(arr) {
//     var check = arr.findIndex(function (number) {
//         return number % 2 !== 0;
//     });

//     console.log(check);
//     return check;
// }

// var numbers = [2, 4, 6, 8, 12, 9, 10];
// console.log(findFirstOddIndex(numbers)); // Kỳ vọng 4

// nums = [2, 7, 11, 15];

// var twoSum = function (nums, target) {
//     var result = nums[0] + nums[1];
//     return result;
// };

// console.log(twoSum(nums));

//some  --> 1 vài

/*
- Trả về true / false
- Trả về true nếu trong callback có ít nhất 1 phần tử return true
*/

// var numbers = [5, 10, 2, 8];

// var check = numbers.some(function (number) {
//     return number % 2 !== 0;
// });

// console.log(check);

//Tất cả
// every  --> tất cả
/*
- Trả về true/ false
Trả về true nếu callback có tất cả return true, 
- Vồng lặp sẽ dừng lại nếu 1 phần tử ko thỏa mãn
*/

// Kiểm tra mảng mảng number xem có phải tất cả là số chẵn ko

var number = [2, 4, , 5, 6, 8];

var check = number.every(function (number) {
    console.log(number);
    return number % 2 == 0;
});

console.log(check);
