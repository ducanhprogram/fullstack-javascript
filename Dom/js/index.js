//DOM - Document Object Model

//Trình duyệt mô hình hóa HTML thành đối tượng để dễ dàng thao tác chỉnh sửa trước khi hiển thị cho người dùng

/*

Element (Tag)   --> Object
    - Text --> Object
    - Attribute  --> Object


Các loại DOM
1. DOM Element
2. DOM HTML
3. DOM CSS
4. DOM Event
5. DOM Event Listener
6. DOM Navigation
7. DM Nodes

Muốn thao tác được với DOM   --> Có node Element (Object)


DOM Element: Truy cập vào các thẻ html  ---> Tạo ra Node ( 5 cách)

- document.getElementById(id)  --> Trả về 1 element đầu tiên 
- document.getElementsByClassName(class)  ---> Trả về danh sách 
- document.getElementsByTagName (tag)   ---> Trả về danh sách
- document.querySelector(selector)   --> Trả về element đầu tiên
- document.querySelectorAll(selector)  --> Trả về danh sách
*/

var title = document.getElementById("title");

// console.log(title);

var titleList = document.getElementsByClassName("title");

// console.dir(titleList);
// console.log(titleList[0].innerText);

var titleTagName = document.getElementsByTagName("h3");
// console.log(titleTagName);

var title = document.querySelectorAll(".title");

// console.log(title);

// var btn = document.querySelector(".content .btn");

// console.log(btn);

var content = document.querySelector(".content");

var btn = content.querySelector(".btn");

console.log(btn);

//Ngoại lệ: head, body

var head = document.head;
console.log(head);

var body = document.body;
console.log(body);

//Ngoại lệ: form

// var input = document.form_login.fullname;
// console.log(input);

// var submitBtn = document.form_login.submit;

// console.log(submitBtn);

var input = document.form_login.fullname;
if (input) {
    input.value = "Hello F8";
}

console.log(input);

//Lưu ý: Khi chọn element để thao tác DOM  --> Kiểm tra element có tồn tại không
/*
1. Nếu element là 1 phần tử  --> Kiểm tra khác null và underfined

2. Nếu element là 1 danh sách  --> Kiểm tra length > 0

*/
