function countDown(num) {
    if (num > 0) {
        console.log(num);
        return setTimeout(function () {
            countDown(num - 1);
        }, 1000);
    }
    return num;
}

countDown(10);

// setTimeout(function () {
//     countDown(10);
// }, 1000);
