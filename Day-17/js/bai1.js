var discount;
var sokm = +prompt("Nhập số km đi được: ");
var tongTien;

if (sokm <= 0) {
    console.log("Số km không hợp lệ!!!");
    tongTien = "Số km quá nhỏ";
} else if (sokm <= 1) {
    tongTien = 15000;
} else if (sokm > 1 && sokm <= 5) {
    tongTien = 15000 + (sokm - 1) * 13500;
} else if (sokm > 5 && sokm <= 120) {
    tongTien = 15000 + 4 * 13500 + (sokm - 5) * 11000;
} else if (sokm > 120) {
    tongTien = (1 - 0.1) * (15000 + 4 * 13500 + 11000 * (sokm - 5));
}

console.log(` Tổng tiền đi được là: ${tongTien}đ `);
