function totalExpression(...numbers) {
    if (numbers.length) {
        var total = 0;
        var check = numbers.every(function (number) {
            if (number !== null) {
                number = +number;
                // console.log(number);
                console.log(total, number);
                total += number;
                if (!Number.isNaN(number)) {
                    console.log(number);
                    return true;
                }
            }
        });

        if (check) {
            return total;
            // return numbers.reduce(function (total, current) {
            //     return +total + +current;
            // });
        }
        return "Dữ liệu không hợp lệ";
    }
}

var result = totalExpression(5, 10, 15, undefined, 12.56, "20");

console.log(result);

// console.log(+"10a");

// console.log(20 + undefined);
