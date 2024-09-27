//Chuổi: Kiểu dữ liệu nguyên thủy
/*
- Number
- Boolean
- Null
- Underfined
- String

Kiểu dữ liệu tham chiếu
- Function
- Object


// Chuổi: Kiểu dữ liệu nguyên thủy

Number, String, Boolean  --> Hoạt động giống như object  (Bọc object)--> Để dễ dàng thao tác với các phương thức, thuộc tính xử lý chuỗi


Trong String: Bọc 1 hàm tạo tên String

Các kiểu dữ liệu tỏng JS đều có hàm tạo:

Ví dụ: 
- Chuỗi: String
- Số: Number
- Boolean: Boolean
- Đối tượng: Object
- Mảng: Array
*/

// var fullname = "Đức Anh";
// console.log(fullname, typeof fullname);
// console.log(fullname.length);

// console.log(String.prototype);
// console.log(Number.prototype);

//1. Lấy độ dài của chuỗi
var fullname = "Hello anh em F8";
// console.log(fullname.length);

//2. Lấy ký tự theo index
var fullname = "Hello anh em F8";
console.log(fullname.charAt(6));

//3. Lấy mã ASCII của ký tự trong chuỗi
var fullname = "Hello anh em F8";
// console.log(fullname.charCodeAt(1));

//4. Tìm chuỗi con trong chuỗi cha
var fullname = "Hello anh em F8";

console.log(fullname.includes("F8"));

//5. Tìm vị trí xuất hiện đầu tiền của chuỗi con trong chuỗi cha
var fullname = "Hello anh em F8 đã học tại lập trình F8";

// console.log(fullname.indexOf("F8"));

//6. Tìm vị trí xuất hiện cuối cùng của chuỗi con trong chuỗi cha
var fullname = "Hello anh em F8 đã học tại lập trình F8 và học xong";
// console.log(fullname.lastIndexOf("F8"));

//7. Cắt chuỗi theo index (slice)
var fullname = "Hello anh em F8 đã học tại lập trình F8 và học xong";
// console.log(fullname.slice(0, 10));
// console.log(fullname.slice(10));

//8. Tách chuỗi thành mảng (split' ')
var fullname = "Hello anh em F8 Javascript F8";
// console.log(fullname.split(""));

//9. Thay thế chuỗi  replace
var fullname = "Hello anh em F8 Javascript F8";
// console.log(fullname.replace("F8", "F9"));

//10. Thay thế tất cả
var fullname = "Hello anh em F8 Javascript F8";
// console.log(fullname.replaceAll("F8", "F9"));

//11. Chuyển thành chữ thường
var fullname = "Hello anh em F8 Javascript F8";
// console.log(fullname.toLocaleLowerCase());

//12. Chuyển thàng chữ hoa
var fullname = "Hello anh em F8 Javascript F8";
// console.log(fullname.toUpperCase());

//13. trim() loại bỏ khoảng trẳng đầu và cuối
var fullname = " Hello anh F8 Javascript F8";

// console.log(fullname.trim());
//14. Loại bỏ khoảng trắng đầu chuỗi
// trimStart()
var fullname = " Hello anh F8 Javascript F8 ";
// console.log(fullname.trimStart());

//15. Loại bỏ khoảng trắng cuối chuỗi
//trimEnd()

var phone = "0388845848575179";
//Lấy 4 số đầu + 4 dấu * + các số còn lại
var phone1 = phone.slice(0, 4);
var phone2 = phone.slice(8);
// console.log(phone1 + "****" + phone2);

// document.body.innerHTML = `ABC`;

// var n = +prompt("Nhập giá trị n: ");

// function checkSoNguyenTo(n) {
//     if (n <= 1) {
//         return "Số không hợp lệ!!!";
//     }

//     for (var i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// for (var i = 2; i <= n; i++) {
//     if (checkSoNguyenTo(i)) {
//         console.log(`${i} là số nguyên tố`);
//     } else {
//         console.log(`${i} không phải là số nguyên tố`);
//     }
// }
