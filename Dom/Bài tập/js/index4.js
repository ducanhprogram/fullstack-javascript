// var userList = document.querySelectorAll("#userList");
var users = document.querySelectorAll(".user");

users.forEach(function (user) {
    user.addEventListener("click", function () {
        // console.log(this);

        var isActive = this.dataset.active === "true";

        console.log(typeof isActive);
        this.dataset.active = !isActive;

        if (isActive) {
            this.classList.remove("active");
            this.classList.add("inactive");
        } else {
            this.classList.remove("inactive");
            this.classList.add("active");
        }
    });

    if (user.dataset.active === "true") {
        user.classList.add("active");
    } else {
        user.classList.add("inactive");
    }
});
