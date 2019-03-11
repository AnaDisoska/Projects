function User(name, aboutMe) {
    this.name = name;
    this.aboutMe = new AboutMe();
     this.profilePictures = new Pictures();
    this.events = [];
    this.pictures = [];
    
 

    this.generatePictures = function(){
        for (var index = 1; index <= 10; index++) {
            var picture = new Pictures();
            this.pictures.push(picture);
        }
    
    }

    this.register = function(event){
        this.events.push(event);
    
    }

    
    
    
    // this.generateEvents();
   
    this.generatePictures();
}