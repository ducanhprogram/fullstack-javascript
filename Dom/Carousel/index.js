var imgFeature = document.querySelector(".img-feature");
var listImg = document.querySelectorAll(".list-image img");

var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");

var listItemImage = document.querySelectorAll(".list-image div");

var currentIndex = 0;

function updateImageByIndex(index) {
    listItemImage.forEach(function (item) {
        item.classList.remove("active");
    });

    imgFeature.style.opacity = 0;

    currentIndex = index;

    // console.log(listImg[index], index);

    setTimeout(function () {
        imgFeature.src = listImg[index].getAttribute("src");

        imgFeature.style.opacity = 1;
    }, 200);

    listImg[index].parentElement.classList.add("active");
}

listImg.forEach(function (imgElement, index) {
    imgElement.addEventListener("click", function (e) {
        updateImageByIndex(index);
    });
});

prevBtn.addEventListener("click", function (e) {
    if (currentIndex === 0) {
        currentIndex = listImg.length - 1;
    } else {
        currentIndex--;
    }

    updateImageByIndex(currentIndex);
});

nextBtn.addEventListener("click", function () {
    if (currentIndex === listImg.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    updateImageByIndex(currentIndex);
});

updateImageByIndex(2);

var isDragging = false;
var initialOffsetX = 0;

//Bắt đầu kéo
imgFeature.addEventListener("mousedown", function (e) {
    e.preventDefault();
    if (e.which === 1) {
        isDragging = true;
        initialOffsetX = e.offsetX; //Lấy tọa độ
        // console.log(initialOffsetX);
    }
});

//Di chuyển chuột
imgFeature.addEventListener("mousemove", function (e) {
    if (!isDragging) {
        return;
    }

    var currentOffsetX = e.offsetX;

    // console.log(currentClientX);

    // Tính ít nhất 50 pixel
    // initialOffsetX là vị trí click chuột
    // currentOffsetX là khoảng di chuột
    var moveWidth = currentOffsetX - initialOffsetX;
    console.log(moveWidth);

    if (moveWidth > 50) {
        //phải
        if (currentIndex === 0) {
            currentIndex = listImg.length - 1;
        } else {
            currentIndex--;
        }
        updateImageByIndex(currentIndex);
        isDragging = false;
    } else if (moveWidth < -50) {
        //Trái

        if (currentIndex === listImg.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateImageByIndex(currentIndex);
        isDragging = false;
    }
});

imgFeature.addEventListener("mouseup", function () {
    isDragging = false;
});
