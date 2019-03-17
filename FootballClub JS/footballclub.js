function FootballClub (name){
    this.name=name;
    this.players=[];
    this.costs = getRandomNumber(10000, 15000); 
    this.earnings = 0;
    this.totalGoals = 0;
    

    this.generatePlayers=function(number){
        for (i=1; i<=number; i++){
            var player = new Player();
            this.players.push(player);
           
            
        }
    }

    this.generateSuperStar = function (number){
        for (i=1; i<=number; i++){
            var star = new Player();
            this.players.push(star);
            
    }
}

    

    
    this.scoreGoal = function() {
        var foo = Math.random() * 100;
        if ( foo < 30) {
            this.totalGoals ++;
            return true;
        }
       
        return false;
       
    }

    this.hooligansCosts = function() {
        this.costs += getRandomNumber(10000, 15000);
    }
  

    
    
    }

     
   
  