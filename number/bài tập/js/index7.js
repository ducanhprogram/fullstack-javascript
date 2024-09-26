var categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        children: [
            {
                id: 4,
                name: "Chuyên mục 2.1",
            },
            {
                id: 5,
                name: "Chuyên mục 2.2",
                children: [
                    {
                        id: 10,
                        name: "Chuyên mục 2.2.1",
                    },
                    {
                        id: 11,
                        name: "Chuyên mục 2.2.2",
                    },
                    {
                        id: 12,
                        name: "Chuyên mục 2.2.3",
                    },
                ],
            },
            {
                id: 6,
                name: "Chuyên mục 2.3",
            },
        ],
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        children: [
            {
                id: 7,
                name: "Chuyên mục 3.1",
            },
            {
                id: 8,
                name: "Chuyên mục 3.2",
            },
            {
                id: 9,
                name: "Chuyên mục 3.3",
            },
        ],
    },
];

function generateOptions(categories, level = 0) {
    var html = " ";
    var prefix = "--|".repeat(level);
    // console.log("level", level);

    categories.forEach(function (category) {
        console.log("level", level);
        console.log(category.id);
        console.log(category);

        html += `<option value="${category.id}">${prefix}${category.name}</option>`;

        console.log("category.children", category.children);
        if (category.children) {
            html += generateOptions(category.children, level + 1);
        }
    });
    return html;
}

var result = generateOptions(categories);

result = `<select><option value="0">Chọn chuyên mục</option>${result}</select>`;

console.log(result);
document.body.innerHTML = result;

var a = "F8";
console.log(a.repeat(1));
