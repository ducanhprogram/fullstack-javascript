function expression(N) {
    if (N === 1) {
        return 1;
    } else {
        return 1 / N + expression(N - 1);
    }
}

const N = 2;
const result = expression(N);
console.log("Giá trị của biểu thức là: " + result);
