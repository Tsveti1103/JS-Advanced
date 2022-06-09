function deckOfCards(cards) {
    let result = [];
    for (let cardAsString of cards) {
        let face = cardAsString.slice(0, -1);
        let suit = cardAsString.slice(-1);
        try {
            const card = createCard(face, suit);
            result.push(card);
        } catch (err) {
            result = ['Invalid card: ' + cardAsString];
        }
    }


    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = { 'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' };
        if (!faces.includes(face)) {
            throw new Error('Invalid face: ' + face);
        }
        if (!suits.hasOwnProperty(suit)) {
            throw new Error('Invalid suit: ' + suit);

        }
        const card = {
            cardFace: face,
            cardSuit: suits[suit],
            toString() {
                return this.cardFace + this.cardSuit
            }
        }
        return card;
    }
    console.log(result.join(' '));
}

deckOfCards(['AS', '10D', 'KH', '2C'])
deckOfCards(['5S', '3D', 'QD', '1C'])