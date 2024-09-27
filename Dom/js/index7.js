var checkAll = document.querySelector(".checkAll");

var checkBoxs = document.querySelectorAll(".checkbox");

var deleteSelected = document.querySelector(".delete-selected");

function updateDeletedButton() {
    var selectCount = Array.from(checkBoxs).filter(function (checkbox) {
        return checkbox.checked;
    }).length;

    if (selectCount > 0) {
        deleteSelected.removeAttribute("disabled");
        deleteSelected.textContent = ` Xóa đã chọn (${selectCount})`;
    } else {
        deleteSelected.setAttribute("disabled", true);
        deleteSelected.textContent = "Xóa đã chọn (0)";
    }
    console.log(selectCount);
}

if (checkBoxs.length) {
    var count = 0;
    checkBoxs.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            console.log(checkbox);

            var allChecked = Array.from(checkBoxs).every(function (box) {
                console.log(box.checked);
                return box.checked;
            });

            if (allChecked) {
                checkAll.checked = true;
            } else {
                checkAll.checked = false;
            }

            updateDeletedButton();
        });
    });

    checkAll.addEventListener("change", function (e) {
        checkBoxs.forEach(function (checkbox) {
            // console.log(checkbox);
            // console.log(checkAll.checked);
            checkbox.checked = checkAll.checked;
        });
        updateDeletedButton();
    });
}

deleteSelected.addEventListener("click", function () {
    checkBoxs.forEach(function (checkbox) {
        console.log(checkbox);
        if (checkbox.checked == true) {
            checkbox.checked = false;
        }

        if (checkAll.checked) {
            checkAll.checked = false;
        }
    });
    updateDeletedButton();
});
