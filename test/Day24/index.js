document.addEventListener("DOMContentLoaded", function () {
    var addTaskBtn = document.getElementById("addTaskBtn");
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var currentEditItem = null;

    addTaskBtn.addEventListener("click", function () {
        if (currentEditItem) {
            updateTask();
        } else {
            addTask();
        }
    });

    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            if (currentEditItem) {
                updateTask();
            } else {
                addTask();
            }
        }
    });

    function addTask() {
        var taskText = taskInput.value.trim();
        if (taskText) {
            var listItem = document.createElement("li");
            listItem.innerHTML =
                "<span>" +
                taskText +
                "</span>" +
                '<button class="edit-btn">✏️</button>' +
                '<button class="delete-btn">🗑️</button>';
            taskList.appendChild(listItem);
            taskInput.value = "";

            var editBtn = listItem.querySelector(".edit-btn");
            var deleteBtn = listItem.querySelector(".delete-btn");

            editBtn.addEventListener("click", function () {
                editTask(listItem);
            });
            deleteBtn.addEventListener("click", function () {
                deleteTask(listItem);
            });
        }
    }

    function editTask(listItem) {
        currentEditItem = listItem;
        var span = listItem.querySelector("span");
        var editInput = document.createElement("input");
        editInput.type = "text";
        editInput.className = "edit-input";
        editInput.value = span.textContent;
        listItem.insertBefore(editInput, span);
        listItem.removeChild(span);
        editInput.focus();
        addTaskBtn.textContent = "Update Task";

        editInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                updateTask();
            }
        });
    }

    function updateTask() {
        var editInput = currentEditItem.querySelector(".edit-input");
        var newText = editInput.value;
        var newText = editInput.value.trim();
        if (newText) {
            var span = document.createElement("span");
            span.textContent = newText;
            currentEditItem.insertBefore(span, editInput);
            currentEditItem.removeChild(editInput);
            addTaskBtn.textContent = "Add Task";
            taskInput.value = "";
            currentEditItem = null;
        }
    }

    function deleteTask(listItem) {
        if (confirm("Are you sure you want to delete this task?")) {
            taskList.removeChild(listItem);
        }
    }
});
