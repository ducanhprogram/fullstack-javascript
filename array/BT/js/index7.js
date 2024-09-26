var posts = [
    {
        title: "Tiêu đề bài viết 1",
        content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
        img: "./img/25-5000x3333.jpg",
    },

    {
        title: "Tiêu đề bài viết 3",
        content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
        img: "./img/25-5000x3333.jpg",
    },
    {
        title: "Tiêu đề bài viết 2",
        content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
        img: "./img/25-5000x3333.jpg",
    },
];

var html = `<div class="container">
    ${posts
        .map(function (post, index) {
            return `<div class="item ${index % 2 !== 0 ? "right" : ""}">
        <img src="${post.img}" />

        <div class="content">
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        </div>
        </div>`;
        })
        .join()}
</div>`;

document.write(html);
// var html = `<div class="container">
// ${posts.map(function (post, index) {
//     return `<div class="item ${index % 2 !== 0 ? "right" : " "}">
//     <img src=${post.img} />

//     <div>
//     <h2>${post.content}</h2>
//     <p>${post.content}</p>
//     </div>
//     </div>`;
// })}
//     </div>`;

// document.write(html);
