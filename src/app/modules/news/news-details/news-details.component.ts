import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { NewsService } from 'app/modules/news/news.service';
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  public news$;
  public news;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    // private router: Router
  ) { }

  ngOnInit() {

    // console.log(this.newsService.getOneNews(1));

    // this.news$ = this.route.paramMap.switchMap((params: ParamMap) => this.newsService.getOneNews(params.get('id')).map(e => {
    //   return e;
    // });
    // this.newsSingleArray$ = this.getNewsDetails(this.route.snapshot.params['id']);
    const item_id = this.route.snapshot.params['id']
    this.getNewsDetails(item_id);
    // this.newsSingleArray$ = this.getNewsDetails(this.route.snapshot.params['id']);

    // const obj = this.news$.reduce((o, key) => Object.assign(o, {[key]: 'data'}), {});
    // this.news$ = this.newsSingleArray$[0];

  }
  getNewsDetails( id ) {

    this.newsService.getOneNews(id).subscribe(d => {
      this.news$ = d;
      this.news = this.news$.data;
      console.log('new4', this.news$);
      return this.news$
    })
      // this.news$[0] = 'loading...';
      // this.newsService.getNews().subscribe(d => {
      //   this.news$ = d.data.filter(e => e.id == id);
      //   console.log(this.news$[0]) ;
      //   return this.news$[0];
      // })


  }






}
