let btn = document.getElementById("addBlockBtn");
let blockContainer = document.getElementById("blockContainer");

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createBlock(color) {
    let block = document.createElement('div');
    block.classList.add('block');
    block.style.backgroundColor = color;
    return block;
}

function saveBlocks() {
    let colors = [];
    document.querySelectorAll('.block').forEach(block => {
        colors.push(block.style.backgroundColor);
    });
    localStorage.setItem('blocks', JSON.stringify(colors));
}

function loadBlocks() {
    let colors = JSON.parse(localStorage.getItem('blocks') || '[]');
    colors.forEach(color => {
        let block = createBlock(color);
        blockContainer.appendChild(block);
    });
}

btn.addEventListener('click', () => {
    let color = getRandomColor();
    let newBlock = createBlock(color);
    blockContainer.appendChild(newBlock);
    saveBlocks();
});


let btn2 = document.getElementById("btn")
let circle1 = document.getElementById("1")
let circle2 = document.getElementById("2")
let circle3 = document.getElementById("3")

let id = +localStorage.getItem('lightState') || 0;

function updateTrafficLight(state) {
    circle1.style.backgroundColor = "rgb(157, 157, 157)";
    circle2.style.backgroundColor = "rgb(157, 157, 157)";
    circle3.style.backgroundColor = "rgb(157, 157, 157)";
    
    if (state === 0) circle1.style.backgroundColor = "red";
    else if (state === 1) circle2.style.backgroundColor = "yellow";
    else if (state === 2) circle3.style.backgroundColor = "green";
}

btn2.onclick = function () {
    id = (id + 1) % 3;
    updateTrafficLight(id);
    localStorage.setItem('lightState', id);
};

window.onload = () => {
    loadBlocks();
    updateTrafficLight(id);
};
