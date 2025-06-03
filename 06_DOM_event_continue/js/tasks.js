let dec = document.getElementById("decrease");
let counter = document.getElementById("counter");
let inc = document.getElementById("increase");

dec.addEventListener('click', (e)=>{
    counter.value = parseInt(counter.value) - 1;

})
inc.addEventListener('click', (e)=>{
    counter.value = parseInt(counter.value) + 1;
})
counter.addEventListener('keydown', e => e.preventDefault());
counter.addEventListener('paste', e => e.preventDefault());

//2
let btn = document.getElementById("addBlockBtn");
let blockContainer = document.getElementById("blockContainer");

function getRandomColor()
{
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


let palette = document.getElementById("palette");
let textBlock = document.getElementById("textBlock");

palette.addEventListener('click', (e) => {
  if (e.target.classList.contains('color-cell')) {
    let color = e.target.dataset.color;
    textBlock.style.color = color;
  }
});
