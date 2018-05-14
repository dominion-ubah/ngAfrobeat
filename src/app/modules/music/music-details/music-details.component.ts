import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { MusicService } from 'app/modules/music/music.service';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.scss']
})
export class MusicDetailsComponent implements OnInit {

  public track$;
  public track;
  constructor(
    private musicService: MusicService,
    private route: ActivatedRoute,
    // private router: Router

  ) {
    // let initParams: InitParams = {
    //   // appId: '1927971220769787',
    //   appId: '2130518847191362',
    //   // xfbml: true,
    //   version: 'v2.8'
//    };
// console.log('Initializing Facebook');
//     this.fb.init(initParams);
   }

  ngOnInit() {

    // console.log(this.newsService.getOneNews(1));

    // this.news$ = this.route.paramMap.switchMap((params: ParamMap) => this.newsService.getOneNews(params.get('id')).map(e => {
    //   return e;
    // });
    // this.newsSingleArray$ = this.getNewsDetails(this.route.snapshot.params['id']);
    const item_id = this.route.snapshot.params['id']
    this.getSongDetails(item_id);
    // this.newsSingleArray$ = this.getNewsDetails(this.route.snapshot.params['id']);

    // const obj = this.news$.reduce((o, key) => Object.assign(o, {[key]: 'data'}), {});
    // this.news$ = this.newsSingleArray$[0];

  }
  getSongDetails( id ) {

    this.musicService.getSong(id).subscribe(d => {
      this.track$ = d;
      this.track = this.track$.data;
      console.log('new4', this.track$, this.track);
      return this.track$
    })
      // this.news$[0] = 'loading...';
      // this.newsService.getNews().subscribe(d => {
      //   this.news$ = d.data.filter(e => e.id == id);
      //   console.log(this.news$[0]) ;
      //   return this.news$[0];
      // })


  }
}

