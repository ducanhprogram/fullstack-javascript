const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");

const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();

    const secondsDegrees = (seconds / 60) * 360;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360;

    hourHand.style.transform = `rotate(${minsDegrees}deg)`;
}
+90;

setInterval(setDate, 1000);
