var arr = [20, 12, 3, 8, 19, 15];

function checkSoNguyenTo(arr) {
    if (arr <= 1) {
        return false;
    }

    if (arr === 2) {
        return true;
    }

    if (arr % 2 === 0) {
        return false;
    }

    for (var i = 3; i < arr; i++) {
        if (arr % i === 0) {
            return false;
        }
    }
    return true;
}

function tinhTrungBinhSoNguyenTo(arr) {
    var total = 0;
    var dem = 0;

    for (var i = 0; i < arr.length; i++) {
        if (checkSoNguyenTo(arr[i])) {
            total += arr[i];
            dem++;
        }
    }

    if (dem === 0) {
        console.log("Không có số nguyên tố");
    } else {
        var trungBinh = total / dem;
        console.log(` Trung bình các số nguyên tố là: ${trungBinh}`);
    }

    console.log(` Tổng số nguyên tố là: ${total}`);
}

tinhTrungBinhSoNguyenTo(arr);
