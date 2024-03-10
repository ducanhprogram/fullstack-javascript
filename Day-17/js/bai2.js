var electric = +prompt("Nhập số điện hàng tháng: ");
var tien;

if (electric <= 50) {
    tien = +electric * 1678;
} else if (electric <= 100) {
    tien = 50 * 1678 + (electric - 50) * 1734;
} else if (electric <= 200) {
    tien = 50 * 1678 + 50 * 1734 + (electric - 100) * 2014;
} else if (electric <= 300) {
    tien = 50 + 1678 + 50 * 1734 + 100 * 2014 + (electric - 200) * 2536;
} else if (electric <= 300) {
    tien =
        50 +
        1678 +
        50 * 1734 +
        100 * 2014 +
        100 * 2536 +
        (electric - 300) * 2834;
} else {
    tien =
        50 +
        1678 +
        50 * 1734 +
        100 * 2014 +
        100 * 2536 +
        100 * 2834 +
        (electric - 400) * 2927;
}

console.log("Số tiền điện cần nộp: ", tien);
