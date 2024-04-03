// Mở rộng prototype của Number
Number.prototype.getCurrency = function (currency) {
    return this.toLocaleString() + " " + currency;
};

// Mở rộng prototype của String
String.prototype.getCurrency = function (currency) {
    // Chuyển đổi chuỗi sang số. Sử dụng Number() để chuyển đổi chuỗi thành số
    var number = Number(this);
    if (isNaN(number)) {
        return "Invalid number";
    }
    return number.toLocaleString() + " " + currency;
};

// Case 1: Số
var price = 12000;
console.log(price.getCurrency("đ")); // Hiển thị: 12,000 đ

// Case 2: Chuỗi
var priceString = "120000000";
console.log(priceString.getCurrency("đ")); // Hiển thị: 12,000,000 đ
