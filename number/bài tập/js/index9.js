var products = [
    {
        id: 1,
        name: "Sản phẩm 1",
        price: 1000,
    },
    {
        id: 2,
        name: "Sản phẩm 2",
        price: 2000,
        variants: [
            {
                id: 3,
                name: "Biến thể 2.1",
                price: 1500,
            },
            {
                id: 4,
                name: "Biến thể 2.2",
                price: 1800,
                variants: [
                    {
                        id: 5,
                        name: "Biến thể 2.2.1",
                        price: 1600,
                    },
                    {
                        id: 6,
                        name: "Biến thể 2.2.2",
                        price: 1700,
                    },
                ],
            },
        ],
    },
    {
        id: 7,
        name: "Sản phẩm 3",
        price: 3000,
    },
];

function generateTable(products, level = 0) {
    console.log(products);
    var prefix = "--|".repeat(level);
    var html = " ";

    products.forEach(function (product) {
        console.log(product);
        html += `<tr>
        <td>${product.id}</td>
        <td> ${prefix} ${product.name} </td>
        <td>${product.price}</td>
        </tr>`;

        if (product.variants) {
            html += generateTable(product.variants, level + 1);
        }

        console.log(html);
    });

    return html;
}

var result = `<table border="1" style="width: 100%">
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>

        </tr>
        ${generateTable(products)}
            </table>`;

document.body.innerHTML = result;
