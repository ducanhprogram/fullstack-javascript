var checkAll = document.querySelector(".checkAll");

var checkBoxs = document.querySelectorAll(".checkbox");

var btnDelete = document.querySelector(".btn-delete");

checkAll.addEventListener("change", function (e) {
    console.log(this.checked);

    var status = this.checked;

    checkBoxs.forEach(function (checkbox) {
        console.log(checkbox);
        checkbox.checked = status;
    });

    if (status) {
        btnDelete.children[0].innerHTML = checkBoxs.length;
        btnDelete.removeAttribute("disabled");
        count = checkBoxs.length;
    } else {
        btnDelete.children[0].innerHTML = 0;
        btnDelete.setAttribute("disabled", true);
        count = 0;
    }
});

var count = 0;

checkBoxs.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            count++;
        } else {
            count--;
        }

        if (count > 0) {
            btnDelete.removeAttribute("disabled");
            btnDelete.children[0].innerHTML = count;
        } else {
            btnDelete.setAttribute("disabled", true);
            btnDelete.children[0].innerHTML = count;
        }

        if (count === checkBoxs.length) {
            checkAll.checked = true;
        } else {
            checkAll.checked = false;
        }
    });
});

console.log(checkBoxs);
btnDelete.addEventListener("click", function () {
    checkBoxs.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkbox.checked = false;
            count--;
        }
    });
    checkAll.checked = false;
    btnDelete.children[0].innerHTML = 0;
    btnDelete.setAttribute("disabled", true);
});
