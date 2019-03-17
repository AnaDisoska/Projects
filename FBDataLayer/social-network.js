function SocialNetwork(name) {
    this.name = name;
    this.user = [];

    this.events = [];
    

    this.generateNewUser = function(){
        for (var index = 1; index <= 50; index++) {
            // var aboutMe = new AboutMe('title-' + index, new Date());
            var user = new User(index);
            var eventNumber = getRandomNumber(0, this.events.length);
            user.register(this.events[eventNumber]);
            this.user.push(user);
        }
    
    }


    this.generateNewEvent = function(){
        for (var index = 1; index <= 5; index++) {
            var event = new Event('Disko' + index);
            
            
            this.events.push(event);
        }
    
    }




   




    this.generateNewEvent();
    this.generateNewUser();
}