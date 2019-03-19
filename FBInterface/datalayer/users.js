function User(name, aboutMe) {
    this.name = name;
    this.aboutMe = new Story();
     this.profilePictures = new Pictures();
    this.events = [];
    this.pictures = [];
    this.stories = [];
    this.posts = new Post();
    
 

    this.generatePictures = function(){
        for (var index = 1; index <= 10; index++) {
            var picture = new Pictures();
            this.pictures.push(picture);
        }
    
    }

    this.register = function(event){
        this.events.push(event);
    
    }

    this.generateStories = function() {
        for (var index = 0; index < 5; index++) {
            var story = new Story();
            this.stories.push(story);
        }
    }
    
    // this.generatePosts = function() {
    //     for (var index = 0; index < 5; index++) {
    //         var post = new Post(index);
    //         this.posts.push(post);
    //     }
    // }
    
    
    // this.generateEvents();
    // this.generatePosts();
    
    this.generatePictures();
    this.generateStories();
}