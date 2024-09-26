var sourceList = document.getElementById("sourceList");
var targetList = document.getElementById("targetList");
var draggedItem = null; // Item hiện tại đang được kéo

// Bắt đầu kéo
sourceList.addEventListener("dragstart", function (e) {
    draggedItem = e.target;
    e.target.classList.add("dragging");
});

// Khi kết thúc kéo
sourceList.addEventListener("dragend", function (e) {
    e.target.classList.remove("dragging");
    draggedItem = null;
});

// Cho phép thả (bắt buộc phải có để thả được)
targetList.addEventListener("dragover", function (e) {
    e.preventDefault();
});

// Xử lý khi thả vào targetList
targetList.addEventListener("drop", function (e) {
    e.preventDefault();
    if (draggedItem) {
        targetList.appendChild(draggedItem);
        draggedItem = null;
    }
});

// Cho phép kéo thả giữa hai danh sách (cả kéo từ targetList trở về sourceList)
targetList.addEventListener("dragstart", function (e) {
    draggedItem = e.target;
    e.target.classList.add("dragging");
});

targetList.addEventListener("dragend", function (e) {
    e.target.classList.remove("dragging");
    draggedItem = null;
});

// Cho phép thả từ targetList về sourceList
sourceList.addEventListener("dragover", function (e) {
    e.preventDefault(); // Cho phép thả item vào danh sách này
});

// Xử lý khi thả vào sourceList (kéo từ targetList về)
sourceList.addEventListener("drop", function (e) {
    e.preventDefault();
    if (draggedItem) {
        sourceList.appendChild(draggedItem); // Thả item vào lại sourceList
        draggedItem = null;
    }
});
