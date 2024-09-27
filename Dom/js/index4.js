var content = document.querySelector(".content");

// content.style = "color: red; font-style: italic";

// content.style.color = "red";
// content.style.fontStyle = "italic";
// content.style.backgroundColor = "grey";

// content.style.color = null;

// var css = {
//     color: "red",
//     fontStyle: "italic",
//     fontWeight: "bold",
//     backgroundImage: `url("https://picsum.photos/200/300")`,
// };

// Object.assign(content.style, css);

// content.style = null;

var para = document.querySelector(".para");

var btnOut = document.querySelector(".btn-out");

var btnIn = document.querySelector(".btn-in");

// var duration = para.getAttribute("data-duration");
var duration = para.dataset.duration;

var animationStatus = false;

if (para.dataset.animation === "true" || para.dataset.animation === "false") {
    animationStatus = para.dataset.animation === "true";
}

console.log(animationStatus);

console.log(duration);
// var css = {
//     transition: `opacity ${duration}s linear`,
//     visibility: "hidden",
//     opacity: 0,
// };

// var cssPresent = {
//     transition: `opacity ${duration}s linear`,
//     visibility: "visible",
//     opacity: 1,
// };

para.style.transition = `opacity ${duration}ms linear`;

btnOut.addEventListener("click", function () {
    if (animationStatus) {
        para.style.opacity = 0;
        setTimeout(function () {
            para.style.display = "none";
        }, duration);
        // return;
        para.style.display = "none";
    }
});

btnIn.addEventListener("click", function () {
    para.style.display = null;
    if (animationStatus) {
        setTimeout(function () {
            para.style.opacity = 1;
        }, duration / 2);
    }
});
