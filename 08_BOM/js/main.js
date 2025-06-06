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
    } while (usedCard.has(card));
    usedCard.add(card);
    return card;
}