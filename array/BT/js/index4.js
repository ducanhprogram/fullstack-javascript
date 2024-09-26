var numbers = [5, 1, 9, 2, 14, 13, 8, 10];
var element = 30;

function sapXep(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

function chenPhanTu(arr, element) {
    var newArr = [];
    var inserted = false;

    for (var i = 0; i < arr.length; i++) {
        if (!inserted && arr[i] > element) {
            newArr[newArr.length] = element;
            inserted = true;
        }

        newArr[newArr.length] = arr[i];
    }

    if (!inserted) {
        newArr[newArr.length] = element;
    }

    return newArr;
}

var sortedNumbers = sapXep(numbers);
var updateNumbers = chenPhanTu(sortedNumbers, element);

console.log(sortedNumbers);
console.log(updateNumbers);
