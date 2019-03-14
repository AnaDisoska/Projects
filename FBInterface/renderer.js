function PageRenderer() {
    this.mainContainer = document.getElementById("main-container");

    this.renderAll = function() {
        this.mainContainer.classList.add("main");
        this.renderLeft();
        this.renderRight();
    }
    this.renderLeft = function() {
        var leftSide = document.createElement("div");
        leftSide.classList.add("left-side");
        this.mainContainer.appendChild(leftSide);

        var profilePic = document.createElement("img");
        profilePic.src = 'https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/37161386_10156044573094093_8305172406234775552_o.jpg?_nc_cat=104&_nc_ht=scontent-sof1-1.xx&oh=9b98d565d06be72c0aade0b9e6e9ba47&oe=5D192474';
        profilePic.classList.add('prof');
        leftSide.appendChild(profilePic);
        var aboutMe = document.createElement('div');
        aboutMe.innerHTML = 'About me section'
        aboutMe.classList.add('about');
        leftSide.appendChild(aboutMe);
    }
    this.renderRight = function() {
        var rightSide = document.createElement('div');
        rightSide.classList.add('right-side');
        this.mainContainer.appendChild(rightSide);

        var gallery = document.createElement('div');
        gallery.classList.add('gallery');
        rightSide.appendChild(gallery);


        for(var index = 0; index < 10; index++) {
            var image = document.createElement('img');
            image.classList.add('imageStyle');
            image.src = 'https://akns-images.eonline.com/eol_images/Entire_Site/2018116/rs_1080x1350-181206113738-1080x1350-David-Beckham-GettyImages-960033624.jpg?fit=inside|900:auto&output-quality=90';
            gallery.appendChild(image);
        }


        var posts = document.createElement('div');
        posts.classList.add('posts');
        rightSide.appendChild(posts);


        for(var index = 0; index < 5; index++) {
            var news = document.createElement('div');
            news.classList.add('news');
            
            posts.appendChild(news);
        }


    }

    
}
