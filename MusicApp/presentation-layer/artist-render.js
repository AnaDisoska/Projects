import { ArtistPageLogic } from '../business-layer/artist-logic.js'

export function Renderer() {
    this.pageData = null;
    this.mainContainer = $("#main-container");
    var self = this;
    this.pageLogic = new ArtistPageLogic();
    
    this.renderAll = function() {
        console.log(this.pageData);
        this.renderTop();
        this.renderBottom();
    }

    this.renderTop = function (){
        var upperSide = $('<div>').attr('id', 'top').appendTo(this.mainContainer);
        var leftSide = $('<div>').attr('id', 'left').appendTo(upperSide);
        $('<h1>').addClass('nameHeader').html(this.pageData.artistInfo.name).appendTo(leftSide);
     
        $('<img>').addClass('mainPic').attr('src',this.pageData.artistInfo.image[5]['#text']).appendTo(leftSide); 
        
        var rightSide = $('<div>').attr('id', 'right').appendTo(upperSide);
        $('<h1>').addClass('nameHeader').html('Similar').appendTo(rightSide);
        

        for(var i=0; i< 4; i++){
            var suggestions = $('<div>').addClass('sugg').attr('id', 's' + i).appendTo(rightSide);
            $('<img>').addClass('suggImg').attr('src', this.pageData.artistInfo.similar.artist[i].image[3]['#text']).appendTo(suggestions);
         var suggName =   $('<div>').addClass('suggName').html(this.pageData.artistInfo.similar.artist[i].name).appendTo(suggestions); 
         
         $(suggName).click(function(event){
             self.init($(event.target).text());
         })
        }

       
         
        var stats = $('<div>').attr('id', 'stats').appendTo(this.mainContainer);
        var stats1 = $('<div>').addClass('mainStats').appendTo(stats);
        $('<p>').addClass('statsHeader').html('Listeners: ' + this.pageData.artistInfo.statistics.listeners).appendTo(stats1); 
        $('<p>').addClass('statsHeader').html('Playcount: ' + this.pageData.artistInfo.statistics.playcount).appendTo(stats1);
        var stats2 = $('<div>').addClass('tags').appendTo(stats);
        $('<p>').addClass('tagsHeader').html('name: ' + this.pageData.artistInfo.tags.tag[2].name).appendTo(stats2);
        $('<p>').addClass('tagsHeader').html('url: ' + this.pageData.artistInfo.tags.tag[2].url).appendTo(stats2);
        
    }

    this.renderBottom = function() {
    
        var bottomSide = $('<div>').attr('id', 'bottom').appendTo(this.mainContainer);
        var summary = $('<div>').attr('id', 'sum').appendTo(bottomSide);
        $('<h1>').addClass('header').html('Biography').appendTo(summary);
        $('<p>').addClass('summary').html(this.pageData.artistInfo.biography.summary).appendTo(summary);
        // $('<h2>').addClass('summary').html(moment(this.pageData.artistInfo.biography.published).format('MMMM Do YYYY, H:mm:ss a')).appendTo(this.summary);
        var content = $('<div>').attr('id', 'content').appendTo(bottomSide);
      var largeText =  $('<p>').addClass('cont').html(this.pageData.artistInfo.biography.content).appendTo(content);
        // $('<div>').attr('id', 'button').appendTo(this.bottomSide);
      var button =  $('<button>').addClass('btn').html('Show more details').appendTo(content);

      $(button).click(function () {
          $(largeText).css('display', 'block');
         var elem = $(this).html();
        if (elem == "Show more details") {
            
            $(this).html("Show less");
            $(this).parent().find('.cont').slideDown();
        } else {
            
            $(this).html("Show more details");
            $(this).parent().find('.cont').slideUp();
        }
    
     });


     var albums =  $('<div>').addClass('album').appendTo(bottomSide);
     var albumsLeft =  $('<div>').addClass('left').appendTo(albums);
     var albumsDesc =  $('<h2>').addClass('desc').html('Queen Albums:').appendTo(albumsLeft);

     for(var i = 0; i < this.pageData.albumData.length; i++){
        var theAlbum =  $('<div>').addClass('al').html(this.pageData.albumData[i].name).appendTo(albumsLeft);
     }

     var songsRight =  $('<div>').addClass('left').appendTo(albums);
     var songsDesc =  $('<h2>').addClass('desc').html('Queen Songs:').appendTo(songsRight);

     for(var i = 0; i < this.pageData.songData.length; i++){
        var theAlbum =  $('<div>').addClass('al').html(this.pageData.songData[i].name).appendTo(songsRight);
     }
     

    }
    
    

     

   




    this.init = async function(artistName) {
        this.pageData = await this.pageLogic.getDataForArtistPage(artistName);
        // this.artistAlbum = await this.pageLogic.getDataforAlbumPage(artistName);
        this.mainContainer.html("");
        this.renderAll();
    }

}
