var menu = document.querySelector(".menu");

var lists = document.querySelectorAll(".menu > li > a");

if (lists.length) {
    lists.forEach(function (list) {
        var subMenu = list.nextElementSibling;

        if (subMenu) {
            subMenu.parentElement.classList.add("has-children");
        }
        list.addEventListener("click", function (e) {
            e.preventDefault();

            var subMenu = this.nextElementSibling;

            if (subMenu) {
                var menuActive = document.querySelector(".menu ul.open");
                console.log(menuActive);
                subMenu.classList.toggle("open");

                this.parentElement.classList.add("open");

                if (menuActive) {
                    menuActive.classList.remove("open");
                    menuActive.parentElement.classList.remove("open");
                }
            }
        });
    });
}
