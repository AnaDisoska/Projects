function PageRenderer(user) {
    this.user = user;
    this.mainContainer = document.getElementById("main-container");

    this.renderAll = function () {
        this.mainContainer.classList.add("main");
        this.renderLeft();
        this.renderRight();
    }
    this.renderLeft = function () {
        var leftSide = document.createElement("div");
        leftSide.classList.add("left-side");
        this.mainContainer.appendChild(leftSide);

        var profilePic = document.createElement("img");
        profilePic.src = this.user.profilePictures.src;
        profilePic.alt = this.user.profilePictures.alt;
        profilePic.classList.add('prof');
        leftSide.appendChild(profilePic);
        var aboutMe = document.createElement('div');
        aboutMe.classList.add('about');
        leftSide.appendChild(aboutMe);

        var aboutMeHeader = document.createElement('h1');
        aboutMeHeader.innerText = this.user.aboutMe.header;
        aboutMe.appendChild(aboutMeHeader);

        var aboutMeParagraph = document.createElement('p');
        aboutMeParagraph.innerText = this.user.aboutMe.paragraph;
        aboutMe.appendChild(aboutMeParagraph);


        function zoom(event) {
            profilePic.style.width = '500px';
            profilePic.style.height = '500px';

            // event.removeEventListener("mouseover", zoom, false);

        }


        profilePic.addEventListener('mouseover', function (event) {
            zoom(event);



        })
    }
    this.renderRight = function () {
        var rightSide = document.createElement('div');
        rightSide.classList.add('right-side');
        this.mainContainer.appendChild(rightSide);

        var gallery = document.createElement('div');
        gallery.classList.add('gallery');
        rightSide.appendChild(gallery);

        


        for (var index = 0; index < 10; index++) {
            var image = document.createElement('img');
            image.classList.add('imageStyle');
            image.src = this.user.pictures[index].src;
            image.id = this.user.pictures[index].id;
            gallery.appendChild(image);

            image.addEventListener('click', function (event) {
              if(event.target.style.width = '550px'){
                  event.target.style.width = '150px';
              }
                    event.target.style.width = '550px';
                    event.target.style.height = '550px';
                
            })

        }


        var posts = document.createElement('div');
        posts.classList.add('posts');
        rightSide.appendChild(posts);
       

        for (var index = 0; index < 5; index++) {
           
            var newsData = this.user.stories[index];
            var news = document.createElement('div');
            news.id = newsData.id;
            news.classList.add('news');
            posts.appendChild(news);

            var newsHeader = document.createElement('h1');
            newsHeader.innerText = this.user.aboutMe.header;
             news.appendChild(newsHeader);

            var newsParagraph = document.createElement('p');
            newsParagraph.innerText = this.user.aboutMe.paragraph;
            news.appendChild(newsParagraph);

            var newsButton = document.createElement('button');
            newsButton.innerText = this.user.aboutMe.button;
            news.appendChild(newsButton);

            function removeElement(id) {
                console.log(id);
                var element = document.getElementById(id);  
                element.parentNode.removeChild(element);
                
            }

            newsButton.addEventListener('click', function(event){
                console.log(event.target.parentNode);
                removeElement(event.target.parentNode.id);
            })

            // function removeElement1() {
            //     var element = document.getElementById(1);  
            //     element.parentNode.removeChild(element)
                
            // }

            // newsButton.addEventListener('click', function(event){
            //     removeElement1(event);
            // })


            


        }


    }


}
