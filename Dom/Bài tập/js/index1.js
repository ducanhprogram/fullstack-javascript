//Cách 1
// var openModalBtn = document.querySelector(".openModalBtn");

// var closeModalBtn = document.querySelector(".close-btn");

// console.log(closeModalBtn);

// var modalBox = document.querySelector(".modal-box");

// var overlay = modalBox.querySelector(".overlay");

// openModalBtn.addEventListener("click", function () {
//     modalBox.style.display = "block";
// });

// closeModalBtn.addEventListener("click", function () {
//     modalBox.style.display = "none";
// });

// overlay.addEventListener("click", function () {
//     modalBox.style.display = "none";
// });

// console.log((modalBox.style.display = "none"));

var openModalBtn = document.querySelector(".openModalBtn");

var closeModalBtn = document.querySelector(".close-btn");

var modalBox = document.querySelector(".modal-box");

var overlay = modalBox.querySelector(".overlay");

// openModalBtn.addEventListener("click", function () {
//     modalBox.classList.add("open");
// });

var openBtn = function () {
    modalBox.classList.add("open");
};

openModalBtn.addEventListener("click", openBtn);

overlay.addEventListener("click", function () {
    modalBox.classList.remove("open");
});

closeModalBtn.addEventListener("click", function () {
    modalBox.classList.remove("open");
});

document.addEventListener("keyup", function (e) {
    if (e.key == "Escape") {
        modalBox.classList.remove("open");
    }
});

//Form
var form = document.querySelector("form");

var content = document.querySelector(".content");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn hoạt động mặc định của trình duyệt với thẻ HTML
    // console.log(this);
    var nameEl = this.querySelector(".name");
    var name = nameEl.value;
    console.log(name);
    console.log(nameEl);

    if (!name) {
        alert("Vui lòng nhập tên");
        return;
    }
    content.innerHTML += `<h3>${name}</h3>`;
    nameEl.value = "";
});
