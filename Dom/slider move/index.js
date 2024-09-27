var carousel = document.querySelector(".carousel");

var carouselInner = carousel.querySelector(".carousel-inner");

var carouselDots = carousel.querySelector(".carousel-dots");

var carouselItems = carouselInner.querySelectorAll(".item");

var navNext = carousel.querySelector(".carousel-nav .next");

var navPrev = carousel.querySelector(".carousel-nav .prev");

var renderDots = function (indexDot = 0) {
    var dotsHtml = "";

    carouselItems.forEach(function (item, _index) {
        //Vòng lặp đầu: _index = 0;
        // console.log(item, _index);
        dotsHtml += `<span data-index="${_index}" ${
            +_index === +indexDot ? 'class="active"' : ""
        }></span>`;
    });
    carouselDots.innerHTML = dotsHtml;

    carouselDots.addEventListener("click", function (e) {
        if (e.target.nodeName === "SPAN") {
            //Lấy giá trị index từ thuộc tính data-index của thẻ span
            var indexClicked = e.target.dataset.index;
            //Gán giá trị cho biến index
            index = indexClicked;
            goSlide(); //Gọi hàm
        }
    });
};

var goSlide = function () {
    position = 0 - index * itemWidth;
    carouselInner.style.translate = `${position}px`;
    renderDots(index);
};
if (carouselItems.length) {
    //Tính kích thước 1 item
    //Chiều rộng của 1 element
    var itemWidth = carouselInner.clientWidth;

    console.log(itemWidth);

    //Tính tổng chiều rộng của tất cả items
    var totalWidth = itemWidth * carouselInner.children.length;

    //Render dots
    renderDots();

    console.log(totalWidth);
    var position = 0;

    var index = 0;

    //Lắng nghe sự kiện khi bấm vào nút next
    navNext.addEventListener("click", function () {
        if (Math.abs(position) >= totalWidth - itemWidth) {
            return;
        }
        position -= itemWidth;
        index++;

        carouselInner.style.translate = `${position}px`;
        renderDots(index);
    });

    //Lắng nghe sự kiện khi bấm vào nút pre
    navPrev.addEventListener("click", function () {
        if (Math.abs(position) <= Math.abs(itemWidth) - itemWidth) {
            return;
        }
        position += itemWidth;
        index--;
        carouselInner.style.translate = `${position}px`;
        renderDots(index);
    });
}

//Vuốt chuyển slider
var isDrag = false;
var initialOffsetX = 0;
var moveWidth;

carouselInner.addEventListener("mousedown", function (e) {
    e.preventDefault();
    if (e.which === 1) {
        isDrag = true;
        //Xác định e.offsetX khi mà mình ấn chuột click chuột xuống
        initialOffsetX = e.offsetX;
        carouselInner.classList.add("drag");
    }
});

carouselInner.addEventListener("mouseup", function () {
    isDrag = false;

    carouselInner.style.transition = null;

    if (moveWidth < 0) {
        if (Math.abs(moveWidth) > 100 && index < carouselItems.length - 1) {
            index++;
        }

        goSlide(index);
    } else {
        if (Math.abs(moveWidth) > 100 && index > 0) {
            index--;
        }
        goSlide(index);
    }
    carouselInner.classList.remove("drag");
});

carouselInner.addEventListener("mousemove", function (e) {
    e.preventDefault();
    if (isDrag) {
        console.log(initialOffsetX, e.offsetX);
        moveWidth = e.offsetX - initialOffsetX;
        // console.log(moveWidth);
        carouselInner.style.transition = "none";
        carouselInner.style.translate = `${position + moveWidth}px`;
    }
});
