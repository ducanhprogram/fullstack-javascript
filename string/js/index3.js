var fullName = "tạ hoàng an";
// Chuyển ký tự đầu tiên của mỗi từ thành chữ HOA

fullName = fullName.trim();

fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);

for (var i = 0; i < fullName.length; i++) {
    var char = fullName.charAt(i);
    var charNext = fullName.charAt(i + 1);
    // console.log(char);
    // console.log(charNext);

    if (char === " " && charNext !== " ") {
        var position = i + 1;
        console.log(charNext, position);
        fullName =
            fullName.slice(0, position) +
            fullName.charAt(position).toUpperCase() +
            fullName.slice(position + 1);
        console.log(fullName);
    }
}
console.log(fullName);
