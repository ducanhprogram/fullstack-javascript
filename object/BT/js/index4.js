// const customers = [
//     { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
//     { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
//     { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
// ];

// function createCustomers(customer) {
//     // console.log(customer);

//     var result = customer.map(function (item) {
//         var shortName =
//             item.name.split(" ").slice(0, 1) +
//             " " +
//             item.name.split(" ").slice(-1);
//         // console.log(item.name);
//         // console.log(item);

//         item.shortName = shortName;

//         return item;
//     });
//     result = result.sort(function (a, b) {
//         return a.age - b.age;
//     });

//     return result;
// }

// const result = createCustomers(customers); // Tạo hàm createCustomers này. return về mảng mới.

// console.log(result);

var Customer = function (name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
};

var customers = [
    new Customer("Nguyễn Văn A", 11, "Ha No"),
    new Customer("Nguyễn Văn B", 2, "Hai Phong"),
    new Customer("Nguyễn Văn C", 12, "Ho Chi Minh"),
];

function createCustomers(customer) {
    var result = customer.map(function (item) {
        var shortName =
            item.name.split(" ").slice(0, 1).join() +
            " " +
            item.name.split(" ").slice(-1).join();
        item.shortName = shortName;
        return item;
    });
    result = result.sort(function (a, b) {
        return a.age - b.age;
    });

    console.log(result);
    return result;
}

const result = createCustomers(customers);
console.log(result);
