var info = {
    name1: {
        name: "Lê Đức Anh",
        add: "Hà Nội",
        phone: 975387001,
    },
    name2: {
        name: "Hoàng Thị Phượng",
        add: "Nghệ An",
        phone: 12345678,
    },
    name3: {
        name: "Nguyễn Khắc Huân",
        add: "Hà Nội",
        phone: 98765432,
    },
};

function getError(field) {
    console.log(field);
    var findInfo = field.split(".");

    console.log(findInfo);

    var arrInfo = findInfo[0];

    var valueInfo = findInfo[1];
    console.log(arrInfo);

    console.log(valueInfo);

    var valueKey = info[arrInfo];
    console.log(valueKey);

    if (valueKey) {
        if (arrInfo && valueKey[valueInfo]) {
            return (
                valueKey["name"] +
                "," +
                valueKey[valueInfo] +
                "," +
                valueKey["phone"]
            );
        }
    }
    return "Không tìm thấy thông tin tên";
}

console.log(getError("name1.add"));
