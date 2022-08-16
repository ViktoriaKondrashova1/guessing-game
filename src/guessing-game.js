let guessNum = 0;

class GuessingGame {
    constructor() {}
    
    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        return guessNum = (Math.round((this.maxValue + this.minValue) / 2));
    }

    lower() {
        return this.maxValue = guessNum;
    }

    greater() {
        return this.minValue = guessNum;
    }
};

console.log(guessNum)

module.exports = GuessingGame;

