var checkAllEl = document.querySelector(".check-all");

var checkItems = document.querySelectorAll(".check-item");

var btnDelete = document.querySelector(".btn-delete");

checkAllEl.addEventListener("change", function (e) {
    //true - false
    var status = this.checked;

    checkItems.forEach(function (item) {
        console.log(item);
        item.checked = status;
    });

    if (status) {
        btnDelete.children[0].innerText = checkItems.length;
        btnDelete.removeAttribute("disabled");
        count = checkItems.length;
    } else {
        btnDelete.children[0].innerText = 0;
        btnDelete.setAttribute("disabled", true);
        count = checkItems.length;
    }
});

var count = 0;

checkItems.forEach(function (item) {
    item.addEventListener("change", function () {
        if (this.checked) {
            count++;
        } else {
            count--;
        }

        btnDelete.children[0].innerText = count;

        if (count > 0) {
            btnDelete.removeAttribute("disabled");
        } else {
            btnDelete.setAttribute("disabled", true);
        }

        console.log(checkItems.length);

        if (count === checkItems.length) {
            checkAllEl.checked = true;
        } else {
            checkAllEl.checked = false;
        }
    });
});

btnDelete.addEventListener("click", function () {
    checkItems.forEach(function (item) {
        if (item.checked) {
            item.checked = false;
            count--;
        }
    });

    btnDelete.children[0].innerText = 0;
    btnDelete.setAttribute("disabled", true);

    // Bỏ chọn "Check All" vì không còn checkbox nào được chọn
    checkAllEl.checked = false;
});
