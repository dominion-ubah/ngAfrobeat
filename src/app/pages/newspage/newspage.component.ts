import { Component, OnInit } from '@angular/core';

import { NewsService } from 'app/modules/news/news.service';
// import * as moment from 'angular2-moment'
@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.scss']
})
export class NewspageComponent implements OnInit {
public news$;
  public news;

  public myInterval: Number = 3000;
  public activeSlideIndex: Number = 0;
  public noWrapSlides: Boolean = false;
  public slides: Array<Object> = [
      {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg'},
      {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg'},
      {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg'},
      {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg'},
  ];

  activeSlideChange() {
    // console.log(this.activeSlideIndex);
  }

  constructor(private newsService: NewsService) {
  }
  ngOnInit() {
    this.getNewsService();

    // this.infiniteLoop(this.news, 3);
  }

  getNewsService() {
    this.newsService.getNews().subscribe(d => {
      this.news$ = d;
      this.news = this.news$.data;
           console.log(this.news);
    },
    err => console.log(err),
    () => console.log('done')
  )
  }
}


export interface Order {
  // Properties
}


