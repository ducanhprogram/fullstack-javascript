var studentList = document.querySelectorAll("#studentList");

var Students = document.querySelectorAll(".student");

Students.forEach(function (student) {
    student.addEventListener("click", function () {
        var score = parseInt(this.getAttribute("data-score"));

        if (score < 10) {
            score += 1;
        }

        this.setAttribute("data-score", score);
        this.querySelector("span").textContent = `(Điểm: ${score})`;

        if (score == 10) {
            this.classList.remove("fail");
            this.classList.add("pass");
        } else {
            this.classList.remove("pass");
            this.classList.add("fail");
        }
    });

    // console.log(student.dataset.score);
    if (student.dataset.score === "10") {
        student.classList.add("pass");
    } else {
        student.classList.add("fail");
    }
});
