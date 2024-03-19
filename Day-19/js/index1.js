//Số lớn nhất

var findMinMax = function Arrary(arr) {
    if (!arr.length) {
        return console.log("Enter value!!!");
    }

    var max = arr[0];

    var min = arr[0];

    var maxIndex = 0;

    var minIndex = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }

        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }

    return { max: max, min: minIndex, maxIndex: maxIndex, minIndex: minIndex };
};

var arr = [12, 5, 23, 56, 40];

var result = findMinMax(arr);

console.log(result);
