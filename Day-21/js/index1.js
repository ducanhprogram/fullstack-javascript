var errors = {
    name: {
        //name : nested object  đối tượng lồng nhau
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự",
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email",
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại",
    },
};

function getError(field) {
    // console.log(field); // email (string)
    var parts = field.split(".");

    console.log(parts); //  ["email", "unique"];

    var groupName = parts[0];
    var errorKey = parts[1]; //email hoặc unique hoặc required

    console.log(groupName); //email
    console.log(errorKey); // unique

    var groupErrros = errors[groupName];
    console.log(groupErrros);

    if (groupErrros) {
        if (errorKey && groupErrros[errorKey]) {
            return groupErrros[errorKey];
        }

        if (groupErrros["required"]) {
            return groupErrros["required"];
        }
    }

    return "Không tìm thấy lỗi tương ứng";
}

console.log(getError("email.unique"));

// var getError = function (field) {
//     // console.log(field); //name (string)
//     if (errors[field]) {
//         var error = errors[field];
//         // console.log(error);  //lấy giá trị của name
//         var key = Object.keys(error).at(0);
//         // required
//         return error[key];
//     }
// };

// console.log(getError("email"));
