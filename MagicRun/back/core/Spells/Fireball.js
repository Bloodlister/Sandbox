var Spell = require('./Spell');

module.exports = class Fireball extends Spell {
    constructor(name = 'FireBall', type = 'fire', manaCost = 50) {
        super(name, type, manaCost);
        this.setDamage(100);
    }
}