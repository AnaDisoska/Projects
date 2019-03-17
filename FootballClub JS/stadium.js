function Stadium (name){
    this.name= name; 
    this.seats = 80000; 
    this.ticketPrice = 10;
    this.tickets = 0;
    this.soldShirts = 0;
    this.percent = getRandomNumber(0.6, 0.8);
    

 

    this.fillStadium = function (){
        this.tickets +=  this.percent * this.seats * this.ticketPrice; 
        
      
        this.soldTickets = this.tickets / this.ticketPrice;

    }

   
    this.fanShop = function () {
       this.soldShirts += 0.1 * this.tickets;
       if (FootballClub.scoreGoal){
           this.soldShirts *= 1.25;
       }
      
    }

    

   



    
    this.fillStadium();
    this.fanShop();

}   

