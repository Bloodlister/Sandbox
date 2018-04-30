module.exports = class Spell {
    constructor(name, type, manaCost, manaCostReduction = 0) {
        this._name = name;
        this._type = type;
        var _damage = 0;
        this.getDamage = function() { return _damage; };
        this.setDamage = function(damage) { _damage = damage; };

        var _manaCostReduction = manaCostReduction;
        var _manaCost = manaCost;
        this.getManaCost = function() { return Math.ceil(_manaCost / manaCostReduction); };
        this.setManaCost = function(manaCost) { _manaCost = manaCost; };
    }

    /**
     * @param {Target} target
     */
    doDamage(target) {
        target.takeDamage(this.getDamage());
    }
}