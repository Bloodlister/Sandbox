module.exports = class CardDealer {
    static drawCard() {
        let cardType = CardDealer.randomType();
        let cardValue = CardDealer.randomValue();
        return {type: cardType, sign: cardValue};
    }

    static randomType() {
        let rand = Math.floor(Math.random() * 4);
        switch (rand) {
            case 0:
                return 'Hearts';
                break;
            case 1:
                return 'Spades';
                break;
            case 2:
                return 'Diamond';
                break;
            case 3:
                return 'Clubs';
                break;
        }
    }

    static randomValue() {
        let numberOrLetter = Math.floor(Math.random() * 2);
        switch (numberOrLetter) {
            //Number
            case 0:
                return Math.floor(Math.random() * (10 - 2 + 1) ) + 2;
            case 1:
                let letters = ['A', 'K', 'J', 'Q'];
                return letters[Math.floor(Math.random() * 3)];
        }
    }



    static getValue(cardValue) {
        if (Number.isInteger(cardValue)) {
            return Number.parseInt(cardValue);
        } else {
            switch (cardValue) {
                case 'K':
                case 'J':
                case 'Q':
                    return 10;
                    break;
                case 'A':
                    return 11;
                    break;
            }
        }
    }
}