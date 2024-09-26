// var ul = document.querySelector("#productList");
// var li = ul.querySelectorAll("li");

// console.log(li);

// // for (var i = 0; i < li.length; i++) {
// //     li[i].addEventListener("click", function () {
// //         this.dataset.selected = "true";
// //     });
// // }

// li.forEach(function (item) {
//     item.addEventListener("click", function () {
//         li.forEach(function (el) {
//             el.dataset.selected = "false";
//         });
//         this.dataset.selected = "true";
//     });
// });

// var input = document.querySelector("#agreeCheckbox");

// var button = document.querySelector("#submitButton");

// input.addEventListener("click", function () {
//     if (input.checked) {
//         button.removeAttribute("disabled");
//     } else {
//         button.setAttribute("disabled", "true");
//     }
// });

// var input = document.querySelector("#searchInput");

// var li = document.querySelectorAll("#itemList li");

// function filterList() {
//     var inputName = input.value.toLocaleLowerCase();

//     li.forEach(function (el) {
//         console.log(el);
//         var name = el.dataset.name.toLocaleLowerCase();
//         if (name.includes(inputName)) {
//             el.classList.remove("hidden");
//         } else {
//             el.classList.add("hidden");
//         }
//     });
// }

// input.addEventListener("input", filterList);

var input = document.querySelector("#agreeCheckbox");

var button = document.querySelector("#submitButton");

input.addEventListener("click", function () {
    console.log(input.checked);
    if (input.checked) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", "true");
    }
});
