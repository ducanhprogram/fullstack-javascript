var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function flattenArray(inputArray) {
    var flatArray = [];

    //forEach duyệt qua từng phần tử
    inputArray.forEach(function (item) {
        if (Array.isArray(item)) {
            //Hàm đệ quy
            flatArray = flatArray.concat(flattenArray(item));
        } else {
            flatArray.push(item);
        }
    });
    return flatArray;
}

console.log(flattenArray(arr));
