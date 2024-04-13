var getTotal = function (...numbers) {
    if (numbers.length) {
        var total = 0;
        var check = numbers.every(function (number) {
            if (number !== null) {
                number = +number;

                if (!Number.isNaN(number)) {
                    return true;
                }
            }
        });
        // if (check) {
        //     return numbers.reduce(function (total, number) {
        //         return +total + +number;
        //     });
        // }
        return "Dữ liệu không hợp lệ";
    }
};

console.log(getTotal(5, 10, 15, "20"));
