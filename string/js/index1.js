// var email = "hoangan.web@gmail.com";

// var timKiem = email.indexOf("@");

// var username = email.slice(0, timKiem);

// console.log(username);

// //Bài 2: Viết hàm kiểm tra 1 chuỗi xem có phải chữ HOA hay không?

// function isUpper(str) {
//     return str == str.toUpperCase();
// }

// console.log(isUpper("LE DUC b ANH"));

// function countCharacter(str, char) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countCharacter("Hello anh em F8 em học lập trình", "e"));

function countCharacter(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countCharacter("Chào mọi người đến với kỳ euro 2024", "e"));
