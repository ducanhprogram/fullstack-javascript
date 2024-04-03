const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(customerArray) {
    var modifiedCustomers = customerArray.map(function (customer) {
        console.log(customer);
        var names = customer.name.split(" ");
        console.log(names);
        var shortName =
            names.lenght > 1
                ? names[0] + " " + names[names.length - 1].charAt(0)
                : customer.name;

        return {
            name: customer.name,
            age: customer.age,
            address: customer.address,
            shortName: shortName,
        };
    });

    console.log(modifiedCustomers);

    modifiedCustomers.sort(function (a, b) {
        return a.age - b.age;
    });

    return modifiedCustomers;
}

var result = createCustomers(customers);

console.log(result);

var a = ["Lê", "Đức ", "Anh"];

console.log(a.length);
