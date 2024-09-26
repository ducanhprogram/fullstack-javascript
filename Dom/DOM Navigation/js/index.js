//DOM Navigation

//-parentElement   --> Trả về 1 element
//- children  --> Trả về 1 danh sách
// -nextElementSibling   --> Element kế tiếp
// - previousElementSibling   --> Element phía trước

//Node và Element Node?

// var btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//     console.log(this);
//     console.log(this.parentElement.parentElement);
// });

// var menu = document.querySelector(".menu");
// console.log(menu.children[1].children[0].children[1].innerText);

// console.log(menu.children[1].innerText);

var menuItems = document.querySelectorAll(".menu > li");

// menuItems.forEach(function (menuItem) {
//     menuItem.addEventListener("click", function () {
//         console.log(typeof this.children);
//         // this.style.color = "red";
//         if (this.children.length) {
//             return (this.style.color = "green");
//         }

//         this.style.color = "red";
//     });
// });

menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
        // if (this.nextElementSibling !== null) {
        //     this.nextElementSibling.style.color = "red";
        //     return;
        // }
        // alert("Còn gì nữa đâu");

        if (this.previousElementSibling) {
            this.previousElementSibling.style.color = "red";
            return;
        }
    });
});
