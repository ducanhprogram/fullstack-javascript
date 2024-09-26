// var n = +prompt("Nhập giá trị số n: ");

// var total = 0;
// var bieuThuc = 0;
// for (var i = 1; i <= n; i++) {
//     bieuThuc = i * (i + 1);
//     total += bieuThuc;
// }

// console.log(` Biểu thức của ${n} là ${total}`);

document.write("<table>");

for (var row = 0; row < 8; row++) {
    document.write("<tr>");
    for (var col = 0; col < 8; col++) {
        var color = (row + col) % 2 === 0 ? "white" : "black";
        document.write('<td class="' + color + '"></td>');
    }
    document.write("</tr>");
}

document.write("</table>");
