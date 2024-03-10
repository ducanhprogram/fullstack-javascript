function tamGiacSo(N) {
    var currentNumber = 1;
    for (var i = 1; i <= N; i++) {
        var row = " ";
        for (var j = 1; j <= i; j++) {
            row += currentNumber + " ";
            currentNumber++;
        }
        console.log(row);
    }
}

tamGiacSo(5);
