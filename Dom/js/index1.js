// Gán Event vào thẻ html

// var btn = document.querySelector(".btn");

//element.onTenEvent = function (){}

// btn.onclick = function () {
//     console.log("Hello");
// };

// btn.onmouseover = function () {
//     console.log("Hover In");
// };

// btn.onmouseout = function () {
//     console.log("Hover out");
// };

// btn.addEventListener("click", function () {
//     console.log("hello");
// });

// var handleClick = function () {
//     console.log("click");
// };

// btn.addEventListener("click", handleClick);

//Khi người dùng tác động vào thẻ html --> js lắng nghe sự kiện từ phía người dùng   --> Nếu sự kiện đó đã được thêm thì sẽ được thi function

// btn.addEventListener("click", function () {
//     console.log("Click 1");
// });

// btn.addEventListener("click", function () {
//     console.log("Click 2");
// });

// var btnRemove = document.querySelector(".btn-remove");

// var count = 0;

// var handleClick = function () {
//     console.log(++count);

//     console.log(this);
//     if (count === 5) {
//         btn.removeEventListener("click", handleClick);
//     }
// };

// btn.addEventListener("click", handleClick);

// btnRemove.addEventListener("click", function () {
//     console.log(this);
//     btn.removeEventListener("click", handleClick);
// });

var btn = document.querySelector(".btn");

var btnRemove = document.querySelector(".btn-remove");

var handleClick = function () {
    console.log(this);
};

btn.addEventListener("click", handleClick);

btnRemove.addEventListener("click", function () {
    console.log(this);
    btn.removeEventListener("click", handleClick);
});

var li = document.querySelectorAll("ul li");

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
        console.log(this);
    });
}

li.forEach(function (item) {
    item.addEventListener("click", function () {
        console.log(item);
    });
});
