function Dragon(name) {
    // a dragon should have properties that relate only to him
    // and he is also a combatant
    this.name = name;
    this.health = getRandomNumber(22000, 25000);
    this.minDamage = 400;
    this.maxDamage = 899;
    this.isAlive = true;
    this.specialAttack =  1;
}

Dragon.prototype = new Combatant();