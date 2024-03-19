var arr = [
    "duc",
    1,
    2,
    null,
    undefined,
    "ba",
    2,
    11,
    "handsome",
    undefined,
    "duc",
    13,
];

function filterOverlap(arrTr) {
    var result = []; // Mảng lưu kết quả sau khi trùng

    var isArr = false;
    for (var i = 0; i < arrTr.length; i++) {
        for (var j = 0; j < result.length; j++) {
            if (arrTr[i] === result[j]) {
                isArr = true;
                break;
            }
        }
        if (!isArr) {
            result[result.length] = arr[i];
        }
    }
    return result;
}

console.log(filterOverlap(arr));
