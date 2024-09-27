var user = {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
    age: 31,
};

//Object.keys()  --> Lấy danh sách các key trả về mảng (Không lấy prototype)

// var keys = Object.keys(user).length;
// console.log(keys);

// if (Object.keys(user).length) {
//     Object.keys(user).forEach(function (key) {
//         console.log(user[key]);
//     });
// } else {
//     console.log("Không có dữ liệu");
// }

//Object.value()  ---> Lấy danh sách các value trả về mảng

// console.log(Object.values(user));

//Object.entries()  --> Trả về các keys và values   ---> Mảng 2 chiều

// console.log(Object.entries(user));

var a = {
    couse: "FullStack",
    teacher: "Hoàng An",
};

var b = {
    address: "Hà Nội",
    phone: 123456789,
};

// var tmp = Object.assign({}, user);

// var obj = Object.assign({}, user, a);

// console.log(obj);

// console.log(user);

//Bài tập

var query = {
    status: true,
    category: 1,
    keyword: "Hoàng An",
    active: false,
};

// var newArr = [
//     ["status", true],
//     ["category", 1],
//     ["keyword", "Hoàng An"],
// ];

// console.log(newArr.join("&"));

//Chuyển object trên thành query string

//--> status=true&category=1&keyword=Hoàng+An

query = Object.entries(query);

// console.log(query);

var queryString = query
    .map(function (item) {
        console.log(item);
        console.log(item.join("="));
        return item.join("=");
    })
    .join("&")
    .replaceAll(" ", "+");

console.log(queryString);

//Chuyển từ queryString thành query

//B1: Chuyển từ string ---> entries (Mảng 2 chiều)

var entries = queryString.replaceAll("+", " ");
entries = entries.split("&");
entries = entries.map(function (item) {
    var itemArr = item.split("=");

    if (itemArr[1] === "true" || itemArr[1] === "false") {
        console.log(itemArr[1]);

        console.log(typeof (itemArr[1] = itemArr[1] === "true"));
        itemArr[1] = itemArr[1] === "true";
    }

    return itemArr;
});

// chuyển từ entries ---> Object

var query = Object.fromEntries(entries);

console.log(entries);

console.log(query);
