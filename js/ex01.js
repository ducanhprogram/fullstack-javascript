// // var username = " Le Duc Anh",
// //     course = " fullStack";

// // console.log(username);

// // document.write(course);

// var company = "F8";
// // var welcome = "<h1>Chào mừng bạn đến với company " + company + " </h1>";
// // welcome = welcome + "<h2>Hoàng An F8</h2>";

// var welcome = `<h1>Chào mừng bạn đến với ${company} </h1>`;

// var a = 10;
// var b = 20;

// var result = `<h1>Kết quả phép tính ${a} + ${b} = ${a + b}</h1>`;
// document.write(welcome);
// document.write(result);

var discount;
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
