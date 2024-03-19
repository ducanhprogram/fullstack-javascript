let content =
    "Một con vịt xòe ra hai cái cánh, nó kêu rằng quác quác quác quạc quạc quạc";

content = content.replaceAll(" ", "</span> <span>");
content = `<span>${content}</span>`;
console.log(content);
let index = 0;

setInterval(() => {
    let firstChar = content.charAt(i);
    let nextChar = content.charAt(i + 1);
    let html = "";
    if (firstChar === ">" && nextChar !== " ") {
        html = content.slice(0, i) + ` class="red"` + content.slice(i);
        document.body.innerHTML = html;
    }
    if (i === content.length) {
        i = 0;
    } else {
        i++;
    }
    i;
}, 50);
