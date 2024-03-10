for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        var sum = i * j;
        var tableCell = document.createElement("div");
        tableCell.className = "cell";
        tableCell.textContent = `${i} * ${j} = ${sum}`;
        document.querySelector(".multiplication-table").appendChild(tableCell);
    }
}
