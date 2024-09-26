// var errors = {
//     name: {
//         required: "Vui lòng nhập họ tên",
//         min: "Họ tên phải từ 5 ký tự",
//     },
//     email: {
//         email: "Định dạng email không hợp lệ",
//         unique: "Email đã có người sử dụng",
//         required: "Vui lòng nhập địa chỉ email",
//     },
//     password: {
//         required: "Vui lòng nhập mật khẩu",
//         same: "Mật khẩu phải khớp với mật khẩu nhập lại",
//     },
// };

// console.log(errors["name"]["required"]);

// function getError(field) {
//     console.log(field);
//     console.log(errors[field]);
//     if (!field.includes(".")) {
//         if (errors[field] && errors[field]["required"]) {
//             console.log(errors[field]["required"]);
//         } else {
//             console.log(`Field not found or 'required' error not specified.`);
//         }
//     } else {
//         var arrField = field.split(".");
//         console.log(errors[arrField[0]]); // name   // min
//         if (errors[arrField[0]] && errors[arrField[0]][arrField[1]]) {
//             console.log(errors[arrField[0]][arrField[1]]);
//         } else {
//             console.log(`Field or subfield not found.`);
//         }
//     }
// }

// getError("name"); //Vui lòng nhập họ tên
// getError("name.min"); //Họ tên phải từ 5 ký tự

// getError("email"); //Vui lòng nhập địa chỉ email
// getError("email.email");
// getError("email.unique"); //Email đã có người sử dụng

// console.log(getError("name")); // Vui lòng nhập họ tên
// console.log(getError("name.min")); // Họ tên phải từ 5 ký tự
// console.log(getError("email")); // Vui lòng nhập địa chỉ email
// console.log(getError("email.unique"));

var messages = {
    login: {
        success: "Đăng nhập thành công!",
        failure: "Đăng nhập thất bại!",
    },
    register: {
        success: "Đăng ký thành công!",
        failure: "Đăng ký thất bại!",
    },
    common: {
        required: "Vui lòng nhập đầy đủ thông tin",
    },
};

// function getMessage(field) {
//     // var arrField = field.split(".");
//     // console.log(arrField);

//     // if (messages[arrField[0]] && messages[arrField[0]][arrField[1]]) {
//     //     console.log(
//     //         messages[arrField[0]] && messages[arrField[0]][arrField[1]]
//     //     );
//     // } else {
//     //     return "Thông báo mặc định: Thông tin không xác định";
//     // }

//     var parts = field.split(".");

//     var current = messages;
//     for (var i = 0; i < parts.length; i++) {
//         console.log(parts.length);
//         if (current[parts[i]] !== undefined) {
//             console.log(parts[i]);
//             current = current[parts[i]];
//             console.log(current);
//         } else {
//             return "Thông báo mặc định: Thông báo thông tin xác định";
//         }
//     }
//     return current;
// }

function getMessage(field) {
    var newArr = field.split(".");

    var result = messages;

    newArr.forEach(function (part) {
        console.log(part);
        console.log(result);

        if (result && result[part] !== undefined) {
            result = result[part];
            console.log(result);
        } else {
            result = "Thông báo mặc định: Thông báo không xác định";
        }
    });

    return result;
}
// Test cases
console.log(getMessage("login.success")); // Đăng nhập thành công!
console.log(getMessage("register.failure")); // Đăng ký thất bại!
console.log(getMessage("common.required")); // Vui lòng nhập đầy đủ thông tin
console.log(getMessage("unknown.field")); // Thông báo mặc định: "Thông tin không xác định"
