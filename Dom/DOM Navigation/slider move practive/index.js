var carousel = document.querySelector(".carousel");

var carouselInner = carousel.querySelector(".carousel-inner");

var carouselItem = carouselInner.querySelectorAll(".item");

var navPrev = carousel.querySelector(".carousel-nav .prev");

var navNext = carousel.querySelector(".carousel-nav .next");

var carouselDots = carousel.querySelector(".carousel-dots");

var renderDots = function (indexDot = 0) {
    var dotsHtml = "";
    carouselItem.forEach(function (item, _index) {
        dotsHtml += `<span data-index ="${_index}" ${
            +indexDot === +_index ? 'class="active"' : ""
        } ></span>`;
    });
    carouselDots.innerHTML = dotsHtml;

    carouselDots.addEventListener("click", function (e) {
        if (e.target.nodeName === "SPAN") {
            var indexCliked = e.target.dataset.index;
            console.log(indexCliked);
            index = indexCliked;
            goSlide();
        }
    });
};

var goSlide = function () {
    position = 0 - index * itemWidth;
    carouselInner.style.translate = `${position}px`;
    renderDots(index);
};

if (carouselItem.length) {
    //Tính chiều rộng của carousel
    var itemWidth = carouselInner.clientWidth;

    console.log(itemWidth);

    var totalWidth = itemWidth * carouselItem.length;
    console.log(totalWidth);

    var position = 0;

    renderDots();
    var index = 0;

    navNext.addEventListener("click", function () {
        if (Math.abs(position) >= totalWidth - itemWidth) {
            return;
        }
        position -= itemWidth;
        index++;

        carouselInner.style.translate = `${position}px`;

        renderDots(index);
    });

    navPrev.addEventListener("click", function () {
        if (Math.abs(position) <= 0) {
            return;
        }
        index--;
        position += itemWidth;
        carouselInner.style.translate = `${position}px`;
        renderDots(index);
    });
}
