module.exports = class Target {
    constructor(name, health) {
        this._name = name;
        this._health = health;
        this._aim = null;
    }

    /**
     * @param {Target} target
     */
    target(target) {
        this._aim = target
    }

    /**
     * @param {Spell} spell
     */
    dealDamage(spell) {
        spell.doDamage(this._aim)
    }

    takeDamage(damage) {
        this._health -= damage;
        console.log(this._name + " was hit for " + damage + "HP");
        console.log(this._name + ": " + this._health + " HP");
    }
}