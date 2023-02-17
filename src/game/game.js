let game = {

    lockMode: false,
    firstCard: null,
    secondCard: null,


    techs: ["bootstrap",
        "css",
        "electron",
        "firebase",
        "html",
        "javascript",
        "jquery",
        "mongo",
        "node",
        "react"],

    cards: null,


    setCard: function (id) {
        let card = this.cards.filter(card => card.id === id)[0];

        if (card.flipped || this.lockMode) {
            return false

        }

        if (!this.firstCard) {
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        } else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true
        }

    },

    checkMatch: function () {
        if (!this.firstCard || !this.secondCard) {
            return false;
        }

        return this.firstCard.icon === this.secondCard.icon


    },

    clearCards: function () {

        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    unflipCard: function () {
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();

    },




    createCardsFromTechs: function () {
        this.cards = [];

        this.techs.forEach(tech => {
            this.cards.push(this.createPairFromTech(tech));


        });
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffLeCards();
        return this.cards
    },





    shuffLeCards: function () {

        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }




    },






    createPairFromTech: function (tech) {

        return [{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false
        }, {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false
        }]
    },

    createIdWithTech: function (tech) {

        return tech + parseInt(Math.random() * 1000);

    },

    checkGameOver: function () {

        return this.cards.filter(card => !card.flipped).length === 0;



    },
    flipCard: function (cardId , gameOverCallback, noMatchCallback) {
        
        if (this.setCard(cardId)) {

            if (this.secondCard) {
      
              if (this.checkMatch()) {
      
                this.clearCards();
                if (this.checkGameOver()) {
                    gameOverCallback()
                };
      
              } else {
      
                setTimeout(() => {
                    this.unflipCard();
                    noMatchCallback()
                  
                }, 1000);
      
      
      
              }
            }
          }
    }




}



export default game;

