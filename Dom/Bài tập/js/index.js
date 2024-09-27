var counter = document.querySelector(".counter");

var decrement = document.querySelector(".decrement"); //Giảm

var increment = document.querySelector(".increment"); //Tăng

console.log(typeof ++counter.innerHTML);

decrement.addEventListener("click", function () {
    counter.innerText--;
});

increment.addEventListener("click", function () {
    counter.innerText++;
});
