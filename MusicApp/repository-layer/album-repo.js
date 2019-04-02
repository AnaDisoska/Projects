import { Album } from '../entities/album.js';

export function AlbumRepository() {

    this.getAlbumInfo = async function(artistName, albumNames) {
        var albums = [];
        for(var index = 0; index < albumNames.length; index++){
          
            try {
                var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=fc94601dd64a2fbff6a1349fd6333f98&artist=" + artistName + "&album=" + albumNames[index] + "&format=json");
                
                var data = await response.json();
                // console.log("Response from getAlbum API", data);
                albums.push(new Album(data.album)) ;
            } catch (error) {
                return error;
            }

            
        }

        return albums;

       
    }
}
   

 
