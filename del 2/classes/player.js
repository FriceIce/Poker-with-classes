export default class Player{
  constructor(name){
    this.name = name,
    this.hand = [];
    this.discardedCards = []; //Slänger in kort som ej behövs

  }

  drawCards(shuffleCards, cardAmount){
    for (let i = 0; i < cardAmount; i++) {
      this.hand.push(shuffleCards.drawCard())
    }
    
    const totalNumericValue = this.hand.map(card => card.value).reduce((pre,cur) => pre+cur, 0);
    console.log('The Total numeric value for', this.name + ' is ' + totalNumericValue)
    return this.hand;
  }

  removeCards(cardAmount = this.hand.length){
    if(cardAmount > this.hand.length) return 'There is ' + this.hand.length + ' cards in your hand.'
    this.hand.splice(0, cardAmount).forEach(card => this.discardPile(card)); 
    return this.hand;
  }

  discardPile(card){
    return this.discardedCards.push(card); 
  }

  showDiscardedPile(){
    return this.discardedCards;
  }

}