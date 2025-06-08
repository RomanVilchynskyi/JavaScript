const icons = {
    Fish: "https://img.icons8.com/emoji/96/fish-emoji.png",
    Apple: "https://img.icons8.com/emoji/96/red-apple.png",
    Eggs: "https://img.icons8.com/emoji/96/cooked-egg.png"
};

function addProduct(type) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<img src="${icons[type]}" alt="${type}"><p>${type}</p>`;
    document.getElementById('productList').appendChild(card);
}

document.getElementById('addFish').addEventListener('click', () => addProduct('Fish'));
document.getElementById('addApple').addEventListener('click', () => addProduct('Apple'));
document.getElementById('addEggs').addEventListener('click', () => addProduct('Eggs'));