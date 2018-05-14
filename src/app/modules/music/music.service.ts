import { Injectable } from '@angular/core';
// import { ARTIST } from './mock-music';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
// import { SONG } from './mock-music';

const httpOptions = {
  headers: new HttpHeaders({'Content-type' : 'application/json'})
}

@Injectable()
export class MusicService {

  public baseUrl= 'http://music.afrobeat.com/public';
  // public baseUrl= 'http://localhost:8000';


  constructor(private http: HttpClient) { }
// song services
getSongs() {
  // console.log(SONG)
  // return SONG;
  return this.http.get(
    this.baseUrl +
    // 'http://www.afrobeat.com/
    '/api/track', httpOptions)
}

createSong(a) {
  return this.http.post(this.baseUrl + '/api/track', a, httpOptions)
}
updateSong(i, a) {

}
getSong(id) {

  return this.http.get(this.baseUrl + '/api/track/' + id, httpOptions)

}
deleteSong(i) {

  }


// artist services
getArtists() {
  // console.log(ARTIST)
  // return ARTIST;

  return this.http.get(
    this.baseUrl +
    // 'http://www.afrobeat.com/
    '/api/artist', httpOptions)
  }
createArtist(a) {


}
updateArtist(i, a) {

}

getArtist(id) {

    return this.http.get(this.baseUrl + '/api/artist/' + id, httpOptions)

  }
deleteArtist(i) {

  }


// album services
getAlbums() {
  // console.log(ARTIST)
  // return ARTIST;

  return this.http.get(
    this.baseUrl +
    // 'http://www.afrobeat.com/
    '/api/album', httpOptions)
  }
createAlbum(a) {


}
updateAlbum(i, a) {

}

getAlbum(id) {

    return this.http.get(this.baseUrl + '/api/album/' + id, httpOptions)

  }
deleteAlbum(i) {

  }
}
