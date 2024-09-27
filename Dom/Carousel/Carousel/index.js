var imgFeature = document.querySelector(".img-feature");

var listImg = document.querySelectorAll(".list-image img");

var listItemImage = document.querySelectorAll(".list-image div");

var prevBtn = document.querySelector(".prev");

var nextBtn = document.querySelector(".next");

var currentIndex = 0;

function updateImageByIndex(index) {
    listItemImage.forEach(function (item) {
        // console.log(item);
        item.classList.remove("active");
    });

    listItemImage[index].classList.add("active");

    imgFeature.src = listImg[index].getAttribute("src");

    currentIndex = index;
}

listImg.forEach(function (item, index) {
    item.addEventListener("click", function (e) {
        // console.log(imgFeature);
        updateImageByIndex(index);
    });
});

prevBtn.addEventListener("click", function () {
    if (currentIndex === 0) {
        currentIndex = listImg.length - 1;
    } else {
        currentIndex--;
    }

    console.log(currentIndex);
    updateImageByIndex(currentIndex);
});

nextBtn.addEventListener("click", function () {
    if (currentIndex === listImg.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    console.log(currentIndex);

    updateImageByIndex(currentIndex);
});
