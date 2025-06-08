// let myWindow;

// function Task1() {
//   myWindow = window.open('', '', 'width=410,height=410');

//   setTimeout(() => {
//     myWindow.resizeTo(500, 500);
//   }, 2000);

//   setTimeout(() => {
//     myWindow.moveTo(200, 200);
//   }, 4000);

//   setTimeout(() => {
//     myWindow.close();
//   }, 6000);
// }


// window.addEventListener('click', () => {
//   document.getElementById('one').addEventListener('click', Task1);
// });


// function task2()
// {
//     const now = new Date();
//     const s = document.getElementById("clock");
//     s.innerHTML = now.toLocaleTimeString();
// }

// setInterval(task2, 1000);
// task2();

const suit = ["♠", "♥", "♦", "♣"];
const cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "V", "Q", "K", "A"]

function getCard(usedCard)
{
    let card;
    do {
        let rndSuit = suit[Math.floor(Math.random() * suit.length)];
        let rndCardValue = cardValue[Math.floor(Math.random() * cardValue.length)];
        card = rndCardValue + rndSuit;
    } while (usedCard.includes(card));
    usedCard.push(card);
    return card;
}

function dealCards()
{
    const player1 = document.getElementById("player1");
    const player2 = document.getElementById("player2");
    player1.innerHTML = "";
    player2.innerHTML = "";

    const usedCards = [];

    for (let i = 0; i < 6; i++) {
        const card1 = getCard(usedCards);
        const card2 = getCard(usedCards);
        
        const div1 = document.createElement("div");
        div1.className = "card";
        div1.textContent = card1;
        player1.appendChild(div1);

        const div2 = document.createElement("div");
        div2.className = "card";
        div2.textContent = card2;
        player2.appendChild(div2);
    }
}

document.getElementById('dealBtn').addEventListener('click', dealCards);