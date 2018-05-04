const Unit = require('./Unit');

class Hero extends Unit {
    /** @returns {string} */
    greet() {
        return this.greetings.sort(function () { return 0.5 - Math.random(); })[0];
    }
}

module.exports = Hero;