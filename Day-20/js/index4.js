var articles = [
    [
        "Tiêu đề bài viết 1",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
        "https://picsum.photos/id/237/200/300",
    ],
    [
        "Tiêu đề bài viết 2",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
        "https://picsum.photos/id/238/200/300",
    ],
    [
        "Tiêu đề bài viết 3",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
        "https://picsum.photos/id/239/200/300",
    ],
];

function createArticleHtml(articleData) {
    return `
      <div class="article clearfix">
        <img src="${articleData[2]}" alt="Article Image">
        <div class="article-content">
          <h2>${articleData[0]}</h2>
          <p>${articleData[1]}</p>
        </div>
      </div>
    `;
}

function displayArticles(articlesArray) {
    var articlesContainer = document.getElementById("articles-container");
    articlesContainer.innerHTML = articlesArray.map(createArticleHtml).join("");
}

document.addEventListener("DOMContentLoaded", function () {
    displayArticles(articles);
});
