var data = {
    user: {
        name: "John Doe",
        address: {
            city: "New York",
            zip: "10001",
        },
        contact: {
            email: "john.doe@example.com",
            phone: "123-456-7890",
        },
    },
    settings: {
        theme: "dark",
        language: "en",
    },
};

function checkExistence(path) {
    // Your code here
    var newArr = path.split(".");

    var parts = data;

    var exits = true;

    newArr.forEach(function (part) {
        console.log(parts);
        if (parts && parts[part] !== undefined) {
            parts = parts[part];
        } else {
            exits = false;
            return;
        }
    });

    return exits;
}

// Test cases
console.log(checkExistence("user.name")); // true
console.log(checkExistence("user.address.city")); // true
console.log(checkExistence("user.contact.phone")); // true
console.log(checkExistence("settings.theme")); // true
console.log(checkExistence("user.age")); // false
console.log(checkExistence("settings.color")); // false
