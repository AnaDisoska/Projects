function main(){
    var race = new Race('Monza');
    var car;
    RaceCar();

    for(index = 1; index <= 80; index++){
        // var lap = new Lap('Lap-'+ index);
        race.passLap();
        // if(car){
        //     
           
        }  console.log(race);
        
        
    

    
    // console.log(race, 'is finished');

   car =  race.findWinner();
   console.log(car + ' has finished the race');
}


main();






