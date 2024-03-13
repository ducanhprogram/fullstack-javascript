function reverseNumber(n) {
    var last;
    var reNum = 0;

    if (typeof n === "number" && n % 1 === 0) {
        while (n !== 0) {
            last = n % 10;
            n = parseInt(n / 10);
            // n = Math.floor(n / 10);
            reNum = reNum * 10 + last;
        }
        return reNum;
    } else {
        console.log("Vui lòng nhập lại!!!");
        return 0;
    }
}

var n = +prompt("Enter integr: ");
console.log(reverseNumber(n));

/*
Ví dụ: 1234
B1: num = 4

B2: num = 4 * 10 + 3 
 */
