//Highlight từ khóa trong 1 đoạn văn (Ctrl + F)

// var keyword = "lorem";

// var content = `ABC 123 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere enim at scelerisque aliquam. Nulla diam dui, interdum ac ex vel, ultricies faucibus diam. Proin tincidunt viverra lorem, id bibendum ante tempus eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer aliquam, tellus eget volutpat scelerisque, est lorem accumsan metus, convallis ultricies leo sem sed turpis. Quisque lobortis sapien sed felis interdum iaculis. Fusce a odio auctor, sollicitudin nulla eget, placerat mauris. Mauris laoreet laoreet ligula, semper rhoncus risus vestibulum pharetra. Aliquam non ligula vitae arcu cursus ultricies. Nulla finibus magna non blandit vehicula. In cursus erat justo. Suspendisse finibus eget leo vel finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer ex felis, bibendum et ornare ac, scelerisque sit amet ante.

// There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
// `;

// /*
// Nguyên tắc:
// - Không được thay đổi chuỗi ban đầu
// - Không nên sử dụng inline css
// - Tìm từng đoạn --> Cắt bỏ  --> Lưu chuỗi mới
// --> Tìm lại ở đoạn mới

// */

// var output = "";

// var position = content.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase());

// // console.log(position);

// var count = 0;
// while (position !== -1) {
//     count++;
//     output +=
//         content.slice(0, position) +
//         `<span>${content.slice(position, position + keyword.length)}</span>`;

//     content = content.slice(position + keyword.length);
//     console.log(position);
//     console.log(content);

//     position = content.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase());
// }

// output += content;
// var html = `<p>Tìm kiếm từ khóa <b> ${keyword}</b></p>
// <p>${output}</p>
// <p>Đã tìm thấy ${count} kết quả với từ khóa <b>${keyword}</b></p>`;

// document.write(html);

// var noidung = ` ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere enim at scelerisque aliquam. Nulla diam dui, interdum ac ex vel, ultricies faucibus diam. Proin tincidunt viverra lorem, id bibendum ante tempus eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer aliquam, tellus eget volutpat scelerisque, est lorem accumsan metus, convallis ultricies leo sem sed turpis. Quisque lobortis sapien sed felis interdum iaculis. Fusce a odio auctor, sollicitudin nulla eget, placerat mauris. Mauris laoreet laoreet ligula, semper rhoncus risus vestibulum pharetra. Aliquam non ligula vitae arcu cursus ultricies. Nulla finibus magna non blandit vehicula. In cursus erat justo. Suspendisse finibus eget leo vel finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer ex felis, bibendum et ornare ac, scelerisque sit amet ante.

// There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`;

// console.log(noidung.indexOf("lorem"));

// var keyword = "sống";
// var count = 0;
// var output = " ";

// var text = `Lẽ sống tình đời sống khắp nơi
// Sống đời có ích tệ sống chơi
// Ai làm trăm sự cho ta sống
// Cớ sao tham sống chỉ hại đời
// Lẽ sống tình đời sống khắp nơi
// Sống đẹp xem ai quyết xây đời
// Tự tránh xa hoa nơi đàng điếm
// Trần thế không nên sống ham chơi
// Vui sao sống đẹp mãi sáng ngời
// Ghi dấu sáng danh nghĩa tình đời
// Nhân văn ghi chép thiên niên kỷ
// Nghĩa tình cao cả với con người.`;

// var position = text.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase());

// console.log(position);

// while (position !== -1) {
//     count++;
//     output +=
//         text.slice(0, position) +
//         `<span>${text.slice(position, position + keyword.length)}</span>`;

//     console.log(output);

//     text = text.slice(position + keyword.length);

//     position = text.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase());
// }

// output += text;
// var html = `<p>Tìm từ khóa <b> ${keyword} </b></p>
// <p>${output}</p>
// <p>Đã tìm thấy ${count} kết quả với từ khóa <b>${keyword}</b></p>`;

// document.write(html);

var content = `Niềm vui tinh thần có vô vàn cách để vui vẻ, bạn bè cũng không phải đến với nhau vì tiền bạc. Kiến thức trên đời cũng không phải tốn kém để được học.Để an vui cũng không cần quá nhiều tiền để có thể hạnh phúc. Để tồn tại, để mạnh khỏe và vui vẻ, về bản chất không cần quá nhiều của cải. Ngược lại, tạo ra quá nhiều vật chất sẽ sinh ra lo âu, bệnh tật và tai họa. Mục đích của cuộc sống này không phải đến đây để chúng ta hơn thua với ai, chưng diện cho những người xa lạ ngưỡng mộ, chúng ta đến đây để vui vẻ, để sống một cuộc sống có ích và giác ngộ. Cuộc đời mà bạn đang sống, bạn gọi là cuộc vui, cuộc chơi hay là cuộc đua?

`;

var keyword = "vui";

var count = 0;

var output = " ";

var position = content.toLocaleLowerCase().indexOf(keyword);

console.log(position);

while (position !== -1) {
    count++;

    output +=
        content.slice(0, position) +
        `<span>${content.slice(position, position + keyword.length)}</span>`;

    content = content.slice(position + keyword.length);

    position = content.toLocaleLowerCase().indexOf(keyword);
}

output += content;

var html = `<p>Tìm từ khóa <b> ${keyword} </b></p>
<p>${output}</p>
<P>Đã tìm thấy ${count} kết quả với từ khó <b>${keyword}</b></P>`;

document.write(html);
