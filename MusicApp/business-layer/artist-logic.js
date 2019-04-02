import { ArtistRepository } from '../repository-layer/artist-repo.js';
import { AlbumRepository } from '../repository-layer/album-repo.js';
import { SongsRepository } from '../repository-layer/songs-repository.js';

export function ArtistPageLogic() {

    this.artistRepo = new ArtistRepository();
    this.albumRepo = new AlbumRepository();
    this.songRepo = new SongsRepository();

    this.getDataForArtistPage = async function(artistName) {
        var artistData = await this.artistRepo.getArtistInfo(artistName);
        var albumNames = await this.artistRepo.getTopAlbums(artistName);
        var albums = await this.albumRepo.getAlbumInfo(artistName, albumNames);
        var songNames = await this.artistRepo.getSongs(artistName);
        var songs = await this.songRepo.getSongInfo(artistName, songNames);
        
        var pageData = {
            artistInfo: artistData,
            albumData: albums,
            songData: songs
        };

        return pageData;
    }


}