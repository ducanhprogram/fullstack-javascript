// var str =
//     "Lorem Ipsum is simply dummy text of the printing and typessting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

// var str =
//     "Lorem Ipsum is simply dummy text of the printing and typessting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

var str =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
var currentPosition = 0; //Vị trí

function updateText() {
    var nextSpace = str.indexOf(" ", currentPosition + 1); // Tìm vị trí khoảng trắng tiếp theo để xác định từ\
    console.log(nextSpace);
    if (nextSpace === -1) {
        nextSpace = str.length;
    } // Nếu không tìm thấy, đặt là cuối chuỗi

    // Tạo đoạn văn với từ hiện tại được tô màu đỏ
    var textBefore = str.slice(0, currentPosition); // (0, 0) (hiện tại)
    console.log(textBefore);
    var currentWord = str.slice(currentPosition, nextSpace); // Từ tiếp theo (0, 5)
    console.log(currentWord);
    console.log("----");
    var textAfter = str.slice(nextSpace);
    console.log(textAfter);
    var displayText = `${textBefore}<span style="color: red;">${currentWord}</span>${textAfter}`;
    console.log(displayText);

    // Cập nhật nội dung trang web
    document.body.innerHTML = displayText;

    currentPosition = nextSpace + 1; // Cập nhật vị trí cho lần tiếp theo
    if (currentPosition >= str.length) {
        currentPosition = 0; // Quay lại từ đầu nếu đã đến cuối chuỗi
    }
}

// Cài đặt hàm updateText để chạy mỗi 500ms
setInterval(updateText, 200);

var fullName = "Lê Đức Anh";
console.log(fullName.indexOf(" ", 3));
