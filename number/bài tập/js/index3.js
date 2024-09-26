// var categories = [
//     {
//         id: 1,
//         name: "Chuyên mục 1",
//         parent: 0,
//     },
//     {
//         id: 2,
//         name: "Chuyên mục 2",
//         parent: 0,
//     },
//     {
//         id: 3,
//         name: "Chuyên mục 3",
//         parent: 0,
//     },
//     {
//         id: 4,
//         name: "Chuyên mục 2.1",
//         parent: 2,
//     },
//     {
//         id: 5,
//         name: "Chuyên mục 2.2",
//         parent: 2,
//     },
//     {
//         id: 6,
//         name: "Chuyên mục 2.3",
//         parent: 2,
//     },
//     {
//         id: 7,
//         name: "Chuyên mục 3.1",
//         parent: 3,
//     },
//     {
//         id: 8,
//         name: "Chuyên mục 3.2",
//         parent: 3,
//     },
//     {
//         id: 9,
//         name: "Chuyên mục 3.3",
//         parent: 3,
//     },
//     {
//         id: 10,
//         name: "Chuyên mục 2.2.1",
//         parent: 5,
//     },
//     {
//         id: 11,
//         name: "Chuyên mục 2.2.2",
//         parent: 5,
//     },

//     // {
//     //     id: 12,
//     //     name: "Chuyên mục 1.1",
//     //     parent: 1,
//     // },
// ];

// var getCategories = function (categories, parent = 0) {
//     var result = [];
//     if (categories.length) {
//         categories.forEach(function (category, index) {
//             console.log(category.parent);
//             console.log(category);
//             if (category.parent === parent) {
//                 console.log(category.parent, parent);
//                 console.log(category.parent, category.id);
//                 var children = getCategories(categories, category.id);

//                 // console.log(children);

//                 if (children.length) {
//                     category.children = children;
//                 }

//                 // console.log(result);
//                 result[category.id] = category;
//                 console.log(category.id, category);
//             }
//         });
//     }

//     result = result.filter(function (item) {
//         return item !== undefined;
//     });
//     return result;
// };

// var tree = getCategories(categories);
// console.log(tree);

var categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
        parent: 0,
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        parent: 0,
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        parent: 0,
    },
    {
        id: 4,
        name: "Chuyên mục 2.1",
        parent: 2,
    },
    {
        id: 5,
        name: "Chuyên mục 2.2",
        parent: 2,
    },
    {
        id: 6,
        name: "Chuyên mục 2.3",
        parent: 2,
    },
    {
        id: 7,
        name: "Chuyên mục 3.1",
        parent: 3,
    },
    {
        id: 8,
        name: "Chuyên mục 3.2",
        parent: 3,
    },
    {
        id: 9,
        name: "Chuyên mục 3.3",
        parent: 3,
    },
    {
        id: 10,
        name: "Chuyên mục 2.2.1",
        parent: 5,
    },
    {
        id: 11,
        name: "Chuyên mục 2.2.2",
        parent: 5,
    },
];

var getCategories = function (categories, parent = 0) {
    var result = [];
    console.log(categories);

    if (categories.length) {
        categories.forEach(function (category) {
            if (category.parent === parent) {
                var children = getCategories(categories, category.id);

                if (children.length) {
                    category.children = children;
                }
                result[category.id] = category;
            }
        });
    }
    result = result.filter(function (item) {
        return item !== undefined;
    });
    return result;
};

var tree = getCategories(categories);
console.log(tree);
