// var text = document.querySelector(".text");

// var toggleButton = document.querySelector(".toggleButton");

// toggleButton.addEventListener("click", function () {
//     text.classList.toggle("highlight");
// });

var button = document.querySelector(".toggleButton");
console.log(button.classList.contains("on"));

button.addEventListener("click", function () {
    if (button.classList.contains("on")) {
        button.classList.remove("on");
        button.classList.add("off");
        button.innerText = "Tắt";
    } else {
        button.classList.remove("off");
        button.classList.add("on");
        button.innerText = "Bật";
    }
});
