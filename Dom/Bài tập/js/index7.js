var title = document.querySelector(".title");

var form = document.querySelector(".formLogin");

var username = form.username;

console.log(username);

var password = form.password;

console.log(password);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var checkLogin = username.value === "admin" && password.value === "admin";

    if (checkLogin) {
        title.innerText = "Login successful";
    } else {
        alert('did you mean "admin"?');
        title.innerText = "Login Failed";
    }
    username.focus();
    username.value = " ";
    password.value = " ";
    form.reset();
});
