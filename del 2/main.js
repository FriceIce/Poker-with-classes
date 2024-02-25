import Card from "./classes/card.js";
import Player from "./classes/player.js";

class CardDeck{
  constructor(){
    // this.suits = ['Hearts', 'Dimonds', 'Clubs', 'Spades'];
    this.suitsIcon = ['♥', '♦', '♣', '♠']
    this.cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    this.cards = []

    this.shuffleCards();
  }

  // Skapa en loop som som går igenom cards och tilldelar card ett värde. 
  generateCards(){
    this.cards = this.suitsIcon.flatMap((suit) => {
      return this.cardValues.map((symbol, index) => {
        const color = (suit.toLocaleLowerCase() == '♥' || suit.toLocaleLowerCase() === '♦') 
        ? 'Red' : 'Black'; 

        if(Number(symbol)) return new Card(symbol, suit, color, Number(symbol));
        if(!Number(symbol)) return new Card(symbol, suit, color, (index + 2))
      })
    })

    return this.cards;
  }

  shuffleCards(){
    const cards = this.generateCards(); 
    for(let i = cards.length-1; i > 0; i--){
      const newIndex = Math.floor(Math.random() * (i+1)); //Genererar ny index
      const currentCardOnNewIndex = cards[newIndex]; //Kortet som ligger på index newIndex
      cards[newIndex] = cards[i]; 
      cards[i] = currentCardOnNewIndex; 
    }
    return cards; // class CardDeck har nu cards som värde. 
  }
  
  drawCard(){
    return this.cards.pop(); // Returnerar sista bortagna kortet från högen. 
  }
  
  TheAmountOfCardsLeft(){
    return this.cards.length;
  }

  showDeck(){
    return this.cards; 
  }

  startOver(discardPile){
    for (let i = 0; i < discardPile.length; i++) {
      for (let j = 0; j < discardPile[i].length; j++) {
        this.cards.push(discardPile[i][j]); 
      }
    }

    if(this.cards.length === 52){
      this.shuffleCards(); 
      return this.cards; 
    } 

    if(this.cards.length < 52) return 'There are ' + (52-this.cards.length) + ' cards missing. Check for cards under the table.'; 
  }
  
}

const cardDeck = new CardDeck(); 
const player1 = new Player('Slim'); 
const player2 = new Player('Lucas'); 

console.log(cardDeck.showDeck());

console.log(player1.drawCards(cardDeck, 5));
console.log(player2.drawCards(cardDeck, 5));
console.log(cardDeck.showDeck()); //Output: 42st kort
console.log(player1.removeCards(2));
console.log(player2.removeCards(2));
console.log(player1.drawCards(cardDeck, 2));
console.log(player2.drawCards(cardDeck, 2));
console.log(player1.removeCards());  //Slänger alla korten
console.log(player2.removeCards()); //Slänger alla korten
cardDeck.startOver([player1.discardedCards, player2.discardedCards])
console.log(cardDeck.showDeck());

//Commit msg Individuell uppgift, del 1-2 OOP. 