document.querySelectorAll(".update-input").forEach(function (input) {
    input.addEventListener("keypress", function (event) {
        if (event.key === "+" || event.key === "-") {
            // Lấy thông tin sản phẩm
            var product = this.closest(".product");
            var quantityElem = product.querySelector(".quantity");
            var currentQuantity = parseInt(product.dataset.quantity);

            // Kiểm tra phím nhập
            if (event.key === "+") {
                currentQuantity += 1; // Cộng thêm 1
            } else if (event.key === "-" && currentQuantity > 0) {
                currentQuantity -= 1; // Trừ đi 1 nếu số lượng > 0
            }

            // Cập nhật lại số lượng trong dataset và giao diện
            product.dataset.quantity = currentQuantity;
            quantityElem.textContent = currentQuantity;

            // Kiểm tra nếu hết hàng thì vô hiệu hóa sản phẩm
            if (currentQuantity === 0) {
                product.classList.add("out-of-stock");
                this.disabled = true;
            } else {
                product.classList.remove("out-of-stock");
                this.disabled = false;
            }
        }
    });
});
