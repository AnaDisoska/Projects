function Being() {
    // everyone is a being
    this.checkHealth = function(){
        if (this.health <= 0) {
            this.isAlive = false;
        }
    }
}