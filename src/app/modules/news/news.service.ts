import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map'

// import { News } from './news';
// import { NEWS } from './mock-news';

const httpOptions = {
  headers: new HttpHeaders({'Content-type' : 'application/json'})
}
@Injectable()
export class NewsService {
  // public baseUrl = '';
public baseUrl= 'http://api.afrobeat.com/public';
// public baseUrl= 'http://localhost:8000';


  constructor(private http: HttpClient) { }

  getNews() {
    // tslint:disable-next-line:no-console
    // console.log(NEWS)
    // return NEWS;

    return this.http.get(
      this.baseUrl +
      // 'http://www.afrobeat.com/
      '/api/news', httpOptions)
  }

  postNews(news) {
    // tslint:disable-next-line:no-console
    // console.log(NEWS)
    // return NEWS;

    return this.http.post(this.baseUrl + '/api/news', news, httpOptions)
  }

  getOneNews(id) {
    // const user_id = id;
    // const d = NEWS.filter(e => e.id === user_id).map(e => {
    //   return e;
    // });
    // console.log('ad', user_id);

    // // tslint:disable-next-line:no-console
    // console.log('sd', d)
    // return d;
    
    return this.http.get(this.baseUrl + '/api/news/' + id, httpOptions)

  };

  updateNews(id, updatedNews) {
    return this.http.put(this.baseUrl + '/api/news/' + id, updatedNews, httpOptions)

  };


}


