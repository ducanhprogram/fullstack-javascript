// var profile = {
//     username: "johndoe",
//     details: {
//         age: 30,
//         address: {
//             city: "New York",
//             country: "USA",
//         },
//     },
//     preferences: {
//         theme: "dark",
//         notifications: true,
//     },
// };

// function updateValue(path, value) {
//     // Your code here

//     var parts = path.split(".");
//     console.log(parts);

//     var current = profile;

//     parts.forEach(function (part, index) {
//         console.log(part, index);
//         if (index < parts.length - 1) {
//             if (!current[part]) {
//                 current[part] = {};
//             }
//             current = current[part];
//         } else {
//             current[part] = value;
//         }
//     });
// }

// // Test cases
// updateValue("details.age", 31);
// console.log(profile.details.age); // 31

// updateValue("details.address.zip", "10001");
// console.log(profile.details.address.zip); // 10001

// updateValue("preferences.language", "en");
// console.log(profile.preferences.language); // en

// updateValue("newField", "newValue");
// console.log(profile.newField); // newValue

// var newArr = {
//     name: "Đức Anh",
//     age: 18,
// };

// newArr = {};

// newArr["address"] = "Hà Nội";

// console.log(newArr);

var data = {
    user: {
        profile: {
            name: "John Doe",
            age: 30,
        },
        settings: {
            theme: "dark",
            notifications: true,
        },
    },
};

function updateValue(path, newValue) {
    var parts = path.split(".");
    var current = data;

    parts.forEach(function (part, index) {
        // Nếu chưa phải là phần cuối cùng, tiếp tục đi sâu vào đối tượng
        // console.log(part);
        if (index < parts.length - 1) {
            // Nếu phần này không tồn tại, tạo một đối tượng mới
            if (!current[part]) {
                current[part] = {};
                console.log(current[part]);
            }
            current = current[part];
        } else {
            // Đây là phần cuối cùng, cập nhật giá trị
            current[part] = newValue;
        }
    });
}

// Test cases
updateValue("user.profile.name", "Jane Doe");
console.log(data.user.profile.name); // "Jane Doe"

updateValue("user.address.info", "Hà Nội");
console.log(data.user.address.info);

updateValue("user.profile.age", 25);
console.log(data.user.profile.age); // 25

updateValue("user.settings.language", "en");
console.log(data.user.settings.language); // "en"

updateValue("user.preferences.theme", "light");
console.log(data.user.preferences.theme); // "light"
console.log(data); // Hiển thị toàn bộ cấu trúc của đối tượng sau khi cập nhật

console.log(data);
