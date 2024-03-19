function checkSoNguyenTo(nguyento) {
    if (+nguyento <= 1) {
        return false;
    }

    for (var i = 2; i < nguyento; i++) {
        if (nguyento % i === 0) {
            return false;
        }
    }
    return true;
}

function totalNguyenTo(nguyento) {
    var total = 0;

    for (var i = 0; i < nguyento.length; i++) {
        if (checkSoNguyenTo(nguyento[i])) {
            total += nguyento[i];
        }
    }

    if (+total === 0) {
        console.log("Không có số nguyên tố");
    }
    return total;
}

var arr = [18, 7, 10, 3, 15];

var result = totalNguyenTo(arr);

console.log(`The total number of primes is: ${result}`);
