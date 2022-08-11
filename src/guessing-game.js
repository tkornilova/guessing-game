class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.result = Math.ceil((this.max + this.min) / 2);
    }

    lower() {
        this.max = this.result;
        this.guess();
    }

    greater() {
        this.min = this.result;
        this.guess();
    }
}

module.exports = GuessingGame;
