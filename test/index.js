// function countDown(num) {
//     if (num > 0) {
//         console.log(num);
//         return setTimeout(function () {
//             countDown(num - 1);
//         }, 1000);
//     }
//     return num;
// }

// countDown(10);

// // setTimeout(function () {
// //     countDown(10);
// // }, 1000);

// function reverseNumber(n) {
//     var reNum = 0;

//     var raw = 0;
//     if (n % 1 === 0 && typeof n === "number") {
//         while (n !== 0) {
//             reNum = n % 10;
//             n = parseInt(n / 10);
//             raw = raw * 10 + reNum;
//         }
//         // return raw;
//     }
// }

// console.log(reverseNumber(12345));

function numberToWords(num) {
    if (num < 0 || num > 9999) {
        return "Số nằm ngoài phạm vi cho phép";
    }

    if (num === 0) {
        return "Không";
    }

    const units = [
        "",
        "Một",
        "Hai",
        "Ba",
        "Bốn",
        "Năm",
        "Sáu",
        "Bảy",
        "Tám",
        "Chín",
    ];
    const tens = [
        "",
        "Mười",
        "Hai mươi",
        "Ba mươi",
        "Bốn mươi",
        "Năm mươi",
        "Sáu mươi",
        "Bảy mươi",
        "Tám mươi",
        "Chín mươi",
    ];

    let result = "";
    const thousand = Math.floor(num / 1000);
    const hundred = Math.floor((num % 1000) / 100);
    const ten = Math.floor((num % 100) / 10);
    const unit = num % 10;

    if (thousand > 0) {
        result += units[thousand] + " ngàn ";
    }
    if (hundred > 0) {
        result += units[hundred] + " trăm ";
    }
    if (ten > 0) {
        result += ten === 1 && unit > 0 ? "Mười " : tens[ten] + " ";
    }
    if (unit > 0) {
        if (ten > 0 && unit === 1) {
            result += "mốt";
        } else if (ten > 0 && unit === 5) {
            result += "lăm";
        } else {
            result += units[unit];
        }
    }

    return result.trim();
}

console.log(numberToWords(9475)); // "Bốn ngàn hai trăm chín tám"
