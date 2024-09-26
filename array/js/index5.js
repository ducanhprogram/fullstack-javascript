/*
Kiểu dữ liệu tham chiếu


*/

//Cách sao chép array sang 1 địa chỉ (Sử dụng các phương thức để tọa ra mảng mới)

/*
1. Shallow copy
var b = a.slice(0)


2. Deep Copy

*/

var a = ["Hoàng An", 32];

// var b = a.slice(0);

var b = [...a];

b[0] = "Hoàng An F8";

console.log(a);
console.log(b);

//Kiểu dữ liệu tham chiếu không so sánh được
var a = [1];
var b = [1];

console.log(a === b);
