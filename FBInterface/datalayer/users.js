function User(name) {
     this.name = name;
     this.aboutMe = new Story();
     this.profilePictures = new Pictures(true, 'profile');
     this.events = [];
     this.pictures = [];
     this.stories = [];
    
    
 

    this.generatePictures = function(){
        for (var index = 1; index <= 10; index++) {
            var picture = new Pictures(false, index);
            this.pictures.push(picture);
        }
    
    }

    this.register = function(event){
        this.events.push(event);
    
    }

    this.generateStories = function() {
        for (var index = 0; index < 5; index++) {
            var story = new Story(index);
            this.stories.push(story);
        }
    }
    
   
    
    this.generatePictures();
    this.generateStories();
}