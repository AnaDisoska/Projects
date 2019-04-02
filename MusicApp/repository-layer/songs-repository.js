import { Song } from '../entities/song.js';

export function SongsRepository() {

    this.getSongInfo = async function(artistName, songNames) {
        var songs = [];
        for(var index = 0; index < songNames.length; index++){
          
            try {

                var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=fc94601dd64a2fbff6a1349fd6333f98&artist=" + artistName + "&track=" + songNames[index] + "&format=json");
                
                var data = await response.json();
                // console.log("Response from getAlbum API", data);
                songs.push(new Song(data.track)) ;
            } catch (error) {
                return error;
            }

            
        }

        return songs;

       
    }
}



