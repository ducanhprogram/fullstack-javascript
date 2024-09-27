//Menu vertical
var items = document.querySelectorAll(".menu > li > a");

// console.log(items);

if (items.length) {
    items.forEach(function (item) {
        var subMenu = item.nextElementSibling;
        console.log(subMenu);

        if (subMenu) {
            item.parentElement.classList.add("has-children");
        }
        item.addEventListener("click", function (e) {
            //Chọn thẻ ul năm trong thẻ li tương ứng với thẻ a vừa click vào
            var subMenu = this.nextElementSibling;

            if (subMenu) {
                //NGăn hành động mặc định của thẻ a
                e.preventDefault();

                //Chọn element đang active
                var subMenuActive = document.querySelector(".menu ul.open");
                // Thêm class open vào subMenu nếu chưa có, xóa đi nếu đã có
                subMenu.classList.toggle("open");
                console.log(subMenu);
                console.log(subMenuActive);

                this.parentElement.classList.toggle("open");
                if (subMenuActive) {
                    subMenuActive.classList.remove("open");
                    subMenuActive.parentElement.classList.remove("open");
                }

                //xử lý xoay mũi thên
            }
        });
    });
}
