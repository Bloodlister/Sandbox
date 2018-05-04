class Unit {
    getHealth() {
        return this.health;
    }

    takeDamage(damage) {
        this.health -= damage;
    }
}

module.exports = Unit;