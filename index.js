let player = {
    name: 'Player 1',
    chips: 200
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector('#message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');
let playerEl = document.querySelector('#player-el');

playerEl.textContent = player.name + ': $' + player.chips


function getRandomCard() {
    return Math.floor(Math.random()*11)+1
}

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard+secondCard;
    isAlive = true;
    renderGame();
}


function renderGame() {
    cardsEl.textContent = 'Cards: |';
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + '|'
    }

    sumEl.textContent = `Sum: ${sum}`;
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true;
    }else{
        message = "BUST! You're out."
        isAlive = false;
    }

   messageEl.textContent = message;

}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame();
    }
}

