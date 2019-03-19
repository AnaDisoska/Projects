function RaceCar(name) {
     this.name = name;

     this.minSpeed = 1;
     this.maxSpeed = 300;
     this.fuel = 100;
     this.tireHealth = 100;
     this.speed = 0;
      this.totalTime = 0;
      
     this.avarageSpeed = function() {
      this.speed += getRandomNumber(this.minSpeed, this.maxSpeed);
   
      if(this.speed > 200){
         this.totalTime += 5;
         this.fuel -= 40;
         this.tireHealth -= 30;  
      }else if(this.speed > 100){
         this.totalTime += 7;
         this.fuel -= 25;
         this.tireHealth -= 20;
      }else{
         this.totalTime += 10;
         this.fuel -= 15;
         this.tireHealth -= 10;
      }
       

     
   }

   this.enterPit = function() {
      if(this.tireHealth < 40 && this.fuel < 40) {
         this.tireHealth = 100;
         this.fuel = 100;
         this.totalTime += 20;
      }
      
     
   }



   
   this.avarageSpeed();
   this.enterPit();


 
 }

