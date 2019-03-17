function Forest(name) {
    this.name = name;
    // this.bear = new Bear();
    this.animals = [];
    

    this.eatAnimal = function() {
          
            for(var index = 0; index < this.animals.length; index++){
              
                var animal = this.animals[index]
                Bear.totalMass +=  this.animals[index].nutritionValue/2;
                if(animal === this.animals[Wolf]) 
                {
                    Bear.totalMass += Bear.currentMass * 0.90 + Wolf.nutritionValue/2;
                }
            }
        
       
    }


    this.hunterAlert = function(){
         Bear.totalMass += (Bear.currentMass * 0.70);
         if(Bear.totalMass = 400){
             Bear.bearDies;
         }
    }


    this.generateAnimal = function() {
        for (var index = 0; index < 10; index++) {
            var type = getRandomNumber(1, 3);
            switch (type) {
                case 1:
                    this.animals.push(new Wolf("Wolf-" + index));
                    break;
                case 2:
                    this.animals.push(new Fox("Fox-" + index));
                    break;
                default:
                    this.animals.push(new Rabbit("Rabbit-" + index));
                    break;
            }
            
        } console.log(this.animals);
    }  

    
   



    this.generateAnimal();
    this.eatAnimal();
    this.hunterAlert();
}