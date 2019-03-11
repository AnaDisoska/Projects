function Warrior() {
    // a human class should have properties that relate only to him
    // and he is also a combatant
    this.health = getRandomNumber(700, 900);
    this.minDamage = 60;
    this.maxDamage = 90;
    this.isAlive = true;
    this.specialAttack = 3.5;
    this.healSelf = 100;
}

Warrior.prototype = new Combatant();

function Wizard() {
    // a human class should have properties that relate only to him
    // and he is also a combatant
    this.health = getRandomNumber(400, 650);
    this.minDamage = 85;
    this.maxDamage = 125;
    this.isAlive = true;
    this.specialAttack = 4;
    this.healSelf = 150;
}

Wizard.prototype = new Combatant();

function Archer() {
    // a human class should have properties that relate only to him
    // and he is also a combatant
    this.health = getRandomNumber(250, 450);
    this.minDamage = 100;
    this.maxDamage = 150;
    this.isAlive = true;
    this.specialAttack = 4;
    this.healSelf = 250;
}

Archer.prototype = new Combatant();