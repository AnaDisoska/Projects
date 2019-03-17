function main(){
     var forest = new Forest('Black forest');
     var bear = new Bear('Ushko');
     
     for(var index = 0; index < 30; index++) {
        
        var foo = Math.random() * 100;
        if(foo < 30){
            forest.eatAnimal();
        }
         if(index > 20) {
            var foo = Math.random() * 100;
            if(foo < 5){
                forest.hunterAlert();
            }
         }
     }
     
     if (bear.totalMass < 500){
        console.log("The total mass of the bear is " + bear.totalMass + ' , ' + bear.name + ' is alive');
    } else {
        console.log("The total mass of the bear is " +  bear.totalMass + ' , '+  bear.name + ' is dead');
    }


     console.log(bear.name + " is in the " + forest.name);


}

main();


