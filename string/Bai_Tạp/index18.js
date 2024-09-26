// var content = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima inventore adipisci saepe esse, ipsum officiis praesentium facilis dolor.`;

// content = content.replaceAll(" ", "</span> <span>");

// content = `<span>${content}</span>`;

// // console.log(content);

// var index = 0;

// setInterval(function () {
//     var char = content.charAt(index);
//     // console.log(char, index);
//     var charNext = content.charAt(index + 1);
//     // console.log(charNext, index);

//     if (char === ">" && charNext !== " ") {
//         var html =
//             content.slice(0, index) +
//             ` class="hightlight"` +
//             content.slice(index);

//         document.body.innerHTML = html;
//     }
//     index++;

//     if (index === content.length) {
//         index = 0;
//     }
// }, 10);

// document.write(content);

var lyrics = `Thấp thoáng ánh mắt đôi môi mang theo hương mê say
Em cho anh tan trong miên man quên luôn đi đêm ngày
Chạm nhẹ vội vàng hai ba giây nhưng con tim đâu hay
Bối rối khẽ lên ngôi yêu thương đong đầy thật đầy
Anh ngẩn ngơ cứ ngỡ
Đó chỉ là giấc mơ
Như đang ngất ngây trong giấc mơ
Thật ngọt ngào êm dịu đắm chìm phút chốc viết tương tư gieo nên thơ

`;

lyrics = lyrics.replaceAll(" ", "</span> <span>");

lyrics = `<span>${lyrics}</span>`;

var index = 0;

setInterval(function () {
    var char = lyrics.charAt(index);
    // console.log(char);
    var charNext = lyrics.charAt(index + 1);
    // console.log(charNext);

    if (char === ">" && charNext !== " ") {
        var html =
            lyrics.slice(0, index) +
            ` class="hightlight"` +
            lyrics.slice(index);
        console.log(
            "***********************Câu thơ tiếp theo*********************"
        );

        // console.log(lyrics.slice(0, index));

        document.body.innerHTML = html;

        console.log(html);
    }

    index++;

    if (index === lyrics.length) {
        index = 0;
    }
}, 10);

document.write(lyrics);
