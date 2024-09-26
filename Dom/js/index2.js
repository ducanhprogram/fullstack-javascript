// var input = document.querySelector("input");
// input.addEventListener("focus", function (e) {
//     console.log("Focus");
// });

// input.addEventListener("blur", function (e) {
//     console.log("Blur");
// });

//DOM HTML

// var content = document.querySelector(".content");
// //1. innerHTML
// console.log(content.innerHTML);

// content.innerHTML = `<h1>Học lập trình tại F8</h1>`;

//2. innerText
// console.log(content.innerText);

//3. textContent

// console.log(content.textContent);

// console.log(content.innerHTML);

// let div = document.querySelector(".content");
// console.log(div.innerHTML);
// // Kết quả: '<h2>Học lập trình không khó</h2><p>...'

// div.innerHTML = "<h2>Chào mừng bạn đến với JavaScript</h2>";
// // Nội dung bên trong .content sẽ được thay đổi thành tiêu đề mới

// content.textContent = `A
// B
// C`;

// console.log(result);

//4. outerHTML

// content.outerHTML = `<h1>Hello F8</h1>`;

// console.log(content.outerHTML);

// content.outerHTML = `<div class="content">Học lập trình không khó</div>`;

// content = document.querySelector(".content");

// console.log(content.outerHTML);

//5. outerText

// console.log(content.outerText);

// content.outerText = `<h1>Học lập trình tại F8</h1>`;

// content.outerHTML = `<h1>Học lập trình tại F8</h1>`;

// console.log(content.outerHTML);

var content = document.querySelector(".content");
var btn = document.querySelector(".btn");

var contentHTML = content.innerHTML;

console.log(contentHTML);

btn.addEventListener("click", function () {
    console.log(this);

    if (content.innerHTML) {
        content.innerHTML = "";
        btn.innerText = "Hiện";
        console.log(this.innerText);
    } else {
        content.innerHTML = contentHTML;
        btn.innerText = "Ẩn";
    }
});

var btnMinus = document.querySelector(".minus");
var btnPlus = document.querySelector(".plus"); //Cộng
var count = document.querySelector(".counter");

btnMinus.addEventListener("click", function () {
    count.innerText--;
});

btnPlus.addEventListener("click", function () {
    count.innerText++;
});

//Xóa thẻ html: element.remove()
content.remove();
