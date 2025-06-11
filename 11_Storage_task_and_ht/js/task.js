let btn = document.getElementById("addBlockBtn");
let blockContainer = document.getElementById("blockContainer");

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}
function createBlock() {
    let block = document.createElement('div');
    block.classList.add('block');
    block.style.backgroundColor = getRandomColor();
    return block;
}

btn.addEventListener('click', () => {
    let newBlock = createBlock();
    blockContainer.appendChild(newBlock);
});






let btn2 = document.getElementById("btn")
let circle1 = document.getElementById("1")
let circle2 = document.getElementById("2")
let circle3 = document.getElementById("3")

let id = 0;
btn2.onclick = function () {
    circle1.style.backgroundColor = "rgb(157, 157, 157)";
    circle2.style.backgroundColor = "rgb(157, 157, 157)";
    circle3.style.backgroundColor = "rgb(157, 157, 157)";
    if (id == 0) {
        id++;
        circle1.style.backgroundColor = "red"
    }
    else if (id == 1) {
        id++;
        circle2.style.backgroundColor = "yellow"
    }
    else if (id == 2) {
        id = 0;
        circle3.style.backgroundColor = "green"
    }
}