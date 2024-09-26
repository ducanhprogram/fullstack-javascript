var arr = [4, 45, 1, 50, 9, 10, 20];

function timMaxMin(arr) {
    var max = arr[0];
    var min = arr[0];
    var indexMax = 0;
    var indexMin = 0;

    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
            indexMax = i;
        }

        if (min > arr[i]) {
            min = arr[i];
            indexMin = i;
        }
    }
    console.log(
        ` Giá trị max ${max} ở vị trí ${indexMax} và giá trị min ${min} ở vị trí ${indexMin}`
    );
}

timMaxMin(arr);
