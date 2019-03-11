function Combatant() {
    // a combatant is a being that can fight
    // place combat related methods here
    this.attack = function(target) {
        var specialAttackOccured = calculatePercent(30);
        var damage = getRandomNumber(this.minDamage, this.maxDamage);

        if(specialAttackOccured){
            damage *= this.specialAttack;
        }
        
    
        target.recieveDamage(damage);
    }

    
    this.recieveDamage = function(damage) {
        var healingOccured = calculatePercent(50);
        
        
        this.health -= damage;
        

        if(healingOccured){
            this.health += this.healSelf;
        }

        this.checkHealth();
    }
}

Combatant.prototype = new Being();