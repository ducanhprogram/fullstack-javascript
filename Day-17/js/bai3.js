var n = 3;
var sum = 1;
var total = 0;

for (var i = 1; i <= n; i++) {
    sum = i * (i + 1);
    total += sum;
}

console.log(total);
