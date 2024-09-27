// var obj = {
//     name: "Nguyễn Văn A",
//     age: 25,
//     city: "Hà Nội",
//     active: true,
// };

// obj = Object.entries(obj);

// console.log(obj);

// var objectToQueryString = function (obj) {
//     return obj
//         .map(function (item) {
//             return item.join("=");
//         })
//         .join("&")
//         .replaceAll(" ", "+");
// };

// function objectToQueryString1(obj) {
//     var result = [];
//     obj.forEach(function (element) {
//         result.push(element.join("="));
//     });
//     return result.join("&").replaceAll(" ", "+");
// }

// var queryString1 = objectToQueryString1(obj);
// console.log(queryString1);
// var queryString = objectToQueryString(obj);
// console.log(queryString); // "name=Nguyễn+Văn+A&age=25&city=Hà+Nội&active=true"

// var products = [
//     { name: "Sản phẩm A", price: 100 },
//     { name: "Sản phẩm B", price: 200 },
//     { name: "Sản phẩm C", price: 150 },
// ];

// var sumField = products.reduce(function (prev, current) {
//     console.log(prev, current.price);
//     return prev + current.price;
// }, 0);

// console.log(sumField);
// var totalPrice = sumField(products, "price");
// console.log(totalPrice); // 450

// var data = [
//     { name: "Nguyễn Văn A", age: 25 },
//     { name: "Trần Thị B", age: 30 },
//     { name: "Nguyễn Thị C", age: 28 },
//     { name: "Lê Văn D", age: 22 },
// ];

// var newArr = [];

// function filterAndTransformData(data, keyword) {
//     console.log(data);
//     return data
//         .filter(function (item) {
//             return item.name.includes(keyword);
//         })
//         .map(function (item) {
//             console.log(item.name);
//             return item.name + ":" + item.age;
//         });
// }

// var result = filterAndTransformData(data, "Nguyễn");
// console.log(result); // ["Nguyễn Văn A: 25", "Nguyễn Thị C: 28"]

var scores = [
    { name: "Nguyễn Văn A", score: 85 },
    { name: "Trần Thị B", score: 90 },
    { name: "Lê Văn C", score: 88 },
];

// var result = scores.reduce(function (prev, current) {
//     console.log(prev, current);

//     if (!prev || prev.score < current.score) {
//         return current;
//     }
//     return prev;
// }, 0);

// console.log(result);

function findMaxValue(arr, field) {
    return arr.reduce(function (max, current) {
        if (!max || max[field] < current[field]) {
            return current;
        }
        return max;
    }, 0);
}

var maxScore = findMaxValue(scores, "score");
console.log(maxScore); // 90
