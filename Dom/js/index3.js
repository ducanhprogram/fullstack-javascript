//Thuộc tính
//Cú pháp: element.tenthuoctinh
var a = document.querySelector("a");

// console.log(a.href);
// console.log(a.title);
// console.log(a.target);

// console.log(a.id);
// console.log(a.className);

a.href = "https://google.com";
a.title = "Google";
a.rel = "nofollow";
a.className = "hello-123";

// var input = document.querySelector("input");

// input.value = "leducanhled@gmail.com";

// console.log(input.value);

// console.dir(a);
// var attributes = a.attributes;

// for (var index = 0; index < attributes.length; index++) {
//     console.log(attributes[index].nodeName, attributes[index].nodeValue);
// }

//Data Attribute:
/*
- Thuộc tính tự tạo, chỉ phục vụ để xử lý js
- Cú pháp: data-(*)

*/

var boxEl = document.querySelector(".box");

console.dir(boxEl);

console.log(boxEl.getAttribute("data-count"));

boxEl.setAttribute("data-count", "abc");

boxEl.setAttribute("data-index", "ahihi");

// boxEl.removeAttribute("data-count");

a.removeAttribute("href");

//Dataset

//Truy cập vào thuộc tính data-index
console.log(boxEl.dataset.index);

//Truy cập vào thuộc tính data-count
console.log(boxEl.dataset.count);

boxEl.dataset.index = "123";

//Thêm thuộc tính data-name

boxEl.dataset.name = "content";
// boxEl.setAttribute("data-name", "content");

//Thêm thuộc tính data-animation-duration
boxEl.dataset.animationDuration = "2s";

boxEl.classList.add("leducanhled@gmail.com");

boxEl.dataset.age = "12";

// boxEl.setAttribute("data-first-name", "Đức Anh");

//ClassList

console.log(boxEl.className);

console.log(boxEl.classList);

boxEl.classList.add("box-3", "box-4", "box-5");

boxEl.classList.remove("box-1", "box-2");

//Kiểm tra có không
console.log(boxEl.classList.contains("box"));

boxEl.classList.replace("box-5", "box-6");

boxEl.classList.toggle("box");
