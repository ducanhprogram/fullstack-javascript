var openLogin = document.querySelector(".open-login");

var modalLogin = document.querySelector(".modal-login");

var overLay = modalLogin.querySelector(".overlay");

var closeX = modalLogin.querySelector(".close-x ");

var navTabItem = modalLogin.querySelectorAll(".nav-tab a");

var loginForm = modalLogin.querySelector(".login-form");

var closeModal = function () {
    modalLogin.classList.remove("show");
};

openLogin.addEventListener("click", function () {
    modalLogin.classList.add("show");
});

overLay.addEventListener("click", closeModal);

closeX.addEventListener("click", closeModal);

navTabItem.forEach(function (navItem) {
    navItem.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(this);
        var navActice = modalLogin.querySelector(".nav-tab a.active");
        // console.log(navActice);
        navActice.classList.remove("active");
        this.classList.add("active");

        var hash = this.getAttribute("href");
        // console.log(hash);

        var tabPanel = modalLogin.querySelector(
            ".tab-content .tab-panel" + hash
        );

        var tabPanelActive = modalLogin.querySelector(
            ".tab-content .tab-panel.active"
        );

        // console.log(tabPanelActive);
        tabPanelActive.classList.remove("active");

        tabPanel.classList.add("active");
    });
});

var handleValidate = function (current) {
    var emailEl = current.querySelector(".email");

    var passwordEl = current.querySelector(".password");

    var errors = {};

    var email = emailEl.value;
    var password = passwordEl.value;

    // console.log(emailEl);

    if (!email.trim()) {
        errors.email = "Vui lòng nhập email";
    }

    if (!password.trim()) {
        errors.password = "Vui lòng nhập mật khẩu";
    }

    var formGroupList = loginForm.querySelectorAll(".form-group");

    formGroupList.forEach(function (formGroup) {
        var fielName = formGroup.querySelector(".field-item").classList[1];

        if (errors[fielName]) {
            formGroup.querySelector(".error").innerText = errors[fielName];
        }
    });
    return errors;
};

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(this);
    var errors = handleValidate(this);

    if (!Object.keys(errors).length) {
        loginForm.querySelector(".msg").innerText = "Đăng nhập thành công";
    } else {
        loginForm.querySelector(".msg").innerText = "";
    }
});
