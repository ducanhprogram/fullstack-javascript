var arr = [
    ["a", 1, true],
    ["b", 2, false],
];

function dataType(arr) {
    return arr.reduce(
        function (prev, current) {
            // console.log("prev:", prev, "current:", current);
            console.log(current);
            current.forEach(function (element) {
                console.log(element);
                // console.log("prev:", prev, "current:", current);

                if (typeof element === "string") {
                    console.log(element);
                    prev[0].push(element);
                } else if (typeof element === "number") {
                    console.log(prev[1]);

                    prev[1].push(element);
                } else if (typeof element === "boolean") {
                    console.log(prev[2]);

                    prev[2].push(element);
                }
            });
            return prev;
        },
        [[], [], []]
    );
}

var result = dataType(arr);

console.log(result);

// console.log(arr);
