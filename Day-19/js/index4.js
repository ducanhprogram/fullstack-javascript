var index = 0;

function sortArry(arr) {
    var temp;

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        index++;
    }
    return arr;
}

function insertSort(arr, num) {
    sortArry(arr);

    //Tìm vị trí chèn mới
    var position = arr.length;

    for (var i = 0; i < arr.length; i++) {
        if (num < arr[i]) {
            position = i;
            break;
        }
    }

    // console.log(position);

    for (var i = arr.length; i > position; i--) {
        arr[i] = arr[i - 1];
    }

    //Chèn số mới  vào vị trí tìm được
    arr[position] = num;

    return arr;
}

var newArr = [5, 1, 9, 8, 10];
var element = 7;

var result = insertSort(newArr, element);

console.log(result);

// var newArr = [5, 1, 9, 8, 10];

// var result = sortArry(newArr);

// console.log(result);

// var newArr = [1, 2, 3, 5, 6];

// var newArr2 = [];

// var locationArr = 1;
// var element = 4;

// for (var index in newArr) {
//     if (+locationArr === +index) {
//         newArr[index] = element;
//     }
//     newArr2[newArr2.length] = newArr[index];
// }

// console.log(newArr2);
