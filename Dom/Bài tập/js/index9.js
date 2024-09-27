var checkAllEl = document.querySelector(".check-all");
var checkItems = document.querySelectorAll(".check-item");
var btnRemoveItems = document.querySelectorAll(".btn-remove");
var btnDeleteSelected = document.querySelector(".btn-delete-selected");
var checkboxContainer = document.querySelector(".checkbox-container");
var count = 0;

// Hàm cập nhật trạng thái nút "Xóa đã chọn"
function updateDeleteButton() {
    btnDeleteSelected.children[0].innerText = count;
    if (count > 0) {
        btnDeleteSelected.removeAttribute("disabled");
    } else {
        btnDeleteSelected.setAttribute("disabled", true);
    }
}

// Hàm kiểm tra trạng thái của nút "Chọn tất cả"
function updateCheckAll() {
    var totalItems = document.querySelectorAll(".check-item").length;
    var checkedItems = document.querySelectorAll(".check-item:checked").length;
    checkAllEl.checked = totalItems > 0 && totalItems === checkedItems;
}

// Xử lý sự kiện khi checkbox "Chọn tất cả" thay đổi
checkAllEl.addEventListener("change", function () {
    var status = this.checked;
    document.querySelectorAll(".check-item").forEach(function (item) {
        item.checked = status;
    });
    count = status ? document.querySelectorAll(".check-item").length : 0;
    updateDeleteButton();
});

// Xử lý sự kiện khi checkbox từng mục thay đổi
document.querySelectorAll(".check-item").forEach(function (item) {
    item.addEventListener("change", function () {
        if (this.checked) {
            count++;
        } else {
            count--;
        }
        updateDeleteButton();
        updateCheckAll();
    });
});

// Xử lý sự kiện khi nhấn nút "Xóa" cho từng mục
btnRemoveItems.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        var itemDiv = btn.parentElement;
        var checkbox = itemDiv.querySelector(".check-item");
        if (checkbox.checked) {
            count--; // Giảm đếm nếu checkbox đã chọn
        }
        itemDiv.remove(); // Xóa mục khỏi DOM
        updateDeleteButton(); // Cập nhật lại nút "Xóa đã chọn"
        updateCheckAll(); // Cập nhật lại "Chọn tất cả"
    });
});

// Xử lý sự kiện khi nhấn nút "Xóa đã chọn"
btnDeleteSelected.addEventListener("click", function () {
    document.querySelectorAll(".check-item:checked").forEach(function (item) {
        var itemDiv = item.parentElement.parentElement;
        itemDiv.remove(); // Xóa checkbox đã chọn khỏi DOM
    });
    count = 0; // Đặt lại đếm số lượng checkbox đã chọn
    updateDeleteButton(); // Cập nhật lại nút "Xóa đã chọn"
    updateCheckAll(); // Cập nhật lại checkbox "Chọn tất cả"
});
