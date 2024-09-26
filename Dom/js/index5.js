//Event Object
// var btn = document.querySelector(".btn");

// var css = {
//     display: "block",
//     margin: "30px auto",
// };

// for (var property in css) {
//     // console.log(property);
//     btn.style[property] = css[property];
// }

//this: element gán sự kiện
//e (event object)
// btn.addEventListener("click", function (e) {
//     console.log(this);
//     console.log(e.target);
// });

// var items = document.querySelectorAll("ul li");

// items.forEach(function (item) {
//     item.addEventListener("click", function () {
//         console.log(this);
//     });
// });

// var ul = document.querySelector("ul");
// ul.addEventListener("click", function (e) {
//     console.log(e.target);
// });

var btn = document.querySelector(".btn");

var flag = false;

var bodyWidth = document.body.clientWidth;
console.log(bodyWidth);

btn.addEventListener("mousedown", function (e) {
    flag = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
});

document.addEventListener("mousemove", function (e) {
    if (e.which === 1) {
        if (flag) {
            btn.style.transform = `translate(${e.clientX - offsetX}px, ${
                e.clientY - offsetY
            }px)`;
        }

        // if (e.clientX >= bodyWidth / 2) {
        //     document.body.style.backgroundColor = "red";
        // } else {
        //     document.body.style.backgroundColor = null;
        // }
    }
});

document.addEventListener("mouseup", function () {
    flag = false;
});

var menu = document.querySelector("ul");

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();

    var x = e.clientX;
    var y = e.clientY;

    menu.style.display = "block";
    menu.style.top = `${y}px`;
    menu.style.left = `${x}px`;
});

document.addEventListener("mousedown", function () {
    menu.style.display = "none";
});

menu.addEventListener("mousedown", function (e) {
    e.stopPropagation();
});
