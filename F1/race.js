function Race(name) {

    this.name = name;
   
    // this.laps = [];
    this.cars = [];
    // this.km = 800;
    this.timeToPassLap = 6;
   
  
    this.passLap = function() {
 
        for(var index = 0; index < this.cars.length; index++){
          this.cars[index].avarageSpeed();
          this.cars[index].enterPit();
        }
       
    } 

    
    
    this.generateCar = function(){
        for (var index = 1; index <= 20; index++) {
            
            var car = new RaceCar('Formula' + index);
            
            this.cars.push(car);
        }
    
    }

  this.findWinner = function() {
      var car = this.cars[0];
    for(var index = 0; index < this.cars.length; index++){
        if(this.cars[index].totalTime < car.totalTime){
            car = this.cars[index];
        }
    } return car;
  }

    
    
  



    
 
    this.passLap();
    this.generateCar();
    

}