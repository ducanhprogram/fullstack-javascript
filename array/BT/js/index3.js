var arr = [3, 4, 1, 3, 4, 6, 7];

function locTrung(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var isDuplicate = false;

        console.log(arr[i]);
        for (var j = 0; j < result.length; j++) {
            console.log(result[j]);
            if (arr[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            result[result.length] = arr[i];
        }
    }

    return result;
}

console.log(locTrung(arr));
