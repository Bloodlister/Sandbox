const Target = require('./core/Target');
const Fireball = require('./core/Spells/Fireball');


let player = new Target('Player', 1000);
let target = new Target('Dummy', 10000);
player.target(target);
let fireball = new Fireball();
player.dealDamage(fireball);
