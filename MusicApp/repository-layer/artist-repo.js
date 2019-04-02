import { Artist } from '../entities/artist.js';

export function ArtistRepository() {

    this.getArtistInfo = async function(artistName) {
        try {
            var response =  await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=" 
            + artistName + "&api_key=fc94601dd64a2fbff6a1349fd6333f98&format=json");
            var data = await response.json();
            console.log("Response from getArtistInfo API", data);
            return new Artist(data.artist);
        } catch(jamesBond) {
            return jamesBond;
        }
    }

    this.getTopAlbums =  async function (artistName){
        try {
                    var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist="
                        + artistName + "&api_key=6585771b0106345cbaa348c1bee13e2a&format=json");
                        var data = await response.json();
            return data.topalbums.album.map((album) => {
                return album.name;
            })
        } catch(jamesBond) {
            return jamesBond;
        }
    }
    

   
    this.getSongs =  async function (artistName) {
        try {
       
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="
                + artistName + "&api_key=6585771b0106345cbaa348c1bee13e2a&format=json");
            var data = await response.json();
            return data.toptracks.track.map((track) => {
        return track.name;
    })
          
        } catch (error) {
            return error;
        }
    
    }
    
}

