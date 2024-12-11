const h1 = document.querySelector("h1");
const body = document.querySelector("body");

function colorChange(fontColor, bgColor) {
    h1.style.color = fontColor;
    body.style.backgroundColor = bgColor;
}
colorChange();