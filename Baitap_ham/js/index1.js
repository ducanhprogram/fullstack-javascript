function fibonacci(n, a = 0, b = 1, current = 0) {
    if (current < n) {
        if (current === 0) {
            console.log(a);
            console.log(b);
            fibonacci(n, a, b, current + 2);
        } else {
            var next = a + b;
            console.log(next);
            fibonacci(n, b, next, current + 1);
        }
    }
}

var n = +prompt("Import value Fibonacci: ");

fibonacci(n);
