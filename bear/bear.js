function Bear(name){
    this.name = name;
    
    this.currentMass = 300;
    this.totalMass += this.currentMass;
    this.isWalking = true;
    this.alive = true;

    this.bearNotMoving = function(){
        if(this.totalMass > this.currentMass) {
            this.isWalking = false;
            this.totalMass *= 0.8;
        }
        
    } 

    this.bearDies = function(){
        if(this.totalMass = 500) {
            this.alive = false;
            console.log('Bear has died');
        }
    }

    this.bearNotMoving();   
    this.bearDies();

} 
