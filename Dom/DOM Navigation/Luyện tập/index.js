var items = document.querySelectorAll(".menu > li > a");

if (items.length) {
    items.forEach(function (item) {
        var subMenu = item.nextElementSibling;
        console.log(subMenu);

        if (subMenu) {
            item.parentElement.classList.add("has-child");
        }
        // var subMenu = item.parentElement.classList.add("has-child");

        item.addEventListener("click", function (e) {
            var subMenu = this.nextElementSibling;

            // console.log(subMenu);

            console.log(this);

            if (subMenu) {
                e.preventDefault();

                var subMenuActive = document.querySelector(".menu ul.open");
                console.log(subMenuActive);

                subMenu.classList.toggle("open");
                this.parentElement.classList.toggle("open");
                if (subMenuActive) {
                    subMenuActive.classList.remove("open");
                    subMenuActive.parentElement.classList.remove("open");
                }
            }
        });
    });
}
