var todoForm = document.querySelector(".todoForm");

var todoList = document.querySelector(".todo-list");

var todos = [];

var formUpdateIds = [];

var renderTodos = function () {
    console.log(formUpdateIds);
    var html = todos
        .map(function (todo, index) {
            var value = formUpdateIds.find(function (element) {
                return +element.index === +index;
            });

            //value trả về index và name
            // console.log(value);

            if (value) {
                return `<form class="todoForm">
                            <input
                                spellcheck="false"
                                type="text"
                                class="todo-input"
                                placeholder="Update task"
                                value="${value.name}"
                            />
                            <button type="submit" class="todo-btn">And Task</button>
                        </form> `;
            }

            // console.log(todo);
            return `<div class="todo" data-index="${index}">
                        <p data-type="completed" class="${
                            todo.completed ? "completed" : "" // True sẽ thêm class vào: là class completed
                        }">${todo.name}</p>
                        <div class="icon">
                            <svg
                                data-type="update"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="pen-to-square"
                                class="svg-inline--fa fa-pen-to-square"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                                ></path>
                            </svg>
                            <svg
                                data-type="remove"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="trash"
                                class="svg-inline--fa fa-trash"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                                ></path>
                            </svg>
                        </div>
                    </div>`;
        })
        .join("");

    todoList.innerHTML = html;
};

//update
var getTodoHtml = function (todo, index) {
    return `<div class="todo" data-index="${index}">
                        <p data-type="completed" class="${
                            todo.completed ? "completed" : "" // True sẽ thêm class vào: là class completed
                        }">${todo.name}</p>
                        <div class="icon">
                            <svg
                                data-type="update"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="pen-to-square"
                                class="svg-inline--fa fa-pen-to-square"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                                ></path>
                            </svg>
                            <svg
                                data-type="remove"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="trash"
                                class="svg-inline--fa fa-trash"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                                ></path>
                            </svg>
                        </div>
                    </div>`;
};

var handleRemove = function (index) {
    //Cách 1
    // if (confirm("Bạn có muốn xóa?")) {
    //     var index = el.dataset.index; // Lấy chỉ số của todo từ thuộc tính data-index
    //     todos.splice(index, 1); // Xóa phần tử tương ứng khỏi mảng todos
    //     renderTodos();
    // }

    if (confirm("Bạn có muốn xóa")) {
        todos.splice(index, 1);
        renderTodos();
    }
};

var handleCompleted = function (index) {
    //True -> false
    //False --> true
    todos[index].completed = !todos[index].completed;
    renderTodos();
};

var showFormUpdate = function (todoEl) {
    var index = todoEl.dataset.index;

    var todo = todos[index];

    console.log(todo);

    var formUpdate = ` <form class="todoForm" data-index="${index}">
                        <input
                            spellcheck="false"
                            type="text"
                            class="todo-input"
                            placeholder="Update task"
                            value="${todo.name}"
                        />
                        <button type="submit" class="todo-btn">And Task</button>
                    </form> `;

    // console.log(formUpdate);
    // console.log(todoEl.outerHTML);
    todoEl.outerHTML = formUpdate;

    //Vì :  name: todoEl.querySelector(".todo-input").value thì todo sẽ bị thay thế bằng todoForm lên phải querySelector ngay từ đâu
    var formList = todoList.querySelectorAll(".todoForm");

    formList.forEach(function (todoForm) {
        console.log(todoForm.dataset.index);
        if (todoForm.dataset.index === index) {
            var value = todoForm.querySelector(".todo-input").value;

            formUpdateIds.push({
                index: +index,
                name: value,
            });

            todoForm
                .querySelector(".todo-input")
                .addEventListener("change", function () {
                    value = this.value;
                    // console.log(value);

                    var indexUpdate = formUpdateIds.findIndex(function (
                        element
                    ) {
                        return +element.index === +index;
                    });

                    if (indexUpdate !== -1) {
                        formUpdateIds[indexUpdate].name = value;
                    }
                });
            todoForm.addEventListener("submit", function (e) {
                e.preventDefault();
                //Cập nhật lại mảng
                todos[index].name = value;
                todoForm.outerHTML = getTodoHtml(todos[index], index);
                console.log(formUpdateIds);
                formUpdateIds = formUpdateIds.filter(function (element) {
                    console.log(+element.index, +index);
                    console.log(+element.index !== +index);
                    return +element.index !== +index;
                });
            });
        }
    });

    //Thêm index vả0 mảng formUpdate
};

todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log("submit");

    var nameEl = document.querySelector(".todo-input");

    var doName = nameEl.value;

    if (!doName || !doName.trim()) {
        alert("Vui lòng nhập tên");
        return;
    }

    var todo = {
        name: doName,
        completed: false,
    };
    todos.push(todo);
    console.log(todos);

    renderTodos();
    nameEl.value = "";
});

todoList.addEventListener("click", function (e) {
    // console.log(e.target);
    var type;
    var todoEl;
    //Trước khi cỏ remove()   --> để xóa phần tử phải cần truy cập đến phần tử cha của nó
    if (e.target.localName === "path") {
        type = e.target.parentElement.dataset.type;
        todoEl = e.target.parentElement.parentElement.parentElement;
    } else {
        type = e.target.dataset.type;
        todoEl = e.target.parentElement.parentElement;
    }

    var index = todoEl.dataset.index;

    if (type === "update") {
        showFormUpdate(todoEl);
    }

    if (type === "remove") {
        handleRemove(index);
    }

    if (type === "completed") {
        todoEl = e.target.parentElement;
        index = todoEl.dataset.index;
        console.log(typeof index);
        handleCompleted(index);
    }
});

//todoEl là cái todo đó, là class todo, là từng phần tử 1
//todoList là các danh sách todo
