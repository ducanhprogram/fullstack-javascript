Number.prototype.getCurrency = function () {
    var result = this.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
    });

    return result;
};

var price = 12000000;
console.log(price.getCurrency("d"));
