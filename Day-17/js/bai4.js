function soNguyenTo(nguyento) {
    if (nguyento < 2) {
        return console.log("Không phải là số nguyên tố");
    } else {
        for (var i = 2; i < nguyento - 1; i++) {
            if (nguyento % i == 0) {
                return console.log("Không phải là số nguyên tố");
            }
        }
    }
    return console.log(`${nguyento} là số nguyên tố!!!`);
}

soNguyenTo(100);
