var openLogin = document.querySelector(".open-login");
var modalAuth = document.querySelector(".modal-auth");
var closeX = document.querySelector(".close-x");
var modalOverlay = modalAuth.querySelector(".overlay");

var tabNavItems = modalAuth.querySelectorAll(".tab-nav a");

var loginForm = modalAuth.querySelector(".login-form");

var togglePassword = loginForm.querySelector(".show-password");

var closeModal = function () {
    modalAuth.classList.remove("show");
};

var handleValidate = function (current) {
    console.log(current);
    var emailEl = current.querySelector(".email");
    var passwordEl = current.querySelector(".password");

    console.log(emailEl, passwordEl);
    var email = emailEl.value;
    var password = passwordEl.value;

    // console.log(email, password);

    var errors = {};

    if (!email.trim()) {
        errors.email = "Vui lòng nhập email";
    }

    if (!password.trim()) {
        errors.password = "Vui lòng nhập mật khẩu";
    }

    //Chọn tất cả các form-group
    var formGroupList = loginForm.querySelectorAll(".form-group");

    formGroupList.forEach(function (element) {
        // console.log(element);
        var fielName = element.querySelector(".field-item").classList[1];

        element.classList.remove("has-error");
        element.querySelector(".error").innerText = "";
        if (errors[fielName]) {
            element.classList.add("has-error");
            element.querySelector(".error").innerText = errors[fielName];
        }
    });

    return errors;
};

openLogin.addEventListener("click", function () {
    modalAuth.classList.add("show");
});

modalOverlay.addEventListener("click", closeModal);

closeX.addEventListener("click", closeModal);

var currentTab;

// tabNavItems
tabNavItems.forEach(function (navItem) {
    navItem.addEventListener("click", function (e) {
        e.preventDefault();
        var activeTab = modalAuth.querySelector(".tab-nav a.active");

        // console.log(activeTab);
        activeTab.classList.remove("active");
        this.classList.add("active");

        var hash = this.getAttribute("href");
        console.log(hash);

        var tabPanel = modalAuth.querySelector(
            ".tab-content .tab-panel" + hash
        );

        console.log(tabPanel);

        var tabPanelActive = modalAuth.querySelector(
            ".tab-content .tab-panel.active"
        );

        tabPanelActive.classList.remove("active");
        // console.log(tabPanelActive);
        tabPanel.classList.add("active");

        //Reset các field

        if (hash !== currentTab) {
            var formGroupList = loginForm.querySelectorAll(".form-group");
            formGroupList.forEach(function (element) {
                console.log(element);
                element.classList.remove("has-error");
                element.querySelector(".error").innerText = "";
                element.querySelector(".field-item").value = "";
            });
            loginForm.querySelector(".msg").innerText = "";
        }

        currentTab = hash;
    });
});

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var errors = handleValidate(this);
    if (!Object.keys(errors).length) {
        loginForm.querySelector(".msg").innerText = "Đăng nhập thành công";
    } else {
        loginForm.querySelector(".msg").innerText = "";
    }
});

var fieldItemList = loginForm.querySelectorAll(".field-item");
console.log(fieldItemList);

fieldItemList.forEach(function (fieldItem) {
    fieldItem.addEventListener("click", function () {
        console.log(loginForm);
        handleValidate(loginForm);
    });
});

togglePassword.addEventListener("click", function () {
    var password = loginForm.querySelector(".password");

    if (this.classList.contains("hide")) {
        password.type = "text";
        this.classList.remove("hide");
    } else {
        password.type = "password";
        this.classList.add("hide");
    }
});

// tabNavItems.forEach(function (navItem) {
//     navItem.addEventListener("click", function () {
//         event.preventDefault();
//         var activeTab = modalAuth.querySelector(".tab-nav a.active");
//         activeTab.classList.remove("active");
//         this.classList.add("active");

//         var className = this.getAttribute("href").slice(1); // Lấy phần tên class bỏ dấu "."
//         var tabPanel = modalAuth.querySelector(
//             ".tab-content .tab-panel." + className
//         );

//         var tabPanelActive = modalAuth.querySelector(
//             ".tab-content .tab-panel.active"
//         );

//         tabPanelActive.classList.remove("active");
//         tabPanel.classList.add("active");
//     });
// });
