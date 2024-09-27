var ul = document.querySelector("ul");
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    var x = e.clientX;
    var y = e.clientY;

    ul.style.display = "block";
    // ul.style.top = `${x}px`;
    // ul.style.left = `${y}px`;
    ul.style.transform = `translate(${x}px, ${y}px)`;
});

// document.addEventListener("click", function (e) {
//     console.log(e.target);
//     if (!ul.contains(e.target)) {
//         ul.style.display = "none";
//     }
// });

document.addEventListener("mousedown", function () {
    ul.style.display = "none";
});

ul.addEventListener("mousedown", function (e) {
    e.stopPropagation();
});

var h1 = document.querySelector("h1");

var span = document.querySelector("span");

var head = document.querySelector(".head");

var head1 = document.querySelector(".head1");

h1.addEventListener("click", function () {
    if (head.contains(head1)) {
        console.log("true");
    }
});
